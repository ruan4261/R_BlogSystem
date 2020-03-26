package org.ruan.blog.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.ruan.blog.pojo.Link;

import java.util.List;

/**
 * 友链映射
 *
 * @author ruan4261
 */
@Mapper
public interface LinkMapper {

    /**
     * 登录友链账号
     *
     * @param link
     * @return
     */
    public Link linkLogin(Link link);

    /**
     * 友链查重
     *
     * @param link
     * @return
     */
    public Integer linkHttpIsExist(Link link);

    /**
     * 新增一个友链
     *
     * @param link
     * @return
     */
    public Integer addLink(Link link);

    /**
     * 查询单个友链
     * 根据id
     *
     * @param link
     * @return
     */
    public Link getLink(Link link);

    /**
     * 查询友链列
     * 根据 顶级域路径，友链名称，友链描述 模糊查询
     *
     * @param link
     * @return
     */
    public List<Link> getLinkList(Link link);

    /**
     * 修改单个友链
     * 根据id
     *
     * @param link
     * @return
     */
    public Integer updateLink(Link link);

    /**
     * 删除单个友链
     * 根据id
     *
     * @param link
     * @return
     */
    public Integer deleteLink(Link link);

    /**
     * 纯加载token
     * 只加载status=1的token
     *
     * @return
     */
    public List<String> getTokenList();


}
