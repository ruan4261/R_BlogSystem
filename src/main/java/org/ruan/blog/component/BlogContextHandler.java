package org.ruan.blog.component;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.ruan.blog.pojo.Tag;
import org.ruan.blog.service.BlogService;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.web.context.support.WebApplicationContextUtils;

import javax.servlet.ServletContext;
import java.io.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 博客站点json信息读改器
 * 这是一个我觉得很牛逼的东西（自己写的，要好好保存） by ruan4261
 *
 * @author ruan4261
 */
public class BlogContextHandler {

    //blog.info.json路径
    private static String infoPath = "C:" + File.separator + "data" + File.separator + "Blog" + File.separator + "blog.info.json";

    //blog.history.json路径
    private static String historyPath = "C:" + File.separator + "data" + File.separator + "Blog" + File.separator + "blog.history.json";

    //historyList
    private static List<Map<String, String>> historyList;

    //infoMap
    private static Map<String, Object> infoMap;

    //headMap
    private static Map<String, Object> headMap;


    public static List<Map<String, String>> getHistoryList() {
        return historyList;
    }

    public static Map<String, Object> getInfoMap() {
        return infoMap;
    }

    public static void setInfoMap(Map<String, Object> infoMap) {
        BlogContextHandler.infoMap = infoMap;
    }

    public static Map<String, Object> getHeadMap() {
        return headMap;
    }

    public static void setHeadMap(Map<String, Object> headMap) {
        BlogContextHandler.headMap = headMap;
    }

    /**
     * 初始化，输入流读取json配置
     */
    static {
        JSONObject infoObj = JSONObject.parseObject(readFile(infoPath));
        headMap = (Map<String, Object>) infoObj.get("head");
        infoMap = (Map<String, Object>) infoObj.get("info");
        historyList = (List<Map<String, String>>) JSONArray.parse(readFile(historyPath));
        //history置换运算
        for (int i = 0; i < historyList.size(); ) {
            Map<String, String> temp = historyList.get(i);
            historyList.set(i, historyList.get(historyList.size() - (i + 1)));
            historyList.set(historyList.size() - (i + 1), temp);
            if (++i >= Math.floor(historyList.size() / 2)) break;
        }
    }

    /**
     * 初始化上下文（此方法只发生一次）
     *
     * @param servletContext
     */
    public static void updateApp(ServletContext servletContext) {
        BeanFactory beanFactory = WebApplicationContextUtils.getRequiredWebApplicationContext(servletContext);
        BlogService blogService = (BlogService) beanFactory.getBean("blogService");
        //获取当前所有标签加入keywords
        List<Tag> tagList = blogService.getTagList(new Tag());
        //获取10个热门标签加入前端3d展示图
        List<Tag> hotTagList=blogService.getHotTagList();
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
     * 读取json文件，返回json串
     *
     * @param filePath
     * @return
     */
    public static String readFile(String filePath) {
        String jsonStr = null;
        try {
            //文件
            File jsonFile = new File(filePath);
            //载入字符流
            //FileReader fileReader = new FileReader(jsonFile);
            FileInputStream fileInputStream = new FileInputStream(jsonFile);
            InputStreamReader inputStreamReader = new InputStreamReader(fileInputStream, "utf-8");

            int ch = 0;
            //缓冲区
            StringBuffer sb = new StringBuffer();
            //读取
            while ((ch = inputStreamReader.read()) != -1) {
                sb.append((char) ch);
            }

            inputStreamReader.close();
            fileInputStream.close();
            //fileReader.close();
            jsonStr = sb.toString();
            return jsonStr;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    /**
     * 将map写进blog.info.json文件
     *
     * @param filePath
     * @param content
     */
    public static boolean writeFile(String filePath, String content) {
        try {
            //文件
            File jsonFile = new File(filePath);
            // 如果父目录不存在，创建父目录
            if (!jsonFile.getParentFile().exists()) {
                jsonFile.getParentFile().mkdirs();
            }

            //载入字符流
            //FileWriter fileWriter = new FileWriter(jsonFile);
            //字节流
            FileOutputStream fileOutputStream = new FileOutputStream(jsonFile);
            OutputStreamWriter outputStreamWriter = new OutputStreamWriter(fileOutputStream, "utf-8");

            outputStreamWriter.write(content);
            outputStreamWriter.flush();
            outputStreamWriter.close();
            fileOutputStream.close();
            //fileWriter.write(content);
            //fileWriter.flush();
            //fileWriter.close();
            return true;
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * 私有
     *
     * @return
     */
    private static String mapToJsonStr() {
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
    public static void commit() {
        writeFile(infoPath, mapToJsonStr());
    }

}
