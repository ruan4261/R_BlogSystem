package org.ruan.blog.controller;

import org.ruan.blog.component.BlogAlgorithmHandler;
import org.ruan.blog.component.Page;
import org.ruan.blog.pojo.Article;
import org.ruan.blog.pojo.Tag;
import org.ruan.blog.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.List;

/**
 * 归档控制器
 *
 * @author ruan4261
 */
@Controller
@RequestMapping(value = "/archives", method = RequestMethod.GET)
public class ArchivesController {

    @Autowired
    private BlogService blogService;

    /**
     * 时间线接口
     *
     * @param httpServletRequest
     * @return
     */
    @RequestMapping(value = "/timeline", method = RequestMethod.GET)
    public Object timeline(HttpServletRequest httpServletRequest) {
        httpServletRequest.setAttribute("countMap", blogService.getTimelineArticleCount());
        return "index/timeline";
    }

    /**
     * 时间线重载接口（指定年）
     *
     * @param httpServletRequest
     * @param year
     * @return
     * @throws UnsupportedEncodingException
     */
    @RequestMapping(value = "/timeline/{year}", method = RequestMethod.GET)
    public Object timeline(HttpServletRequest httpServletRequest, @PathVariable Integer year) {
        httpServletRequest.setAttribute("listOfList", blogService.getArticleByTimeline(year, null));
        return "index/timeline";
    }

    /**
     * 时间线重载接口（指定月）
     *
     * @param httpServletRequest
     * @param year
     * @param month
     * @return
     * @throws UnsupportedEncodingException
     */
    @RequestMapping(value = "/timeline/{year}/{month}", method = RequestMethod.GET)
    public Object timeline(HttpServletRequest httpServletRequest, @PathVariable Integer year, @PathVariable Integer month) {
        httpServletRequest.setAttribute("listOfList", blogService.getArticleByTimeline(year, month));
        return "index/timeline";
    }

    /**
     * 标签接口
     *
     * @param httpServletRequest
     * @return 返回标签列表
     */
    @RequestMapping(value = "/tag", method = RequestMethod.GET)
    public Object tag(HttpServletRequest httpServletRequest) {
        httpServletRequest.setAttribute("tagList", blogService.getTagList(new Tag()));
        return "index/tag";
    }

    /**
     * 标签重载接口（指定id）
     *
     * @param httpServletRequest
     * @param id
     * @return 返回文章列表
     */
    @RequestMapping(value = "/tag/{id}", method = RequestMethod.GET)
    public Object tag(HttpServletRequest httpServletRequest, @PathVariable Integer id) {
        Article article = new Article();
        article.setTags(id.toString());
        List<Article> articleList = blogService.getArticleList(article, null, null, null);
        httpServletRequest.setAttribute("artList", articleList);
        return "index/tag";
    }

    /**
     * 分数接口
     * 分页执行size=10
     *
     * @param httpServletRequest
     * @return
     */
    @RequestMapping(value = "/score", method = RequestMethod.GET)
    public Object score(HttpServletRequest httpServletRequest) {
        Page page = BlogAlgorithmHandler.pageHandler(httpServletRequest, 10, blogService.getArticleCount(new Article()));
        if (page != null)
            httpServletRequest.setAttribute("artList", blogService.getArticleList(null, page.getCurrentPageNo(), page.getPageSize(), 2));
        return "index/score";
    }

    /**
     * 观看次数接口
     * 分页执行size=10
     *
     * @param httpServletRequest
     * @return
     */
    @RequestMapping(value = "/looktimes", method = RequestMethod.GET)
    public Object looktimes(HttpServletRequest httpServletRequest) {
        Page page = BlogAlgorithmHandler.pageHandler(httpServletRequest, 10, blogService.getArticleCount(new Article()));
        if (page != null)
            httpServletRequest.setAttribute("artList", blogService.getArticleList(null, page.getCurrentPageNo(), page.getPageSize(), 3));
        return "index/looktimes";
    }
}
