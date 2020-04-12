package org.ruan.blog.controller;

import org.ruan.blog.component.HttpRequestHandler;
import org.ruan.blog.util.BlogAlgorithmHandler;
import org.ruan.blog.component.EmailHandler;
import org.ruan.blog.pojo.Comment;
import org.ruan.blog.pojo.Link;
import org.ruan.blog.service.BlogService;
import org.ruan.blog.service.DataService;
import org.ruan.blog.service.LinkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.mail.MessagingException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * 非可视化控制器=>数据操作接口
 *
 * @author ruan4261
 */
@Controller
@RequestMapping(value = "/api", method = RequestMethod.POST)
public class InvisibleController {

    @Autowired
    private EmailHandler emailHandler;

    @Autowired
    private BlogService blogService;

    @Autowired
    private DataService dataService;

    @Autowired
    private LinkService linkService;

    @Autowired
    private HttpRequestHandler httpRequestHandler;

    /**
     * 管理员登录
     *
     * @param httpServletRequest
     * @return
     */
    @RequestMapping(value = "/admin", method = RequestMethod.GET)
    public Object AdminLogin(HttpServletRequest httpServletRequest) {
        String admin = httpServletRequest.getParameter("");
        if (admin != null && admin.equals("")) httpServletRequest.getSession().setAttribute("", "");
        return "redirect:/";
    }

