package org.ruan.blog.interceptor;

import org.ruan.blog.util.BlogAlgorithmHandler;
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
            return true;
        } else {
            BlogAlgorithmHandler.setErrorMessage(request, 403, "您没有权限进入此页面。");
            response.setStatus(200);
            request.getRequestDispatcher("error").forward(request, response);
            return false;
        }
    }

}
