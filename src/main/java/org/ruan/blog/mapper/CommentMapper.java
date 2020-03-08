package org.ruan.blog.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
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
                                        @Param("order") Integer order);

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
