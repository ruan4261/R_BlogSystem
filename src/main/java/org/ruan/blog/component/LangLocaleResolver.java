package org.ruan.blog.component;

import org.springframework.web.servlet.LocaleResolver;
import org.thymeleaf.util.StringUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Locale;

/**
 * 语言方案
 *
 * @author ruan4261
 */
public class LangLocaleResolver implements LocaleResolver {

    @Override
    public Locale resolveLocale(HttpServletRequest httpServletRequest) {
        String lang = null;
        if (httpServletRequest.getSession().getAttribute("lang") != null)
            lang = httpServletRequest.getSession().getAttribute("lang").toString();
        if (httpServletRequest.getParameter("lang") != null) {
            lang = httpServletRequest.getParameter("lang");
            httpServletRequest.getSession().setAttribute("lang", lang);
        }
        //中文 zh_CN
        //英文 en_US
        //日语 ja_JP
        Locale locale = Locale.getDefault();//获取浏览器默认语言
        if (!StringUtils.isEmpty(lang)) {//lang不为空
            String[] langAry = lang.split("_");
            locale = new Locale(langAry[0], langAry[1]);
        }
        return locale;
    }

    @Override
    public void setLocale(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Locale locale) {

    }
}
