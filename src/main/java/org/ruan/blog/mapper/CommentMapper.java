package org.ruan.blog.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.ruan.blog.pojo.Article;
import org.ruan.blog.pojo.Comment;

import java.util.List;

/**
 * 文章评论映射
 *
 * @author ruan4261
 */
@Mapper
public interface CommentMapper {

    /**
     * 新增一条评论
     *
     * @param comment
     * @return
     */
    public Integer addComment(Comment comment);

    /**
     * 查询单条评论
     *
     * @param comment
     * @return
     */
    public Comment getComment(Comment comment);

    /**
     * *************此方法因产生数据库连接过多，暂时摒弃，不作为业务方法，仅供后台使用，游客查询请使用getCommentListOnlyOnce方法**************
     * 查询评论列
     * 主要索引列comment_master
     * 模糊查询列comment_content
     * 副索引
     * comment_parent
     * comment_target
     * comment_origin
     * 排序列
     * comment_like_times / comment_time
     * 1 / 2
     * 如果subset为空，则寻找parent为null的评论，也就是顶级块评论
     * 如果不为空，请设置comment查询条件
     *
     * @param comment
     * @param pageOpen
     * @param pageSize
     * @param order
     * @return
     */
    public List<Comment> getCommentList(@Param("comment") Comment comment,
                                        @Param("pageOpen") Integer pageOpen,
                                        @Param("pageSize") Integer pageSize,
                                        @Param("order") Integer order,
                                        @Param("subset") Integer subset);


    /**
     * 仅查询一次数据库
     * 获得pageSize条顶级评论以及排序后的子评论
     *
     * @param comment
     * @param pageOpen
     * @param pageSize
     * @param order
     * @return
     */
    public List<Comment> getCommentListOnlyOnce(@Param("comment") Comment comment,
                                                @Param("pageOpen") Integer pageOpen,
                                                @Param("pageSize") Integer pageSize,
                                                @Param("order") Integer order);

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

    /**
     * 修改一条评论
     * 根据id
     * <p>
     * 用例=>可以当做删除评论来使用=>为保存其子评论
     *
     * @param comment
     * @return
     */
    public Integer updateComment(Comment comment);

    /**
     * <!保留方法>
     * 删除一条评论
     * 根据id
     * </!保留方法>
     *
     * @param comment
     * @return
     */
    public Integer deleteComment(Comment comment);
}
