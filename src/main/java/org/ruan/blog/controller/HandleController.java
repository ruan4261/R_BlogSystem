package org.ruan.blog.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * 后台显示控制器
 *
 * @author ruan4261
 */
@Controller
@RequestMapping(value = "/handle", method = RequestMethod.GET)
public class HandleController {

    @RequestMapping(value = "/writeArt.html", method = RequestMethod.GET)
    public Object writeArtPage() {
        return "handle/writeArt";
    }
}
