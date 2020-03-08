package org.ruan.blog.controller;

import com.alibaba.fastjson.JSONObject;
import org.ruan.blog.component.*;
import org.ruan.blog.pojo.Article;
import org.ruan.blog.pojo.Origin;
import org.ruan.blog.pojo.Tag;
import org.ruan.blog.service.BlogService;
import org.ruan.blog.service.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.util.*;

/**
 * 后台数据管理器
 */
@Controller
@RequestMapping(value = "/lain", method = RequestMethod.POST)
public class DataController {

    @Autowired
    private BlogService blogService;

    @Autowired
    private DataService dataService;

    /**
     * 提交了一篇文章
     * 大部分操作交由Service层完成
     *
     * @param httpServletRequest
     * @return
     */
    @RequestMapping(value = "/writeArt.do", method = RequestMethod.POST)
    public Object writeArt(HttpServletRequest httpServletRequest) {
        Integer isDB, isRSS;
        try {
            //是否当做文章处理指标
            isDB = Integer.parseInt(httpServletRequest.getParameter("isDB"));
            //是否当做RSS处理指标
            isRSS = Integer.parseInt(httpServletRequest.getParameter("isRSS"));
            //内容jsonObj
            JSONObject jsonContent = new JSONObject();
            jsonContent.put("content", httpServletRequest.getParameter("content"));
            //处理
            if (isDB == 1) {
                //作为文章处理
                Article article = new Article();
                article.setTitle(httpServletRequest.getParameter("title"));
                article.setDesc(httpServletRequest.getParameter("desc"));
                article.setTags(httpServletRequest.getParameter("tags"));
                BlogAlgorithmHandler.articleTagsToTagList(article);
                article.setTop(Integer.parseInt(httpServletRequest.getParameter("top")));
                //去获取request中的origin
                article.setOrigin(BlogAlgorithmHandler.findHttpOrigin(httpServletRequest, blogService, dataService));
                //传进service执行事务
                dataService.addArticleLevelOne(article, jsonContent.toJSONString(), isRSS);

                //刷新application域==>因为可能有标签更新
                BlogContextHandler.updateApp(httpServletRequest.getServletContext());
            } else if (isDB == 0) {
                //仅生成文件
                String jsonFileName = httpServletRequest.getParameter("jsonFileName");
                BlogContextHandler.writeFile("C:/data/Blog/articleJson/" + jsonFileName + ".json", jsonContent.toJSONString());
            }
        } catch (Exception ex) {
            BlogAlgorithmHandler.setErrorMessage(httpServletRequest, 500, ex.getMessage());
        }
        return "redirect:/";
    }

    /**
     * ckEditor图片上传地址
     *
     * @param files
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "/upload/image", method = RequestMethod.POST)
    public Object uploadImage(@RequestParam("upload") MultipartFile[] files) {
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            Map<MultipartFile, String> fileNames = ImageUploadHandler.uploadImage(files, new HashMap<MultipartFile, String>(), "C:/data/Blog/articleImages/");
            String fileName = fileNames.get(files[0]);
            map.put("uploaded", 1);
            map.put("url", "https://ruan4261.com/resource/image/" + fileName);
        } catch (Exception ex) {
            map.put("uploaded", 0);
            Map<String, Object> mapMessage = new HashMap<String, Object>();
            mapMessage.put("message", "图片上传失败！");
            map.put("error", mapMessage);
        }
        JSONObject jsonObject = new JSONObject();
        jsonObject.putAll(map);
        return jsonObject;
    }

}