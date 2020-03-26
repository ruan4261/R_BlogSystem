package org.ruan.blog.service.impl;

import org.ruan.blog.mapper.LinkMapper;
import org.ruan.blog.pojo.Link;
import org.ruan.blog.service.LinkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

/**
 * 友链接口实现类
 *
 * @author ruan4261
 */
@Service("linkService")
@Transactional
public class LinkServiceImpl implements LinkService {

    @Autowired
    private LinkMapper linkMapper;

    /**
     * 友链注册时查重
     *
     * @param link
     * @return
     */
    @Override
    public boolean linkHttpIsExist(Link link) {
        if (linkMapper.linkHttpIsExist(link) > 0) return true;
        else return false;
    }

    /**
     * 友链注册
     *
     * @param link
     * @return
     */
    @Override
    public boolean registerFriendLink(Link link) {
        link.setStatus(2);
        link.setToken(UUID.randomUUID().toString().replace("-", ""));
        link.setHttp(link.getHttp().replace("https://", "").replace("http://", ""));
        link.setProfile(link.getProfile().replace("https://", "").replace("http://", ""));
        if (linkMapper.addLink(link) > 0) return true;
        else return false;
    }

    /**
     * 登录友链账号
     *
     * @param link
     * @return
     */
    @Override
    public Link friendLinkLogin(Link link) {
        return linkMapper.linkLogin(link);
    }

    /**
     * 获取友链列表
     *
     * @param link
     * @return
     */
    @Override
    public List<Link> findLinkList(Link link) {
        return linkMapper.getLinkList(link);
    }

    /**
     * 装载token
     *
     * @return
     */
    @Override
    public List<String> tokenLoad() {
        return linkMapper.getTokenList();
    }

    /**
     * 更改密码或邮箱
     *
     * @param link
     * @return
     */
    @Override
    public boolean updateLinkPassword(Link link) {
        link.setToken(UUID.randomUUID().toString().replace("-", ""));
        if (linkMapper.updateLink(link) > 0) return true;
        else return false;
    }

    /**
     * 更改基本信息（需要审核）
     *
     * @param link
     * @return
     */
    @Override
    public boolean updateLinkInfo(Link link) {
        link.setStatus(2);
        link.setToken(UUID.randomUUID().toString().replace("-", ""));
        link.setProfile(link.getProfile().replace("https://", "").replace("http://", ""));
        if (linkMapper.updateLink(link) > 0) return true;
        else return false;
    }
}
