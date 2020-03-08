package org.ruan.blog.component;

import org.apache.ibatis.session.ResultContext;
import org.apache.ibatis.session.ResultHandler;

import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 * Mybatis结果集转化
 */
public class MybatisResultHandler implements ResultHandler {

    private final LinkedHashMap<Date, Integer> mappedResults = new LinkedHashMap<Date, Integer>();

    @Override
    public void handleResult(ResultContext resultContext) {
        Map map = (Map) resultContext.getResultObject();
        mappedResults.put((Date) map.get("key"), (Integer) map.get("value"));
    }

    public LinkedHashMap<Date, Integer> getMappedResults() {
        return mappedResults;
    }
}
