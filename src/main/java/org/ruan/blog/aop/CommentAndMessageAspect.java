package org.ruan.blog.aop;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.ruan.blog.component.EmailHandler;
import org.ruan.blog.mapper.ArticleMapper;
import org.ruan.blog.mapper.CommentMapper;
import org.ruan.blog.pojo.Article;
import org.ruan.blog.pojo.Comment;
import org.ruan.blog.service.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

/**
 * 用于发送邮件的切面
 */
@Aspect
@Component
public class CommentAndMessageAspect {

    @Autowired
    private DataService dataService;

    @Autowired
    private CommentMapper commentMapper;

    @Autowired
    private ArticleMapper articleMapper;

    @Autowired
    private EmailHandler emailHandler;

    @Pointcut("execution(public * org.ruan.blog.service.DataService.addComment(..)))")
    public void commentAddPointcut() {
    }

    @Pointcut("execution(public * org.ruan.blog.service.MessageService.*(..))")
    public void messageAddPointcut() {
    }

    @Around("commentAddPointcut()")
    public Object commentAddAround(ProceedingJoinPoint joinPoint) throws Throwable {
        Object result = joinPoint.proceed();
        Comment comment = (Comment) joinPoint.getArgs()[0];
        if ((boolean) result) {
            /**
             * 确认事务返回值为true后执行以下操作
             * 1.重新计算master的评分
             * 2.判断target是否存在，发送邮件消息
             */
            //获得完整评论对象
            if (comment.getScore() != null) {
                Article article = new Article();
                article.setId(comment.getMaster());
                articleMapper.getArticle(article);
                dataService.articleScoreFlush(article);
            } else if (comment.getTarget() != null) {//如果有评分，就不可能有回复对象
                //获取回复对象信息，并调用邮件接口
                Comment target = new Comment();
                target.setId(comment.getTarget());
                target = commentMapper.getComment(target);
                if (target.getEmail() != null) {
                    DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                    //对象邮箱不为空，可以发送
                    emailHandler.sendEmailWithSSL("您有新的回复",
                            "<h1>来自ruan4261博客的回复提醒邮件</h1>" +
                                    "<p>您在本博客内发表的评论已经有了新的回复，" + "<a href=\"https://ruan4261.com/" + target.getMaster() + "#comment\" target=\"_blank\">进入博客原文</a>。" + "</p>" +
                                    "<p>该回复为:</p>" +
                                    "<p style=\"text-indent:2em;font-weight: bold;\">" + comment.getContent() + "</p>" +
                                    "<span style=\"color: green;\">回复时间:" + dateFormat.format(comment.getTime()) +
                                    "<br>回复人:" + (comment.getLink() == null ? "(游客)来自" + comment.getOrigin().getAddress() :
                                    "(认证账号)" + comment.getLink().getTitle()) + "</span>" +
                                    "<p>您之前的评论如下:</p>" +
                                    "<p style=\"text-indent:2em;font-weight: bold;\">" + target.getContent() + "</p>" +
                                    "<span style=\"color: green;\">评论时间:" + dateFormat.format(target.getTime()) + "</span>",
                            target.getEmail());
                }
            }
        }
        return result;
    }

    @Around("messageAddPointcut()")
    public Object messageAddAround(ProceedingJoinPoint joinPoint) throws Throwable {
        return joinPoint.proceed();
    }
}