    /**
     * 登出，销毁session
     *
     * @param httpServletRequest
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "/logout.do", method = RequestMethod.POST)
    public Object logout(HttpServletRequest httpServletRequest) {
        httpServletRequest.getSession().invalidate();
        return true;
    }

    /**
     * 登出，销毁session
     *
     * @param httpServletRequest
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "/login.do", method = RequestMethod.POST)
    public Object login(HttpServletRequest httpServletRequest) {
        Map<String, Object> map = new HashMap<String, Object>();
        Link link = new Link();
        link.setHttp(httpServletRequest.getParameter("http"));
        link.setPassword(httpServletRequest.getParameter("password"));
        link = linkService.friendLinkLogin(link);
        if (link == null) {
            map.put("result", false);
            map.put("message", "登录失败，请检查您的友链是否存在于友链页面，如果友链不存在，则友链已进入消隐状态。请确保您的域名可以使用https正常访问，一周后账号将会恢复正常。");
        } else {
            httpServletRequest.getSession().setAttribute("friendLink", link);
            map.put("result", true);
            map.put("message", "您的友链账号登录成功，友链名:" + link.getTitle() + ",域名:" + link.getHttp() + "。");
        }
        return map;
    }

    /**
     * 发送邮箱验证码
     *
     * @param httpServletRequest
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "/email.verify")
    public Object ajaxForEmailVerify(HttpServletRequest httpServletRequest) {
        String email = httpServletRequest.getParameter("email");
        if (email != null && email.indexOf("@") != -1 && email.indexOf(".", email.indexOf("@")) != -1) {
            Integer verifyCode = ((Double) (((Math.random() * 9) + 1) * 100000)).intValue();
            httpServletRequest.getSession().setAttribute("verifyCode", verifyCode);
            httpServletRequest.getSession().setAttribute("verifyEmail", email);
            httpServletRequest.getSession().setAttribute("verifyCodePassTime", new Date().getTime() + 300000);
            try {
                emailHandler.sendEmailWithSSL("ruan4261博客的验证码",
                        "<h1>来自ruan4261博客的邮箱验证码</h1>" +
                                "<p>您的验证码为:<span style=\"border-bottom:1px dashed #777;font-weight:bold;\">" + verifyCode + "</span></p>" +
                                "<p style=\"color:red;\">如果您没有发送验证码，请忽视本条信息。</p>", email);
            } catch (MessagingException e) {
                e.printStackTrace();
                return false;
            }
            return true;
        }
        return false;
    }

    /**
     * 发送友链邮箱验证码
     *
     * @param httpServletRequest
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "/linkEmail.verify")
    public Object ajaxForLinkEmailVerify(HttpServletRequest httpServletRequest) {
        String email = ((Link) httpServletRequest.getSession().getAttribute("friendLink")).getEmail();
        Integer verifyCode = ((Double) (((Math.random() * 9) + 1) * 100000)).intValue();
        httpServletRequest.getSession().setAttribute("linkVerifyCode", verifyCode);
        httpServletRequest.getSession().setAttribute("linkVerifyEmail", email);
        httpServletRequest.getSession().setAttribute("linkVerifyCodePassTime", new Date().getTime() + 300000);
        try {
            emailHandler.sendEmailWithSSL("ruan4261博客的验证码",
                    "<h1>来自ruan4261博客的邮箱验证码</h1>" +
                            "<p>您的验证码为:<span style=\"border-bottom:1px dashed #777;font-weight:bold;\">" + verifyCode + "</span></p>" +
                            "<p style=\"color:red;\">此条为友链操作邮件，如果您没有把友链借给他人，很可能您的友链已被冒充登录。此情况下请联系我。</p>", email);
        } catch (MessagingException e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    /**
     * 发表评论接口
     *
     * @param httpServletRequest
     * @param httpServletResponse
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "/comment.add", method = RequestMethod.POST)
    public Object ajaxForAddComment(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) {
        Map<String, Object> result = new HashMap<String, Object>();
        Integer master = null, parent = null, target = null, score = null, verifyCode = null;
        try {
            master = Integer.parseInt(httpServletRequest.getParameter("master"));
            parent = httpServletRequest.getParameter("parent") == null || httpServletRequest.getParameter("parent").trim().equals("") ? null : Integer.parseInt(httpServletRequest.getParameter("parent"));
            if (parent != null) {
                target = Integer.parseInt(httpServletRequest.getParameter("target"));
            } else {
                score = httpServletRequest.getParameter("score") == null || httpServletRequest.getParameter("score").trim().equals("") ? null : Integer.parseInt(httpServletRequest.getParameter("score"));
                if (score != null && score < 1) score = 1;
                else if (score != null && score > 5) score = 5;
            }
        } catch (Exception ex) {
            result.put("result", false);
            result.put("message", "参数错误");
            return result;
        }
        //参数通过
        Comment comment = new Comment();
        //获取邮箱
        try {
            comment.setEmail(BlogAlgorithmHandler.allWaysGetEmail(httpServletRequest));
        } catch (Exception ex) {
            result.put("result", false);
            result.put("message", "验证码错误或过期");
            return result;
        }
        //加载评论基本信息
        comment.setScore(score);
        comment.setMaster(master);
        comment.setParent(parent);
        comment.setTarget(target);
        comment.setTime(new Date());
        comment.setContent(httpServletRequest.getParameter("content"));
        comment.setOrigin(httpRequestHandler.findHttpOrigin(httpServletRequest));
        if (dataService.addComment(comment)) {
            BlogAlgorithmHandler.clearSessionEmail(httpServletRequest);
            result.put("result", true);
            result.put("message", "您发布评论成功。" + (comment.getEmail() != null ? "当您的评论被回复时，邮箱" + comment.getEmail() + "将会受到提醒邮件。" : "您此条评论未绑定回复邮箱。"));
            if (comment.getEmail() != null) {
                Cookie cookie = new Cookie("always-email", comment.getEmail());
                cookie.setPath("/");
                cookie.setHttpOnly(true);
                cookie.setMaxAge(365 * 24 * 60 * 60);
                httpServletResponse.addCookie(cookie);
            }
        } else {
            result.put("result", false);
            result.put("message", "发布失败，请重试。");
        }
        return result;
    }

    /**
     * 评论点赞
     *
     * @param httpServletRequest
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "/comment.like", method = RequestMethod.POST)
    public Object ajaxForLikeComment(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) {
        Integer id = Integer.parseInt(httpServletRequest.getParameter("comment"));
        Cookie[] cookies = httpServletRequest.getCookies();
        for (Cookie ck : cookies) {
            if (ck.getName().equals("like-comment")) {
                String[] arr = ck.getValue().split("\\*");
                for (String str : arr) {
                    if (str.trim().equals(id.toString())) {
                        return false;
                    }
                }
                ck.setValue(ck.getValue() + id + "*");
                ck.setPath("/");
                ck.setHttpOnly(false);
                ck.setMaxAge(60 * 365 * 24 * 60 * 60);
                httpServletResponse.addCookie(ck);
                break;
            }
        }
        Comment comment = new Comment();
        comment.setId(id);
        return dataService.commentLikeTimesAdd(comment);
    }

    /**
     * 友链注册
     *
     * @param httpServletRequest
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "/link.add", method = RequestMethod.POST)
    public Object ajaxForLinkRegister(HttpServletRequest httpServletRequest) {
        Link link = new Link();
        Map<String, Object> result = new HashMap<String, Object>();
        try {
            link.setHttp(httpServletRequest.getParameter("http"));
            if (linkService.linkHttpIsExist(link)) {
                result.put("result", false);
                result.put("message", "该域名已在站内注册。\n如您无法登录此友链，可能是该域名服务器发生问题，或是该域名还处于审核期。");
                return result;
            }
            if (new Date().getTime() > (Long) httpServletRequest.getSession().getAttribute("verifyCodePassTime") || !httpServletRequest.getParameter("verifyCode").equals(httpServletRequest.getSession().getAttribute("verifyCode").toString())) {
                result.put("result", false);
                result.put("message", "邮箱验证码错误，或验证码超过5分钟已失效。");
                return result;
            }
            if (httpServletRequest.getParameter("http").indexOf(".") < 1 || httpServletRequest.getParameter("password").trim().equals("") || httpServletRequest.getParameter("title").trim().equals("") || httpServletRequest.getParameter("email").indexOf("@") < 1 || httpServletRequest.getParameter("email").indexOf(".", httpServletRequest.getParameter("email").indexOf("@")) < 2 || httpServletRequest.getParameter("profile").indexOf(".") < 1)
                throw new RuntimeException("参数缺失。");
            link.setPassword(httpServletRequest.getParameter("password"));
            link.setDesc(httpServletRequest.getParameter("desc"));
            link.setEmail(httpServletRequest.getParameter("email"));
            link.setTitle(httpServletRequest.getParameter("title"));
            link.setProfile(httpServletRequest.getParameter("profile"));
            if (linkService.registerFriendLink(link)) {
                BlogAlgorithmHandler.clearSessionEmail(httpServletRequest);
                result.put("result", true);
                result.put("message", "友链名称:" + link.getTitle() + ",域名:" + link.getHttp() + "注册成功，请等待审核。");
            } else {
                result.put("result", false);
                result.put("message", "数据库异常。");
            }
        } catch (Exception ex) {
            result.put("result", false);
            result.put("message", "自动校验未通过。");
        }
        return result;
    }

    /**
     * 修改友链信息
     *
     * @param httpServletRequest
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "/linkInfo.update", method = RequestMethod.POST)
    public Object ajaxForLinkUpdateInfo(HttpServletRequest httpServletRequest) {
        Map<String, Object> result = new HashMap<String, Object>();
        try {
            Link link = (Link) httpServletRequest.getSession().getAttribute("friendLink");
            if (new Date().getTime() > (Long) httpServletRequest.getSession().getAttribute("linkVerifyCodePassTime") || !httpServletRequest.getParameter("linkVerifyCode").equals(httpServletRequest.getSession().getAttribute("linkVerifyCode").toString())) {
                result.put("result", false);
                result.put("message", "原邮箱验证码错误，或验证码超过5分钟已失效。");
                return result;
            }
            if (httpServletRequest.getParameter("verifyCode") != null && httpServletRequest.getParameter("verifyCode").length() == 6) {
                if (new Date().getTime() <= (Long) httpServletRequest.getSession().getAttribute("verifyCodePassTime") && httpServletRequest.getParameter("verifyCode").equals(httpServletRequest.getSession().getAttribute("verifyCode").toString())) {
                    link.setEmail(httpServletRequest.getSession().getAttribute("verifyEmail").toString());
                } else {
                    result.put("result", false);
                    result.put("message", "新邮箱验证码错误，或验证码超过5分钟已失效。");
                    return result;
                }
            }
            if (!httpServletRequest.getParameter("title").trim().equals("")) {
                link.setTitle(httpServletRequest.getParameter("title"));
            }
            if (!httpServletRequest.getParameter("desc").trim().equals("")) {
                link.setDesc(httpServletRequest.getParameter("desc"));
            }
            if (!httpServletRequest.getParameter("profile").trim().equals("") && httpServletRequest.getParameter("profile").indexOf(".") > 0) {
                link.setProfile(httpServletRequest.getParameter("profile"));
            }
            if (!linkService.updateLinkInfo(link)) {
                result.put("result", false);
                result.put("message", "信息修改不成功。");
                return result;
            }
            BlogAlgorithmHandler.clearSessionEmail(httpServletRequest);
            result.put("result", true);
            result.put("message", "信息修改成功，您的友链会暂时消隐，请等待审核。");
            httpServletRequest.getSession().removeAttribute("friendLink");
        } catch (Exception ex) {
            result.put("result", false);
            result.put("message", "自动校验未通过。");
        }
        return result;
    }

    /**
     * 修改友链密码
     *
     * @param httpServletRequest
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "/linkPwd.update", method = RequestMethod.POST)
    public Object ajaxForLinkUpdatePassword(HttpServletRequest httpServletRequest) {
        Map<String, Object> result = new HashMap<String, Object>();
        try {
            Link link = (Link) httpServletRequest.getSession().getAttribute("friendLink");
            if (new Date().getTime() > (Long) httpServletRequest.getSession().getAttribute("linkVerifyCodePassTime") || !httpServletRequest.getParameter("linkVerifyCode").equals(httpServletRequest.getSession().getAttribute("linkVerifyCode").toString())) {
                result.put("result", false);
                result.put("message", "邮箱验证码错误，或验证码超过5分钟已失效。");
                return result;
            }
            if (httpServletRequest.getParameter("password").trim().equals("")) throw new RuntimeException();
            link.setPassword(httpServletRequest.getParameter("password"));
            if (!linkService.updateLinkPassword(link)) {
                result.put("result", false);
                result.put("message", "密码修改不成功。");
                return result;
            }
            BlogAlgorithmHandler.clearSessionEmail(httpServletRequest);
            result.put("result", true);
            result.put("message", "密码修改成功。");
        } catch (Exception ex) {
            result.put("result", false);
            result.put("message", "自动校验未通过。");
        }
        return result;
    }
}
