package org.ruan.blog.component;

import org.springframework.stereotype.Component;
import org.springframework.web.context.ServletContextAware;

import javax.servlet.ServletContext;

/**
 * 服务上下文中初始化博客信息
 *
 * @author ruan4261
 */
@Component
public class BlogContextAware implements ServletContextAware {
    @Override
    public void setServletContext(ServletContext servletContext) {
        BlogContextHandler.updateApp(servletContext);
    }
}
