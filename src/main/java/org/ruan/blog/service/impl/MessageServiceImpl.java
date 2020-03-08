package org.ruan.blog.service.impl;

import org.ruan.blog.service.MessageService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * 留言业务实现类
 *
 * @author ruan4261
 */
@Service("messageService")
@Transactional
public class MessageServiceImpl implements MessageService {
}
