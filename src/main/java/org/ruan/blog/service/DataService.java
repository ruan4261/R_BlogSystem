package org.ruan.blog.service;

import com.rometools.rome.io.FeedException;
import org.ruan.blog.pojo.Article;
import org.ruan.blog.pojo.Comment;
import org.ruan.blog.pojo.Link;
import org.ruan.blog.pojo.Origin;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

/**
 * 数据业务接口
 *
 * @author ruan4261
 */
public interface DataService {

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
     * @param content
     * @param contents
     * @param isRSS
     * @return
     * @throws IOException
     * @throws FeedException
     */
    public boolean addArticleLevelOne(Article article, String content, String contents, Integer isRSS) throws IOException, FeedException;

    /**
     * 单纯增加一个来源项
     * 总是在其他事务执行前执行，不共享回滚
     *
     * @param origin
     * @return
     */
    public boolean addOrigin(Origin origin);

    /**
     * 给某文章新增一条评论
     * 同时修改该文章的score和score number字段
     *
     * @param comment
     * @return
     */
    public boolean addComment(Comment comment);

    /**
     * 刷新一篇文章的评分
     *
     * @param article
     */
    public void articleScoreFlush(Article article);

    /**
     * 评论点赞
     *
     * @param comment
     * @return
     */
    public boolean commentLikeTimesAdd(Comment comment);

}
