package org.ruan.blog.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;

/**
 * 非可视化控制器=>数据操作接口
 *
 * @author ruan4261
 */
@Controller
@RequestMapping(value = "/api", method = RequestMethod.POST)
public class InvisibleController {

    /**
     * 管理员登录
     *
     * @param httpServletRequest
     * @return
     */
    @RequestMapping(value = "/admin", method = RequestMethod.GET)
    public Object AdminLogin(HttpServletRequest httpServletRequest) {
        String admin = httpServletRequest.getParameter("");
		此处要修改
        if (admin != null && admin.equals("")) httpServletRequest.getSession().setAttribute("", "");
        return "redirect:/";
    }
}
