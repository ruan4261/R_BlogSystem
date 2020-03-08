package org.ruan.blog.interceptor;

import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 非管理员拦截器
 *
 * @author ruan4261
 */
public class HandleInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        if (request.getSession().getAttribute("") != null && request.getSession().getAttribute("").equals("")) {
			此处隐私要修改
            return true;
        } else {
            response.sendRedirect("/");
            return false;
        }
    }

}
