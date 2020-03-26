package org.ruan.blog.pojo;

/**
 * 友链
 *
 * @author ruan4261
 */
public class Link {

    //ID=>主键 自增基数1步数1
    private Integer id;
    //顶级域路径
    private String http;
    //网站名称or站长名称
    private String title;
    //网站描述or站长签名
    private String desc;
    //友链显示图片
    private String profile;
    //友链邮箱
    private String email;
    //友链账号密码
    private String password;
    //友链状态
    private Integer status;
    //密钥
    private String token;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getHttp() {
        return http;
    }

    public void setHttp(String http) {
        this.http = http;
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

    public String getProfile() {
        return profile;
    }

    public void setProfile(String profile) {
        this.profile = profile;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
