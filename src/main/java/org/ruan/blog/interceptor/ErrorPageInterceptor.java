package org.ruan.blog.interceptor;

import org.ruan.blog.component.BlogAlgorithmHandler;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.List;

/**
 * 错误页面拦截器
 *
 * @author ruan4261
 */
public class ErrorPageInterceptor implements HandlerInterceptor {

    private List<Integer> errorCodeList = Arrays.asList(500, 501, 404, 403, 400);

    @Override
    public boolean preHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object handler) throws
            Exception {
        if (errorCodeList.contains(httpServletResponse.getStatus())) {
            BlogAlgorithmHandler.setErrorMessage(httpServletRequest, httpServletResponse.getStatus(), "您的路径或参数非法！");
            httpServletResponse.setStatus(200);
            httpServletRequest.getRequestDispatcher("error").forward(httpServletRequest, httpServletResponse);
            return false;
        }
        return true;
    }
}
