package org.ruan.blog.pojo;

import java.util.Date;

/**
 * Message 留言
 *
 * @author ruan4261
 */
public class Message {

    //ID=>主键 自增基数1步数1
    private Integer id;
    //内容
    private String content;
    //友链账号（非友链则为null）
    private Link link;
    //回复的邮箱
    private String email;
    //发表时间
    private Date time;
    //父级留言(无父级留言此项为空)
    private Integer parent;
    //回复对象
    private Integer target;
    //来源
    private Origin origin;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Link getLink() {
        return link;
    }

    public void setLink(Link link) {
        this.link = link;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public Integer getParent() {
        return parent;
    }

    public void setParent(Integer parent) {
        this.parent = parent;
    }

    public Integer getTarget() {
        return target;
    }

    public void setTarget(Integer target) {
        this.target = target;
    }

    public Origin getOrigin() {
        return origin;
    }

    public void setOrigin(Origin origin) {
        this.origin = origin;
    }
}
