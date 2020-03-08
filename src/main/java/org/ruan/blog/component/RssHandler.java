package org.ruan.blog.component;


import com.rometools.rome.feed.synd.*;
import com.rometools.rome.io.FeedException;
import com.rometools.rome.io.SyndFeedInput;
import com.rometools.rome.io.SyndFeedOutput;
import com.rometools.rome.io.XmlReader;
import org.ruan.blog.pojo.Article;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.List;

public class RssHandler {

    public static void updateRss(Article article, String jsonContent) throws IOException, FeedException {

        File file = new File("C:/data/Blog/rss/rss.xml");
        XmlReader xmlReader = new XmlReader(file);
        SyndFeedInput input = new SyndFeedInput();
        SyndFeed feed = input.build(xmlReader);
        List entries = feed.getEntries();

        feed.setFeedType("rss_2.0");
        feed.setTitle("ruan4261博客推送");
        feed.setDescription(BlogContextHandler.getHeadMap().get("description").toString());
        feed.setLink("https://ruan4261.com");
        feed.setPublishedDate(new Date());

        SyndEntry entry = new SyndEntryImpl();
        entry.setAuthor("ruan4261");
        entry.setTitle(article.getTitle());
        entry.setLink("https://ruan4261.com/" + article.getId());
        entry.setUri("https://ruan4261.com/" + article.getId());
        entry.setUpdatedDate(new Date());
        entry.setPublishedDate(new Date());

        SyndContent desc = new SyndContentImpl();
        desc.setType("text/html");
        desc.setValue(jsonContent);
        entry.setDescription(desc);

        entries.add(0, entry);
        feed.setEntries(entries);

        SyndFeedOutput out = new SyndFeedOutput();
        try {
            BlogContextHandler.writeFile("C:/data/Blog/rss/rss.xml", out.outputString(feed));
        } catch (FeedException e) {
            e.printStackTrace();
        }
    }
}
