package org.ruan.blog.component;

import com.alibaba.fastjson.JSONObject;
import org.ruan.blog.mapper.TagMapper;
import org.ruan.blog.pojo.Article;
import org.ruan.blog.pojo.Origin;
import org.ruan.blog.pojo.Tag;
import org.ruan.blog.service.BlogService;
import org.ruan.blog.service.DataService;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
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
     * 不确定数据库是否含有标签的情况下组合list的方式
     *
     * @param article
     */
    public static void articleTagsToTagList(Article article) {
        String[] tagArr = article.getTags().split("\\*");
        //排除有标签为空的情况并转换为list
        List<Tag> tagList = new ArrayList<Tag>();
        for (int i = 0; i < tagArr.length; i++) {
            if (!tagArr[i].trim().equals("")) {
                Tag tag = new Tag();
                tag.setName(tagArr[i]);
                tagList.add(tag);
            }
        }
        article.setTagList(tagList);
    }

    /**
     * 将article内的tags转化为taglist
     * 前提为数据库必须文章的所有标签
     *
     * @param article
     * @param tagMapper
     */
    public static void articleTagsToTagList(Article article, TagMapper tagMapper) {
        List<Tag> artTagList = new ArrayList<Tag>();
        String[] tagArr = article.getTags().split("\\*");
        for (String tag : tagArr) {
            if (tag.trim().equals("")) continue;
            Tag tagTemp = new Tag();
            tagTemp.setId(Integer.parseInt(tag));
            artTagList.add(tagMapper.getTag(tagTemp));
        }
        article.setTagList(artTagList);
    }

    /**
     * 将article内的tags转化为taglist
     * 多元
     * 前提为数据库必须文章的所有标签
     *
     * @param list
     * @param tagMapper
     */
    public static void articleTagsToTagList(List<Article> list, TagMapper tagMapper) {
        for (Article art : list) {
            List<Tag> artTagList = new ArrayList<Tag>();
            String[] tagArr = art.getTags().split("\\*");
            for (String tag : tagArr) {
                if (tag.trim().equals("")) continue;
                Tag tagTemp = new Tag();
                tagTemp.setId(Integer.parseInt(tag));
                artTagList.add(tagMapper.getTag(tagTemp));
            }
            art.setTagList(artTagList);
        }
    }

    /**
     * 根据request信息返回数据库中的origin
     *
     * @param httpServletRequest
     * @param blogService
     * @param dataService
     * @return
     */
    public static Origin findHttpOrigin(HttpServletRequest httpServletRequest, BlogService blogService, DataService dataService) {
        //获取ip地址及系统及浏览器==>还差地址和运营商未取得
        Map<String, String> originMap = HttpRequestHandler.getIPAndSystemAndBrowser(httpServletRequest);
        //先查询数据库内有无当前匹配的ip
        Origin origin = new Origin();
        origin.setIp(originMap.get("ip"));
        origin.setSystem(originMap.get("system"));
        origin.setBrowser(originMap.get("browser"));
        //防止指针破坏原对象属性，故重新new了一个源
        Origin temp = new Origin();
        temp.setIp(origin.getIp());
        List<Origin> originList = blogService.getOriginList(temp);
        //是否访问接口指标
        boolean toAPI = true;
        //检查数据库内ip相关信息是否完整
        if (originList != null && originList.size() > 0 && originList.get(0) != null) {
            //含有当前ip的信息
            String address = originList.get(0).getAddress();
            if (!address.trim().equals("") && !address.trim().equals("未知")) {
                origin.setAddress(address);
                origin.setIsp(originList.get(0).getIsp());
                toAPI = false;
            }
        }
        if (toAPI) {
            //无当前ip信息，访问数据接口
            JSONObject jsonObject = JSONObject.parseObject(HttpAPIHandler.doGetToIpAPI(origin.getIp()));
            if (jsonObject.get("resultcode").toString().equals("200")) {
                //返回状态为200
                Map<String, Object> resultMap = (Map<String, Object>) jsonObject.get("result");
                origin.setIsp(resultMap.get("Isp").toString());
                origin.setAddress(resultMap.get("Country").toString() + resultMap.get("Province").toString() + resultMap.get("City").toString());
            } else {
                //接口访问失败
                origin.setIsp("未知");
                origin.setAddress("未知");
            }
        }
        //将完整origin存进数据库
        if (!dataService.addOrigin(origin)) throw new RuntimeException("数据库来源表异常。");

        return origin;
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
}
