package org.ruan.blog.pojo;

/**
 * 来源类（仅作为外键展示）
 *
 * @author ruan4261
 */
public class Origin{

    //ID=>主键 自增基数1步数1
    private Integer id;
    //浏览器信息
    private String browser;
    //系统信息
    private String system;
    //来源IP
    private String ip;
    //ip地区
    private String address;
    //ip运营商
    private String isp;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getBrowser() {
        return browser;
    }

    public void setBrowser(String browser) {
        this.browser = browser;
    }

    public String getSystem() {
        return system;
    }

    public void setSystem(String system) {
        this.system = system;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getIsp() {
        return isp;
    }

    public void setIsp(String isp) {
        this.isp = isp;
    }
}
