package org.ruan.blog.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.ruan.blog.pojo.Origin;

import java.util.List;

/**
 * 来源映射
 *
 * @author ruan4261
 */
@Mapper
public interface OriginMapper {

    /**
     * 新建一个来源
     *
     * @param origin
     * @return
     */
    public Integer addOrigin(Origin origin);

    /**
     * 查询单个来源
     * 根据id
     *
     * @param origin
     * @return
     */
    public Origin getOrigin(Origin origin);

    /**
     * 查询来源列表
     * 根据 浏览器，系统，来源地域，运营商 四项模糊查询
     *
     * @param origin
     * @return
     */
    public List<Origin> getOriginList(Origin origin);

    /**
     * <!保留方法>
     * 修改一个来源
     * 根据id修改其他信息
     * </保留方法>
     *
     * @param origin
     * @return
     */
    public Integer updateOrigin(Origin origin);

    /**
     * <!保留方法>
     * 删除一个来源
     * 根据id
     * </!保留方法>
     *
     * @param origin
     * @return
     */
    public Integer deleteOrigin(Origin origin);
}
