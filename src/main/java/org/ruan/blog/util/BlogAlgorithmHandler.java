package org.ruan.blog.util;

import com.alibaba.fastjson.JSONObject;
import org.ruan.blog.pojo.Link;
import org.ruan.blog.pojo.Origin;
import org.ruan.blog.service.BlogService;
import org.ruan.blog.service.DataService;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * 解耦合类
 * 请勿传入可被互引用对象，以便于GC回收
 *
 * @author ruan4261
 */
public class BlogAlgorithmHandler {

    /**
     * 服务器错误时给响应添加报错信息
     *
     * @param httpServletRequest
     * @param code
     * @param message
     */
    public static void setErrorMessage(HttpServletRequest httpServletRequest, Integer code, String message) {
        httpServletRequest.setAttribute("errorCode", code);
        httpServletRequest.setAttribute("msg", message);
    }

    /**
     * request到分页器逻辑封装
     *
     * @param httpServletRequest
     * @param pageSize
     * @param totalCount
     * @return
     */
    public static Page pageHandler(HttpServletRequest httpServletRequest, Integer pageSize, Integer totalCount) {
        if (totalCount < 1) return null;

        Integer currentPage;
        try {
            currentPage = Integer.parseInt(httpServletRequest.getParameter("currentPage"));
            if (currentPage < 1) currentPage = 1;
        } catch (Exception ex) {
            currentPage = 1;
        }
        Page page = new Page();
        page.setPageSize(pageSize);
        page.setTotalCount(totalCount);

        if (currentPage > page.getTotalPage()) currentPage = page.getTotalPage();
        page.setCurrentPageNo(currentPage);
        httpServletRequest.setAttribute("totalPage", page.getTotalPage());
        httpServletRequest.setAttribute("currentPage", page.getCurrentPageNo());
        return page;
    }

    /**
     * 清除session中的邮件缓存
     *
     * @param httpServletRequest
     */
    public static void clearSessionEmail(HttpServletRequest httpServletRequest) {
        httpServletRequest.getSession().removeAttribute("verifyEmail");
        httpServletRequest.getSession().removeAttribute("verifyCodePassTime");
        httpServletRequest.getSession().removeAttribute("verifyCode");
        httpServletRequest.getSession().removeAttribute("linkVerifyEmail");
        httpServletRequest.getSession().removeAttribute("linkVerifyCodePassTime");
        httpServletRequest.getSession().removeAttribute("linkVerifyCode");
    }

    /**
     * 返回一个适合的邮箱
     *
     * @param httpServletRequest
     * @return
     */
    public static String allWaysGetEmail(HttpServletRequest httpServletRequest) {
        String email = null;
        if (httpServletRequest.getSession().getAttribute("friendLink") != null) {
            Link link = (Link) httpServletRequest.getSession().getAttribute("friendLink");
            email = link.getEmail();
        } else {
            Cookie[] cookies = httpServletRequest.getCookies();
            for (Cookie ck : cookies) {
                if (ck.getName().equals("always-email")) {
                    email = ck.getValue();
                    break;
                }
            }
        }

        if (httpServletRequest.getParameter("verifyCode") != null && httpServletRequest.getParameter("verifyCode").length() == 6 && httpServletRequest.getSession().getAttribute("verifyEmail") != null) {
            if (new Date().getTime() <= (Long) httpServletRequest.getSession().getAttribute("verifyCodePassTime") && httpServletRequest.getParameter("verifyCode").equals(httpServletRequest.getSession().getAttribute("verifyCode").toString())) {
                email = httpServletRequest.getSession().getAttribute("verifyEmail").toString();
            } else {
                throw new RuntimeException("验证码错误或过期");
            }
        }
        return email;
    }
}
