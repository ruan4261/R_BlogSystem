package org.ruan.blog.config;

import com.alibaba.druid.pool.DruidDataSource;
import com.alibaba.druid.support.http.StatViewServlet;
import com.alibaba.druid.support.http.WebStatFilter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

/**
 * 数据源监控配置
 *
 * @author ruan4261
 */
@Configuration
public class DruidConfig {

    @Bean
    @ConfigurationProperties(prefix = "spring.datasource")
    public DataSource druid() {
        return new DruidDataSource();
    }

    //DruidView
    @Bean
    public ServletRegistrationBean statViewServlet() {
        //处理/druid/*请求
        ServletRegistrationBean servletRegistrationBean = new ServletRegistrationBean(new StatViewServlet(), "/druid/*");
        //配置初始化
        Map<String, String> map = new HashMap<>();
        map.put("loginUsername", "");
        map.put("loginPassword", "");
        //白名单,多个用逗号分割， 如果allow没有配置或者为空，则允许所有访问
        //map.put("allow", "");
        //黑名单,多个用逗号分割 (共同存在时，deny优先于allow)
        //map.put("deny", "");
        //是否可以重置数据源，禁用HTML页面上的“Reset All”功能
        map.put("resetEnable", "false");
        servletRegistrationBean.setInitParameters(map);

        return servletRegistrationBean;
    }

    //Monitor
    @Bean
    public FilterRegistrationBean webStatFilter() {
        FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean();
        filterRegistrationBean.setFilter(new WebStatFilter());

        Map<String, String> map = new HashMap<>();
        //所有请求进行监控处理
        filterRegistrationBean.setUrlPatterns(Arrays.asList("/*"));
        //添加不需要忽略的格式信息
        map.put("exclusions", "*.js,*.css,/druid/*");
        filterRegistrationBean.setInitParameters(map);
        return filterRegistrationBean;
    }
}
