package org.ruan.blog.component;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.Properties;

/**
 * 邮件发送类
 * 不使用此类，请使用springboot整合的方式发送邮件
 * 2020年3月11日18:19:14
 *
 * @author ruan4261
 */
@Component("emailHandler")
public class EmailHandler {

    @Autowired
    private JavaMailSender javaMailSender;

    //springboot配置中获取from
    @Value("${spring.mail.from}")
    private String from;

    /**
     * 发送SSL加密的邮件
     *
     * @param title
     * @param content
     * @param mailto
     */
    @Async
    public void sendEmailWithSSL(String title, String content, String mailto) throws MessagingException {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper messageHelper;
        messageHelper = new MimeMessageHelper(mimeMessage, true);
        //邮件发送人
        messageHelper.setFrom(from);
        //邮件接收人
        messageHelper.setTo(mailto);
        //邮件主题
        mimeMessage.setSubject(title);
        //邮件内容，html格式
        messageHelper.setText(content, true);
        //发送
        javaMailSender.send(mimeMessage);
    }
}
