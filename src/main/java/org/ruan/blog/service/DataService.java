package org.ruan.blog.service;

import com.rometools.rome.io.FeedException;
import org.ruan.blog.pojo.Article;
import org.ruan.blog.pojo.Comment;
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
     * 3、文章封面保存至C:/data/Blog/articleCovers/文件夹中，文件名为article_cover_{id}.jpg
     * 一个阶段报错，全部回滚
     *
     * @param article
     * @return
     */
    public boolean addArticleLevelOne(Article article, String content, Integer isRSS) throws IOException, FeedException;

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
     * 更新一篇文章
     * 大致用途:观看量 及 评分
     *
     * @param article
     * @return
     */
    public boolean updateArticleLook(Article article);
}
