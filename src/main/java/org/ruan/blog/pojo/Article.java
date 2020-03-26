package org.ruan.blog.pojo;

import org.ruan.blog.mapper.TagMapper;

import java.math.BigDecimal;
import java.util.ArrayList;
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

    /**
     * 不确定数据库是否含有标签的情况下组合list的方式
     */
    public void articleTagsToTagList() {
        String[] tagArr = this.getTags().split("\\*");
        //排除有标签为空的情况并转换为list
        List<Tag> tagList = new ArrayList<Tag>();
        for (int i = 0; i < tagArr.length; i++) {
            if (!tagArr[i].trim().equals("")) {
                Tag tag = new Tag();
                tag.setName(tagArr[i]);
                tagList.add(tag);
            }
        }
        this.setTagList(tagList);
    }

    /**
     * 将article内的tags转化为taglist
     * 前提为数据库必须文章的所有标签
     *
     * @param tagMapper
     */
    public void articleTagsToTagList(TagMapper tagMapper) {
        List<Tag> artTagList = new ArrayList<Tag>();
        String[] tagArr = this.getTags().split("\\*");
        for (String tag : tagArr) {
            if (tag.trim().equals("")) continue;
            Tag tagTemp = new Tag();
            tagTemp.setId(Integer.parseInt(tag));
            artTagList.add(tagMapper.getTag(tagTemp));
        }
        this.setTagList(artTagList);
    }
}
