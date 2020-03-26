package org.ruan.blog.controller;

import com.alibaba.fastjson.JSONObject;
import org.ruan.blog.pojo.Article;
import org.ruan.blog.pojo.Link;
import org.ruan.blog.service.BlogService;
import org.ruan.blog.service.LinkService;
import org.ruan.blog.util.BlogAlgorithmHandler;
import org.ruan.blog.util.LocalIOStreamHandler;
import org.ruan.blog.util.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

/**
 * 主控制器
 *
 * @author ruan4261
 */
@Controller("blogController")
public class BlogController {

    @Autowired
    private BlogService blogService;

    @Autowired
    private LinkService linkService;

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
        Article article = new Article();
        article.setId(id);
        try {
            httpServletRequest.setAttribute("article", (article = blogService.getArticle(article)));
        } catch (Exception ex) {
            BlogAlgorithmHandler.setErrorMessage(httpServletRequest, 404, "不存在此篇文章。");
            return "error";
        }
        //读取文章内容
        JSONObject contentJsonObj = JSONObject.parseObject(LocalIOStreamHandler.readFile("C:/data/Blog/articleJson/article_" + id + ".json"));
        httpServletRequest.setAttribute("content", contentJsonObj.get("content").toString());
        //评论区分页
        Page page = BlogAlgorithmHandler.pageHandler(httpServletRequest, 10, blogService.getCommentCountForPage(article));
        //判断有无评论
        if (page != null) {
            Integer order = 1;//初始值为热度排序
            if (httpServletRequest.getParameter("order") != null)
                order = Integer.parseInt(httpServletRequest.getParameter("order"));
            httpServletRequest.setAttribute("order", order);
            httpServletRequest.setAttribute("comment", blogService.getCommentByArticle(article, page.getCurrentPageNo(), page.getPageSize(), order));
            httpServletRequest.setAttribute("commentCount", blogService.getCommentCount(article));
            httpServletRequest.setAttribute("totalPage", page.getTotalPage());
            httpServletRequest.setAttribute("currentPage", page.getCurrentPageNo());
        } else {
            httpServletRequest.setAttribute("commentCount", 0);
            httpServletRequest.setAttribute("totalPage", 0);
            httpServletRequest.setAttribute("currentPage", 0);
        }
        //获取文章目录
        try {
            JSONObject contentsJsonObj = JSONObject.parseObject(LocalIOStreamHandler.readFile("C:/data/Blog/articleContents/article_" + id + ".json"));
            Map<String, Object> map = contentsJsonObj.getInnerMap();
            httpServletRequest.setAttribute("contents", map);
        } catch (Exception ex) {
            //这篇文章没有目录
            httpServletRequest.setAttribute("contents", null);
        }
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
        return LocalIOStreamHandler.readFile("C:/data/Blog/rss/rss.xml");
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
    public Object friendlyLink(HttpServletRequest httpServletRequest) {
        Link link = new Link();
        link.setStatus(1);
        httpServletRequest.setAttribute("linkList", linkService.findLinkList(link));
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
