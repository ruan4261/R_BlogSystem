package org.ruan.blog.mapper.impl;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.ruan.blog.component.MybatisResultHandler;
import org.ruan.blog.mapper.ArticleMapper;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.Date;
import java.util.LinkedHashMap;

/**
 * 辅助映射
 */
@Repository
public class MapperSupport extends SqlSessionDaoSupport {

    @Resource
    public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
        super.setSqlSessionFactory(sqlSessionFactory);
    }

    /**
     * getTimeline
     *
     * @return
     */
    public LinkedHashMap<Date, Integer> getTimelineArticleCount() {
        MybatisResultHandler handler = new MybatisResultHandler();
        this.getSqlSession().select(ArticleMapper.class.getName() + ".getTimelineArticleCount", handler);
        LinkedHashMap<Date, Integer> map = handler.getMappedResults();
        return map;
    }
}
