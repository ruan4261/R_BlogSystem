package org.ruan.blog.aop;

import org.apache.commons.lang3.ArrayUtils;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.Signature;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.ruan.blog.mapper.ArticleMapper;
import org.ruan.blog.pojo.Article;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;

/**
 * 文章业务切面
 */
@Aspect
@Component
public class ArticleAspect {

    @Autowired
    private ArticleMapper articleMapper;

    /**
     * 指定文章的请求切点
     */
    @Pointcut("execution(public * org.ruan.blog.controller.BlogController.articlePage(..))")
    public void articleGetPointCut() {
    }

    /**
     * 在请求一篇文章结束后，判断是否增加被观看量并执行
     *
     * @param joinPoint
     */
    @Around(value = "articleGetPointCut()")
    public Object addLookTimes(ProceedingJoinPoint joinPoint) throws Throwable {
        Object result = joinPoint.proceed();
        //如果是正常返回，则可以进行判断是否增加被观看量
        if (result.equals("content/article")) {
            MethodSignature methodSignature = (MethodSignature) joinPoint.getSignature();
            String[] argsName = methodSignature.getParameterNames();
            HttpServletRequest request = (HttpServletRequest) joinPoint.getArgs()[ArrayUtils.indexOf(argsName, "httpServletRequest")];
            //当没有指定选页时增加被观看量
            if (request.getParameter("currentPage") == null) {
                Integer argIndex = ArrayUtils.indexOf(argsName, "id");
                Integer id = (Integer) joinPoint.getArgs()[argIndex];
                Article article = new Article();
                article.setId(id);
                article = articleMapper.getArticle(article);
                article.setLook(article.getLook() + 1);
                articleMapper.updateArticle(article);
            }
        }
        return result;
    }
}
