package org.ruan.blog.component;

import eu.bitwalker.useragentutils.Browser;
import eu.bitwalker.useragentutils.OperatingSystem;
import eu.bitwalker.useragentutils.UserAgent;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

/**
 * Http请求分析接口
 *
 * @author ruan4261
 */
public class HttpRequestHandler {

    /**
     * 感谢package eu.bitwalker.useragentutils
     * 参考https://blog.csdn.net/Mrs_chens/article/details/90475615
     *
     * @param request
     * @return
     * @author ruan4261
     */
    public static Map<String, String> getIPAndSystemAndBrowser(HttpServletRequest request) {
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
