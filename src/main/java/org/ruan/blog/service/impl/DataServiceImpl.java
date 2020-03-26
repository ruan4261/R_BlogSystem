package org.ruan.blog.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.rometools.rome.io.FeedException;
import org.ruan.blog.util.LocalIOStreamHandler;
import org.ruan.blog.component.RssHandler;
import org.ruan.blog.mapper.*;
import org.ruan.blog.pojo.*;
import org.ruan.blog.service.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.List;

@Service("dataService")
@Transactional
public class DataServiceImpl implements DataService {

    @Autowired
    private ArticleMapper articleMapper;

    @Autowired
    private TagMapper tagMapper;

    @Autowired
    private OriginMapper originMapper;

    @Autowired
    private CommentMapper commentMapper;

    @Autowired
    private RssHandler rssHandler;

    /**
     * 新增文章
     * 操作包括：
     * 1、标签新增 或 标签count++
     * 2、将content通过io流构造新的json文件，放至C:/data/Blog/articleJson/article_{id}.json
     * 内容为{"content":"#{content}"}
     * 3、根据contents(json格式)生成目录
     * 4、RSS
     * 一个阶段报错，全部回滚
     *
     * @param article
     * @return
     */
    @Override
    public boolean addArticleLevelOne(Article article, String content, String contents, Integer isRSS) throws IOException, FeedException {
        //1、审查标签合法:如果不存在则创建，初始count为1;如存在则count++
        List<Tag> tagList = article.getTagList();
        for (int i = 0; i < tagList.size(); i++) {
            Tag tag = new Tag();
            tag.setName(tagList.get(i).getName());
            if ((tag = tagMapper.getTag(tag)) != null) {
                //标签存在
                tag.setCount(tag.getCount() + 1);
                tagMapper.updateTag(tag);
            } else {
                //标签不存在
                tag = new Tag();
                tag.setName(tagList.get(i).getName());
                tag.setCount(1);
                tagMapper.addTag(tag);
            }
            //将此轮审核完成的标签放入article.tags
            if (tag.getId() != null) {
                if (i == 0) {
                    article.setTags("*" + tag.getId().toString());
                } else article.setTags(article.getTags() + "*" + tag.getId().toString());
            } else throw new RuntimeException("数据库异常：标签异常！");
        }
        //加上最后一个* 内容为*n*n*n*n*
        article.setTags(article.getTags() + "*");

        //现在的时间
        article.setTime(new Date());

        //检查唯一置顶
        if (article.getTop() == 1) {
            Article articleTemp = new Article();
            articleTemp.setTop(1);
            List<Article> articleList = articleMapper.getArticleList(articleTemp, null, null, null);
            if (articleList != null && articleList.size() > 0) {
                if ((articleTemp = articleList.get(0)) != null) {
                    articleTemp.setTop(0);
                    articleMapper.updateArticle(articleTemp);
                }
            }
        }

        //持久化(取得数据库id方便之后操作)
        if (articleMapper.addArticle(article) <= 0) throw new RuntimeException("数据库异常：文章字段异常！");

        //保存contentJson-->内容
        if (!LocalIOStreamHandler.writeFile("C:" + File.separator + "data" + File.separator + "Blog" +
                File.separator + "articleJson" + File.separator + "article_" +
                article.getId().toString() + ".json", content)) {
            throw new RuntimeException("IO流异常：json内容上传终止！");
        }

        //保存contentsJson-->目录
        if (!LocalIOStreamHandler.writeFile("C:" + File.separator + "data" + File.separator + "Blog" +
                File.separator + "articleContents" + File.separator + "article_" +
                article.getId().toString() + ".json", contents)) {
            throw new RuntimeException("IO流异常：json内容上传终止！");
        }

        //生成RSS发布
        if (isRSS == 1) {
            //isRSS指标为1时生成
            JSONObject jsonObject = JSONObject.parseObject(content);
            rssHandler.updateRss(article, jsonObject.get("content").toString());
        }

        return true;
    }

    /**
     * 单纯增加一个来源项
     * 总是在其他事务执行前执行，不共享回滚
     *
     * @param origin
     * @return
     */
    @Override
    public boolean addOrigin(Origin origin) {
        if (originMapper.addOrigin(origin) > 0) return true;
        else throw new RuntimeException("数据库异常：新增来源失败！");
    }

    /**
     * 给某文章新增一条评论
     * 同时修改该文章的score和score number字段
     *
     * @param comment
     * @return
     */
    @Override
    public boolean addComment(Comment comment) {
        if (comment == null || comment.getMaster() == null) return false;
        if (comment.getContent() == null) comment.setContent("");
        comment.setTime(new Date());

        if (commentMapper.addComment(comment) > 0) return true;
        else throw new RuntimeException("数据库异常：新增评论失败！");
    }

    /**
     * 刷新一篇文章的评分
     *
     * @param article
     */
    @Override
    public void articleScoreFlush(Article article) {
        articleMapper.flushArticleScore(article);
    }

    /**
     * 评论点赞
     *
     * @param comment
     * @return
     */
    @Override
    public boolean commentLikeTimesAdd(Comment comment) {
        comment = commentMapper.getComment(comment);
        comment.setLikeTimes(comment.getLikeTimes() + 1);
        if (commentMapper.updateComment(comment) > 0) return true;
        return false;
    }
}
