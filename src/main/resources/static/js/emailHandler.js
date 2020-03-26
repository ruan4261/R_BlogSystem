let flag = true;
let flag2 = true;

function timer(s, ele, point) {
    let $ele = $(ele);
    $ele.attr('disabled', true);
    let timeout = s;
    let interval = window.setInterval(function () {
        $ele.html(--timeout + "秒");
    }, 1000);
    window.setTimeout(function () {
        if (point == 1) {
            flag = true;
        } else {
            flag2 = true;
        }
        clearInterval(interval);
        $ele.html('发送');
        $ele.attr('disabled', false);
    }, s * 1000);
}

/**
 * 发送邮箱验证码
 *
 * @param email 对象邮箱
 * @param ele 按钮元素
 */
function sendEmailVerifyCode(email, ele) {
    if (!flag) {
        swal({
            icon: "warning",
            title: "警告",
            text: '发送验证码过于频繁，请稍后再试。',
            button: "确认"
        });
        return;
    }
    if ((email.indexOf('@') == -1) || (email.indexOf('.', email.indexOf('@')) == -1)) {
        swal({
            icon: "warning",
            title: "警告",
            text: '邮箱格式不正确。',
            button: "确认"
        });
        return;
    }
    $.ajax({
        method: "POST",
        url: '/api/email.verify',
        data: {email: email},
        dataType: "json",
        success: function (data) {
            if (data) {
                swal({
                    icon: "success",
                    title: "成功",
                    text: '发送成功，验证码5分钟内有效，邮件可能有半分钟延迟，请耐心等待。',
                    button: "确认"
                });
                flag = false;
                timer(60, ele, 1);
            } else
                swal({
                    icon: "error",
                    title: "错误",
                    text: '验证码发送失败！',
                    button: "确认"
                });
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

function sendEmailVerifyCodeByLink(ele) {
    if (!flag2) {
        swal({
            icon: "warning",
            title: "警告",
            text: '发送验证码过于频繁，请稍后再试。',
            button: "确认"
        });
        return;
    }
    $.ajax({
        method: "POST",
        url: '/api/linkEmail.verify',
        dataType: "json",
        success: function (data) {
            if (data) {
                swal({
                    icon: "success",
                    title: "成功",
                    text: '发送成功，验证码5分钟内有效，邮件可能有半分钟延迟，请耐心等待。',
                    button: "确认"
                });
                flag2 = false;
                timer(60, ele, 2);
            } else
                swal({
                    icon: "error",
                    title: "错误",
                    text: '验证码发送失败！',
                    button: "确认"
                });
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