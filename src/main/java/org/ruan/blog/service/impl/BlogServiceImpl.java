package org.ruan.blog.service.impl;

import org.ruan.blog.component.BlogAlgorithmHandler;
import org.ruan.blog.mapper.ArticleMapper;
import org.ruan.blog.mapper.CommentMapper;
import org.ruan.blog.mapper.OriginMapper;
import org.ruan.blog.mapper.TagMapper;
import org.ruan.blog.mapper.impl.MapperSupport;
import org.ruan.blog.pojo.Article;
import org.ruan.blog.pojo.Origin;
import org.ruan.blog.pojo.Tag;
import org.ruan.blog.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.*;

/**
 * 文章业务实现类
 *
 * @author ruan4261
 */
@Service("blogService")
@Transactional
public class BlogServiceImpl implements BlogService {

    @Autowired
    private ArticleMapper articleMapper;

    @Autowired
    private TagMapper tagMapper;

    @Autowired
    private CommentMapper commentMapper;

    @Autowired
    private OriginMapper originMapper;

    @Autowired
    private MapperSupport mapperSupport;

    /**
     * 查询匹配的文章数量
     *
     * @param article
     * @return
     */
    @Override
    public Integer getArticleCount(Article article) {
        return articleMapper.getArticleCount(article);
    }

    /**
     * 查询文章列
     * 可查询标签，查询方式:'%*tag.id*%'
     * 参数order为排序方式
     * order==1 按时间排序=>同时识别置顶
     * order==2 按评分排序
     * order==3 按观看次数排序
     *
     * @param article
     * @param currentPage
     * @param pageSize
     * @param order
     * @return
     */
    @Override
    public List<Article> getArticleList(Article article, Integer currentPage, Integer pageSize, Integer order) {
        if (article == null) article = new Article();
        else {
            if (article.getTitle() != null) article.setTitle("%" + article.getTitle() + "%");
            if (article.getDesc() != null) article.setDesc("%" + article.getDesc() + "%");
            if (article.getTags() != null) article.setTags("*" + article.getTags() + "*");
        }
        List<Article> list = articleMapper.getArticleList(article, (currentPage - 1) * pageSize, pageSize, order);
        BlogAlgorithmHandler.articleTagsToTagList(list, tagMapper);
        return list;
    }

    /**
     * 查询一篇文章
     *
     * @param article
     * @return
     */
    @Override
    public Article getArticle(Article article) {
        if (article == null || article.getId() == null) return null;
        else article = articleMapper.getArticle(article);
        if (article==null) throw new RuntimeException("文章不存在！");
        BlogAlgorithmHandler.articleTagsToTagList(article, tagMapper);
        return article;
    }

    /**
     * 返回标签列 order by count desc
     * 可根据tag.name模糊查询
     *
     * @return
     */
    @Override
    public List<Tag> getTagList(Tag tag) {
        if (tag != null && tag.getName() != null) tag.setName("*" + tag.getName() + "*");
        return tagMapper.getTagList(tag, null);
    }

    /**
     * 查询热门标签列size=10
     *
     * @return
     */
    @Override
    public List<Tag> getHotTagList() {
        return tagMapper.getTagList(null, 10);
    }

    /**
     * 模糊查询来源
     *
     * @param origin
     * @return
     */
    @Override
    public List<Origin> getOriginList(Origin origin) {
        if (origin != null) {
            if (origin.getIp() != null) {
                origin.setIp("%" + origin.getIp() + "%");
            }
            if (origin.getBrowser() != null) {
                origin.setBrowser("%" + origin.getBrowser() + "%");
            }
            if (origin.getSystem() != null) {
                origin.setSystem("%" + origin.getSystem() + "%");
            }
            if (origin.getAddress() != null) {
                origin.setAddress("%" + origin.getAddress() + "%");
            }
            if (origin.getIsp() != null) {
                origin.setIsp("%" + origin.getIsp() + "%");
            }
        }
        return originMapper.getOriginList(origin);
    }

    /**
     * 归档时间线
     *
     * @param year
     * @param month
     * @return
     */
    @Override
    public List<List<Article>> getArticleByTimeline(Integer year, Integer month) {
        List<List<Article>> list = new ArrayList<List<Article>>();
        List<Article> temp;
        if (year == null) {
            temp = articleMapper.getArticleListByTimeline(null, null);
        } else {
            LocalTime time = LocalTime.of(0, 0, 0);
            LocalDateTime open;
            LocalDateTime end;
            if (month != null) {
                open = LocalDateTime.of(LocalDate.of(year, month, 1), time);
                if (month == 12) end = LocalDateTime.of(LocalDate.of((year + 1), 1, 1), time);
                else end = LocalDateTime.of(LocalDate.of(year, (month + 1), 1), time);
            } else {
                open = LocalDateTime.of(LocalDate.of(year, 1, 1), time);
                end = LocalDateTime.of(LocalDate.of((year + 1), 1, 1), time);
            }
            temp = articleMapper.getArticleListByTimeline(open, end);
        }
        //判断空值
        if (temp == null || temp.size() == 0 || temp.get(0) == null) return null;
        //先过滤tag
        BlogAlgorithmHandler.articleTagsToTagList(temp, tagMapper);
        //flag-->区分list指标
        Integer monthFlag = temp.get(0).getTime().getMonth();
        List<Article> theMonth = new ArrayList<Article>();
        for (int i = 0; i < temp.size(); i++) {
            //判断是否同月，否则flush
            if (temp.get(i).getTime().getMonth() != monthFlag) {
                list.add(theMonth);
                theMonth = new ArrayList<Article>();
                monthFlag = temp.get(i).getTime().getMonth();
            }
            theMonth.add(temp.get(i));
        }
        list.add(theMonth);
        return list;
    }

    /**
     * 归档时间线上的文章数量
     * 分组查询
     *
     * @return
     */
    @Override
    public LinkedHashMap<Date, Integer> getTimelineArticleCount() {
        return mapperSupport.getTimelineArticleCount();
    }


}