package org.ruan.blog.pojo;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

/**
 * Article 博客文章
 *
 * @author ruan4261
 */
public class Article {

    //ID=>主键 自增基数1步数1
    private Integer id;
    //文章标题
    private String title;
    //描述
    private String desc;
    //被观看次数
    private Integer look;
    //发表时间
    private Date time;
    //评论打分
    private BigDecimal score;
    //打分人数
    private Integer scoreNumber;
    //标签乱序
    private String tags;
    //置顶标识
    private Integer top;
    //来源
    private Origin origin;

    //评论列表=>数据库不存在此列
    private List<Comment> comments;
    //标签列表=>数据库不存在此列
    private List<Tag> tagList;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public Integer getLook() {
        return look;
    }

    public void setLook(Integer look) {
        this.look = look;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public BigDecimal getScore() {
        return score;
    }

    public void setScore(BigDecimal score) {
        this.score = score;
    }

    public Integer getScoreNumber() {
        return scoreNumber;
    }

    public void setScoreNumber(Integer scoreNumber) {
        this.scoreNumber = scoreNumber;
    }

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }

    public Integer getTop() {
        return top;
    }

    public void setTop(Integer top) {
        this.top = top;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public List<Tag> getTagList() {
        return tagList;
    }

    public void setTagList(List<Tag> tagList) {
        this.tagList = tagList;
    }

    public Origin getOrigin() {
        return origin;
    }

    public void setOrigin(Origin origin) {
        this.origin = origin;
    }
}
