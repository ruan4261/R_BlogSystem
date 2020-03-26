package org.ruan.blog.service;

import org.ruan.blog.pojo.Article;
import org.ruan.blog.pojo.Comment;
import org.ruan.blog.pojo.Origin;
import org.ruan.blog.pojo.Tag;

import java.util.*;

/**
 * 博客查询业务接口
 *
 * @author ruan4261
 */
public interface BlogService {

    /**
     * 查询匹配的文章数量
     *
     * @param article
     * @return
     */
    public Integer getArticleCount(Article article);

    /**
     * 查询文章列
     * 可查询标签，查询方式:'%*tag.id*%'
     * 参数order为排序方式
     * order==1 按时间排序=>同时识别置顶
     * order==2 按评分排序
     * order==3 按观看次数排序
     *
     * @param article
     * @param currentPage
     * @param pageSize
     * @param order
     * @return
     */
    public List<Article> getArticleList(Article article, Integer currentPage,
                                        Integer pageSize, Integer order);

    /**
     * 查询一篇文章
     *
     * @param article
     * @return
     */
    public Article getArticle(Article article);

    /**
     * 根据id拿到tag对象
     *
     * @param tag
     * @return
     */
    public Tag getTag(Tag tag);

    /**
     * 返回标签列 order by count desc
     * 可根据tag.name模糊查询
     *
     * @return
     */
    public List<Tag> getTagList(Tag tag);

    /**
     * 查询热门标签列size=10
     *
     * @return
     */
    public List<Tag> getHotTagList();

    /**
     * 模糊查询来源
     *
     * @param origin
     * @return
     */
    public List<Origin> getOriginList(Origin origin);

    /**
     * 归档时间线
     *
     * @param year
     * @param month
     * @return
     */
    public List<List<Article>> getArticleByTimeline(Integer year, Integer month);

    /**
     * 归档时间线上的文章数量
     * 分组查询
     *
     * @return
     */
    public LinkedHashMap<Date, Integer> getTimelineArticleCount();

    /**
     * 根据文章获得评论列
     * 一页读10条
     * 排序1为热度
     * 排序2为时间倒序
     *
     * @param article
     * @param currentPage
     * @param pageSize
     * @param order
     * @return
     */
    public List<Comment> getCommentByArticle(Article article, Integer currentPage, Integer pageSize, Integer order);

    /**
     * 查询一篇文章下评论总数
     *
     * @param article
     * @return
     */
    public Integer getCommentCount(Article article);

    /**
     * 查询独立评论总数
     *
     * @param article
     * @return
     */
    public Integer getCommentCountForPage(Article article);
}
