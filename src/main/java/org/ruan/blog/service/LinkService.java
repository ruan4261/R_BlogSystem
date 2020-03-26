package org.ruan.blog.service;

import org.ruan.blog.pojo.Link;

import java.util.List;

/**
 * 友链业务接口
 *
 * @author ruan4261
 */
public interface LinkService {

    /**
     * 友链注册时查重
     *
     * @param link
     * @return
     */
    public boolean linkHttpIsExist(Link link);

    /**
     * 友链注册
     *
     * @param link
     * @return
     */
    public boolean registerFriendLink(Link link);

    /**
     * 登录友链账号
     *
     * @param link
     * @return
     */
    public Link friendLinkLogin(Link link);

    /**
     * 获取友链列表
     *
     * @param link
     * @return
     */
    public List<Link> findLinkList(Link link);

    /**
     * 装载token
     *
     * @return
     */
    public List<String> tokenLoad();

    /**
     * 更改密码或邮箱
     *
     * @param link
     * @return
     */
    public boolean updateLinkPassword(Link link);

    /**
     * 更改基本信息（需要审核）
     *
     * @param link
     * @return
     */
    public boolean updateLinkInfo(Link link);
}
