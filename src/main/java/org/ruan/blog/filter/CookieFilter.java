package org.ruan.blog.filter;

import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * 使用过滤器增加Cookie
 */
@Component
@WebFilter(filterName = "cookieFilter", urlPatterns = "/*")
public class CookieFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) {
        System.out.println(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss ").format(new Date()) + " INFO cookieFilter --- OK");
    }

    @Override
    public void destroy() {
        System.out.println(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss ").format(new Date()) + " INFO cookieFilter --- Down");
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;
        HttpServletResponse httpServletResponse = (HttpServletResponse) servletResponse;
        boolean flag = true;
        boolean flag2 = true;
        boolean alwaysEmailFlag = true;
        Cookie[] cookies = httpServletRequest.getCookies();
        if (cookies != null && cookies.length > 0) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals("like-comment")) {
                    flag = false;
                } else if (cookie.getName().equals("like-message")) {
                    flag2 = false;
                } else if (cookie.getName().equals("always-email")) {
                    alwaysEmailFlag = false;
                }
            }
        }
        if (flag) {
            Cookie cookie = new Cookie("like-comment", "");
            cookie.setPath("/");
            cookie.setHttpOnly(false);
            cookie.setMaxAge(60 * 365 * 24 * 60 * 60);
            httpServletResponse.addCookie(cookie);
        }
        if (flag2) {
            Cookie cookie = new Cookie("like-message", "");
            cookie.setPath("/");
            cookie.setHttpOnly(false);
            cookie.setMaxAge(60 * 365 * 24 * 60 * 60);
            httpServletResponse.addCookie(cookie);
        }
        if (alwaysEmailFlag) {
            Cookie cookie = new Cookie("always-email", "");
            cookie.setPath("/");
            cookie.setHttpOnly(true);
            cookie.setMaxAge(365 * 24 * 60 * 60);
            httpServletResponse.addCookie(cookie);
        }
        filterChain.doFilter(servletRequest, servletResponse);
    }

}
