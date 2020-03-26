package org.ruan.blog.component;

import org.ruan.blog.service.LinkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * 友链密钥管理（临时）
 */
@Component("tokenManager")
public class TokenManager {

    @Autowired
    private LinkService linkService;

    private List<String> TempTokenList;

    public List<String> getTempTokenList() {
        if (TempTokenList == null) {
            this.tokenLoad();
            return this.TempTokenList;
        } else return this.TempTokenList;
    }

    public void setTempTokenList(List<String> tempTokenList) {
        this.TempTokenList = tempTokenList;
    }

    /**
     * 判断token是否通过
     *
     * @param token
     * @return
     */
    public boolean isExist(String token) {
        return this.getTempTokenList().contains(token);
    }

    /**
     * 从数据库装载token
     */
    public void tokenLoad() {
        this.setTempTokenList(linkService.tokenLoad());
    }
}
