package org.ruan.blog.pojo;

import java.util.Date;

/**
 * Comment 博客文章所属评论
 *
 * @author ruan4261
 */
public class Comment {

    //ID=>主键 自增基数1步数1
    private Integer id;
    //评分(1~5)
    private Integer score;
    //内容
    private String content;
    //发表时间
    private Date time;
    //所属文章
    private Integer master;
    //父级评论
    private Integer parent;
    //回复对象
    private Integer target;
    //被点赞次数
    private Integer likeTimes;
    //来源
    private Origin origin;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public Integer getMaster() {
        return master;
    }

    public void setMaster(Integer master) {
        this.master = master;
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

    public Integer getLikeTimes() {
        return likeTimes;
    }

    public void setLikeTimes(Integer likeTimes) {
        this.likeTimes = likeTimes;
    }

    public Origin getOrigin() {
        return origin;
    }

    public void setOrigin(Origin origin) {
        this.origin = origin;
    }
}
