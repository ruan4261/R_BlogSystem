package org.ruan.blog.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.ruan.blog.pojo.Message;

import java.util.Date;
import java.util.List;

/**
 * 留言映射
 *
 * @author ruan4261
 */
@Mapper
public interface MessageMapper {

    /**
     * 新增一条留言
     *
     * @param message
     * @return
     */
    public Integer addMessage(Message message);

    /**
     * 查询单条留言
     * 根据id
     *
     * @param message
     * @return
     */
    public Message getMessage(Message message);

    /**
     * 查询留言列
     * 根据 ...
     *
     * @param message
     * @param open
     * @param end
     * @param pageOpen
     * @param pageSize
     * @return
     */
    public List<Message> getMessageList(@Param("message") Message message,
                                        @Param("open") Date open,
                                        @Param("end") Date end,
                                        @Param("pageOpen") Integer pageOpen,
                                        @Param("pageSize") Integer pageSize);

    /**
     * 修改单条留言
     * 根据id
     *
     * @param message
     * @return
     */
    public Integer updateMessage(Message message);

    /**
     * <!保留方法>
     * 删除单条留言
     * 根据id
     * </!保留方法>
     *
     * @param message
     * @return
     */
    public Integer deleteMessage(Message message);
}
