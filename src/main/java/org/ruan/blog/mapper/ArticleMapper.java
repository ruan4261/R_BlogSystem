package org.ruan.blog.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.ruan.blog.pojo.Article;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;

/**
 * 博客文章映射
 *
 * @author ruan4261
 */
@Mapper
public interface ArticleMapper {

    /**
     * 新增一篇文章
     *
     * @param article
     * @return
     */
    public Integer addArticle(Article article);

    /**
     * 查询符合条件的文章数量
     *
     * @param article
     * @return
     */
    public Integer getArticleCount(Article article);

    /**
     * 查询一篇文章
     *
     * @param article
     * @return
     */
    public Article getArticle(Article article);

    /**
     * 查询文章列
     * 参数order为排序方式
     * order==1 按时间排序=>同时识别置顶
     * order==2 按评分排序
     * order==3 按观看次数排序
     *
     * @param article
     * @param pageOpen
     * @param pageSize
     * @param order
     * @return
     */
    public List<Article> getArticleList(@Param("article") Article article,
                                        @Param("pageOpen") Integer pageOpen,
                                        @Param("pageSize") Integer pageSize,
                                        @Param("order") Integer order);

    /**
     * 修改指定文章
     * 根据id
     *
     * @param article
     * @return
     */
    public Integer updateArticle(Article article);

    /**
     * <!保留方法>
     * 删除指定文章
     * 根据id
     * </!保留方法>
     *
     * @param article
     * @return
     */
    public Integer deleteArticle(Article article);

    /**
     * 根据时间线查询少量数据
     *
     * @param open
     * @param end
     * @return
     */
    public List<Article> getArticleListByTimeline(@Param("open") LocalDateTime open, @Param("end") LocalDateTime end);

    /**
     * 归档时间线上的文章数量
     * 分组查询
     *
     * @return
     */
    public LinkedHashMap<Date,Integer> getTimelineArticleCount();
}
