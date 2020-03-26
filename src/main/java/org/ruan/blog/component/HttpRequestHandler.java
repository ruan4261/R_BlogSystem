package org.ruan.blog.component;

import com.alibaba.fastjson.JSONObject;
import eu.bitwalker.useragentutils.Browser;
import eu.bitwalker.useragentutils.OperatingSystem;
import eu.bitwalker.useragentutils.UserAgent;
import org.ruan.blog.pojo.Origin;
import org.ruan.blog.service.BlogService;
import org.ruan.blog.service.DataService;
import org.ruan.blog.util.HttpAPIHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 请求解析
 */
@Component
public class HttpRequestHandler {

    @Autowired
    private BlogService blogService;

    @Autowired
    private DataService dataService;


    /**
     * 根据request信息返回数据库中的origin
     *
     * @param httpServletRequest
     * @return
     */
    public Origin findHttpOrigin(HttpServletRequest httpServletRequest) {
        //获取ip地址及系统及浏览器==>还差地址和运营商未取得
        Map<String, String> originMap = this.getIPAndSystemAndBrowser(httpServletRequest);
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
     * 依赖于 eu.bitwalker.useragentutils
     * 参考https://blog.csdn.net/Mrs_chens/article/details/90475615
     *
     * @param request
     * @return
     * @author ruan4261
     */
    public Map<String, String> getIPAndSystemAndBrowser(HttpServletRequest request) {
        Map<String, String> map = new HashMap<String, String>();
        String ip = request.getRemoteAddr();
        map.put("ip", ip);
        //获取浏览器及系统
        UserAgent userAgent = UserAgent.parseUserAgentString(request.getHeader("User-Agent"));
        Browser browser = userAgent.getBrowser();
        OperatingSystem operatingSystem = userAgent.getOperatingSystem();
        map.put("system", operatingSystem.getName());
        map.put("browser", browser.getName());
        return map;
    }

}
