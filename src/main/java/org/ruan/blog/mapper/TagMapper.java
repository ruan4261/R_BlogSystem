package org.ruan.blog.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.ruan.blog.pojo.Tag;

import java.util.List;

/**
 * 标签映射
 *
 * @author ruan4261
 */
@Mapper
public interface TagMapper {

    /**
     * 新增一个标签
     *
     * @param tag
     * @return
     */
    public Integer addTag(Tag tag);

    /**
     * 查询单个标签
     * 根据id
     *
     * @param tag
     * @return
     */
    public Tag getTag(Tag tag);

    /**
     * 查询标签列
     * 根据标签名模糊查询
     *
     * @param tag
     * @param size 查询limit(0,num) 为空时查询所有
     * @return
     */
    public List<Tag> getTagList(@Param("tag") Tag tag, @Param("size") Integer size);

    /**
     * 修改单个标签
     * 根据id
     *
     * @param tag
     * @return
     */
    public Integer updateTag(Tag tag);

    /**
     * <!保留方法>
     * 删除单个标签
     * 根据id
     * </!保留方法>
     *
     * @param tag
     * @return
     */
    public Integer deleteTag(Tag tag);
}
