package org.ruan.blog.pojo;

/**
 * Tag 博客文章引用标签
 *
 * @author ruan4261
 */
public class Tag {

    //ID=>主键 自增基数1步数1
    private Integer id;
    //标签名
    private String name;
    //带有该标签的文章数量
    private Integer count;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }
}
