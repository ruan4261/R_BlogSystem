package org.ruan.blog.controller;

import com.alibaba.fastjson.JSONObject;
import org.ruan.blog.component.BlogContextHandler;
import org.ruan.blog.component.BlogAlgorithmHandler;
import org.ruan.blog.component.Page;
import org.ruan.blog.pojo.Article;
import org.ruan.blog.service.BlogService;
import org.ruan.blog.service.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;

/**
 * 主控制器
 *
 * @author ruan4261
 */
@Controller
public class BlogController {

    @Autowired
    private BlogService blogService;

    @Autowired
    private DataService dataService;

    /**
     * 主页
     *
     * @param httpServletRequest
     * @return
     */
    @RequestMapping(value = "", method = RequestMethod.GET)
    public Object blogHtml(HttpServletRequest httpServletRequest) {
        Page page = BlogAlgorithmHandler.pageHandler(httpServletRequest, 5, blogService.getArticleCount(new Article()));
        if (page != null)
            httpServletRequest.setAttribute("art", blogService.getArticleList(null, page.getCurrentPageNo(), page.getPageSize(), null));
        return "index";
    }

    /**
     * 文章页面
     *
     * @param id
     * @param httpServletRequest
     * @return
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Object articlePage(@PathVariable Integer id, HttpServletRequest httpServletRequest) {
        Integer artId;
        Article article = new Article();
        article.setId(id);
        httpServletRequest.setAttribute("article", (article = blogService.getArticle(article)));
        if (article == null) {
            BlogAlgorithmHandler.setErrorMessage(httpServletRequest, 404, "不存在此篇文章。");
            return "error";
        }
        JSONObject jsonObject = JSONObject.parseObject(BlogContextHandler.readFile("C:/data/Blog/articleJson/article_" + id + ".json"));
        httpServletRequest.setAttribute("content", jsonObject.get("content").toString());
        dataService.updateArticleLook(article);
        return "content/article";
    }

    /**
     * RSS
     *
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "/rss.xml", method = RequestMethod.GET, produces = "application/xml")
    public Object rssFeedXml() {
        return BlogContextHandler.readFile("C:/data/Blog/rss/rss.xml");
    }

    /**
     * 留言板页面
     *
     * @param httpServletRequest
     * @return
     */
    @RequestMapping(value = "/message", method = RequestMethod.GET)
    public Object messagePage(HttpServletRequest httpServletRequest) {
        httpServletRequest.setAttribute("title", "你目前位于Message页面");
        httpServletRequest.setAttribute("message", "此页面还未上线，预计于2020年中旬上线。");
        return "index/notice";
    }

    /**
     * 聊天室页面
     * WebSocket
     *
     * @param httpServletRequest
     * @return
     */
    @RequestMapping(value = "/chat", method = RequestMethod.GET)
    public Object chatPage(HttpServletRequest httpServletRequest) {
        httpServletRequest.setAttribute("title", "你目前位于Chat页面");
        httpServletRequest.setAttribute("message", "此页面还未上线，预计于2020年下旬上线。");
        return "index/notice";
    }

    /**
     * 关于页面
     * 个人
     *
     * @return
     */
    @RequestMapping(value = "/about.htm", method = RequestMethod.GET)
    public Object aboutPage() {
        return "about";
    }

    /**
     * 友链页面
     *
     * @return
     */
    @RequestMapping(value = "/link.htm", method = RequestMethod.GET)
    public Object friendlyLink() {
        return "link";
    }

    /**
     * 博客历史界面
     *
     * @return
     */
    @RequestMapping(value = "/history.htm", method = RequestMethod.GET)
    public Object historyPage() {
        return "history";
    }
}
