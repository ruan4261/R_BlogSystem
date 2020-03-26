function loginBoxToggle(status) {
    if (status == 1) {
        $('.comment-login-box').addClass("show");
        $('.comment-login-status').removeClass("show");
    } else {
        $('.comment-login-status').addClass("show");
        $('.comment-login-box').removeClass("show");
    }
}

function login(http, password) {
    if (http.length < 4 || http.indexOf('.') == -1) {
        swal({
            icon: "warning",
            title: "警告",
            text: '请输入正确域名。',
            button: '确认'
        });
        return;
    }
    $.ajax({
        method: "POST",
        url: '/api/login.do',
        data: {http: http, password: password},
        dataType: "json",
        success: function (data) {
            if (data['result'] == true) {
                async function f() {
                    await swal({
                        icon: "success",
                        title: "成功",
                        text: data['message'],
                        button: '确认'
                    });
                    window.location.reload();
                }

                f();
            } else {
                swal({
                    icon: "error",
                    title: "失败",
                    text: data['message'],
                    button: '确认'
                });
            }
        },
        error: function () {
            swal({
                icon: "error",
                title: "错误",
                text: '服务器连接超时。',
                button: "确认"
            });
        }
    });
}

function logout() {
    $.ajax({
        method: "POST",
        url: '/api/logout.do',
        data: {},
        dataType: "json",
        success: function () {
            window.location.reload();
        },
        error: function () {
            swal({
                icon: "error",
                title: "错误",
                text: '服务器连接超时。',
                button: "确认"
            });
        }
    });
}

function scoreHandler(score) {
    $('#score').val(score);
    for (let i = 1; i <= score; i++) {
        $('#score-' + i).attr("style", "color:gold;");
    }
    for (let i = 5; i > score; i--) {
        $('#score-' + i).attr("style", "");
    }
}

function sendCommentHelper(status) {
    if (status == 1) {
        let master = $('#article-id').val();
        let score = $('#score').val();
        let verifyCode = $('#verifyCode').val();
        let content = $('#content').val();
        sendComment(master, null, null, score, verifyCode, content);
    } else if (status == 2) {
        let master = $('#article-id').val();
        let verifyCode = $('#verifyCode-reply').val();
        let content = $('#content-reply').val();
        let parent = $('#parent').val();
        let target = $('#target').val();
        if (parent == null || parent.trim() == '' || target == null || target.trim() == '') {
            swal({
                icon: "warning",
                title: "警告",
                text: '检测到非法行为，表单丢失，请刷新界面。',
                button: "确认"
            });
            return;
        }
        sendComment(master, parent, target, null, verifyCode, content);
    }
}

/**
 * 发表评论
 *
 * @param master 所属文章
 * @param parent 父级评论，可以传空值
 * @param target 回复对象，可以传空值
 * @param score 评分，可以传空值
 * @param verifyCode 邮箱验证码，可以传空值
 * @param content 评论内容
 */
async function sendComment(master, parent, target, score, verifyCode, content) {
    let flag = true;
    if (arguments.length != 6 || master == null || isNaN(master)) {
        swal({
            icon: "warning",
            title: "警告",
            text: '检测到非法行为。',
            button: "确认"
        });
        return;
    }
    if (verifyCode == null || verifyCode.trim().length != 6) {
        await swal({
            icon: "warning",
            title: "警告",
            text: '您没有提交验证码，将使用默认邮箱接收回复提醒！请确认？',
            buttons: {
                cancel: {
                    text: "取消",
                    visible: true,
                    value: false
                },
                confirm: {
                    text: "继续提交",
                    visible: true,
                    value: true
                }
            }
        }).then(function (value) {
            if (value == false) flag = false;
        });
    }
    if (flag == false) return;
    $.ajax({
        method: "POST",
        url: '/api/comment.add',
        data: {
            master: master,
            parent: parent,
            target: target,
            score: score,
            verifyCode: verifyCode,
            content: content
        },
        dataType: "json",
        success: function (data) {
            if (data['result'] == true) {
                async function f() {
                    await swal({
                        icon: "success",
                        title: "成功",
                        text: data['message'],
                        button: "确认"
                    });
                    window.location.reload();
                }

                f();
            } else {
                swal({
                    icon: "error",
                    title: "失败",
                    text: data['message'],
                    button: "确认"
                });
            }
        },
        error: function () {
            swal({
                icon: "error",
                title: "错误",
                text: '服务器连接超时。',
                button: "确认"
            });
        }
    });
}

function clickLike(id) {
    let cookies = document.cookie;
    let ckArr = cookies.split(";");
    for (let i = 0; i < ckArr.length; i++) {
        if (ckArr[i].indexOf("like-comment-" + id + "=") != -1) {
            swal({
                icon: "warning",
                title: "警告",
                text: '您已经给这条评论点过赞了，请勿重复点赞。',
                button: "确认"
            });
            return;
        }
    }
    $.ajax({
        method: "POST",
        url: '/api/comment.like',
        data: {comment: id},
        dataType: "json",
        success: function (data) {
            if (data) {
                window.location.reload();
            } else {
                swal({
                    icon: "error",
                    title: "失败",
                    text: '点赞失败。',
                    button: "确认"
                });
            }
        },
        error: function () {
            swal({
                icon: "error",
                title: "错误",
                text: '服务器连接超时。',
                button: "确认"
            });
        }
    });
}

const replyBox = $('#reply-box-spare').html();
$('#reply-box-spare').remove();

function openReplyBox(ele, parent, target) {
    let $ele = $(ele);
    if ($ele.next().attr('id') == 'reply-box') {
        $('#reply-box').remove();
        $('#parent').val(null);
        $('#target').val(null);
    } else {
        $('#reply-box').remove();
        let newBox = $('<div id="reply-box"></div>');
        newBox.html(replyBox);
        $(ele).after(newBox);
        $('#parent').val(parent);
        $('#target').val(target);
    }
}

let $contentArr = $('.comment-content');
let reg = new RegExp("\n", "g");
for (let i = 0; i < $contentArr.length; i++) {
    let $content = $contentArr.eq(i).html();
    $content = $content.replace(reg, "<br/>");
    $contentArr.eq(i).html($content);
}