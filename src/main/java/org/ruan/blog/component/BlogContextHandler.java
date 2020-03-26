package org.ruan.blog.component;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.ruan.blog.pojo.Tag;
import org.ruan.blog.service.BlogService;
import org.ruan.blog.util.LocalIOStreamHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 博客站点json信息读改器
 *
 * @author ruan4261
 */
@Component("blogContextHandler")
public class BlogContextHandler {

    //blog.info.json路径
    @Value("${ruan.blog.info}")
    private String infoPath;

    //blog.history.json路径
    @Value("${ruan.blog.history}")
    private String historyPath;

    //historyList
    private List<Map<String, String>> historyList;

    //infoMap
    private Map<String, Object> infoMap;

    //headMap
    private Map<String, Object> headMap;

    @Autowired
    private BlogService blogService;

    @Autowired
    private ServletContext servletContext;

    public String getInfoPath() {
        return infoPath;
    }

    public String getHistoryPath() {
        return historyPath;
    }

    public List<Map<String, String>> getHistoryList() {
        return historyList;
    }

    public void setHistoryList(List<Map<String, String>> historyList) {
        this.historyList = historyList;
    }

    public Map<String, Object> getInfoMap() {
        return infoMap;
    }

    public void setInfoMap(Map<String, Object> infoMap) {
        this.infoMap = infoMap;
    }

    public Map<String, Object> getHeadMap() {
        return headMap;
    }

    public void setHeadMap(Map<String, Object> headMap) {
        this.headMap = headMap;
    }

    /**
     * 初始化
     */
    @PostConstruct
    void init() {
        updateApp();
    }

    /**
     * 更新上下文
     */
    public void updateApp() {
        JSONObject infoObj = JSONObject.parseObject(LocalIOStreamHandler.readFile(infoPath));
        headMap = (Map<String, Object>) infoObj.get("head");
        infoMap = (Map<String, Object>) infoObj.get("info");
        historyList = (List<Map<String, String>>) JSONArray.parse(LocalIOStreamHandler.readFile(historyPath));
        //history置换运算
        for (int i = 0; i < historyList.size(); ) {
            Map<String, String> temp = historyList.get(i);
            historyList.set(i, historyList.get(historyList.size() - (i + 1)));
            historyList.set(historyList.size() - (i + 1), temp);
            if (++i >= Math.floor(historyList.size() / 2)) break;
        }
        //获取当前所有标签加入keywords
        List<Tag> tagList = blogService.getTagList(new Tag());
        //获取10个热门标签加入前端3d展示图
        List<Tag> hotTagList = blogService.getHotTagList();
        //复制headMap
        Map<String, Object> headMapOverride = new HashMap<String, Object>();
        headMapOverride.putAll(headMap);
        //增加keywords
        for (Tag tag : tagList) {
            headMapOverride.put("keywords", headMapOverride.get("keywords") + "," + tag.getName());
        }
        //更新application域
        servletContext.setAttribute("hotTagList", hotTagList);
        servletContext.setAttribute("headMap", headMapOverride);
        servletContext.setAttribute("infoMap", infoMap);
        servletContext.setAttribute("historyList", historyList);
    }

    /**
     * 私有
     *
     * @return
     */
    private String mapToJsonStr() {
        JSONObject headJson = new JSONObject();
        JSONObject infoJson = new JSONObject();
        headJson.put("head", headMap);
        infoJson.put("info", infoMap);
        JSONObject jsonObject = new JSONObject();
        jsonObject.putAll(headJson);
        jsonObject.putAll(infoJson);
        return jsonObject.toJSONString();
    }

    /**
     * 将map:info提交给blog.info.json
     * json.io
     */
    public void commit() {
        LocalIOStreamHandler.writeFile(infoPath, mapToJsonStr());
    }

}
