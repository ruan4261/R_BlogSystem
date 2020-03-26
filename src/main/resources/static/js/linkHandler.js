$('#add-submit').click(function () {
    let http = $('#http').val();
    let password = $('#password').val();
    let rePassword = $('#re-password').val();
    if (rePassword != password) {
        swal({
            icon: "warning",
            title: "警告",
            text: "两次输入密码不一致。",
            button: "确认"
        });
        return;
    }
    let verifyCode = $('#verifyCode').val();
    if (verifyCode.length != 6) {
        swal({
            icon: "warning",
            title: "警告",
            text: "请填写邮箱验证码。",
            button: "确认"
        });
        return;
    }
    let title = $('#title').val();
    let desc = $('#desc').val();
    let email = $('#email').val();
    let profile = $('#profile').val();
    if (http.indexOf(".") < 1 || password.trim() == "" || title.trim() == "" || desc.trim() == "" || email.indexOf("@") < 1 || email.indexOf('.', email.indexOf('@')) < 3) {
        swal({
            icon: "warning",
            title: "警告",
            text: "请用正确格式填写表单。",
            button: "确认"
        });
        return;
    }
    let flag = true;
    $.ajax({
        method: "GET",
        url: 'https://' + profile,
        async: false,
        success: function () {
        },
        error: function () {
            swal({
                closeOnClickOutside: false,
                icon: "error",
                title: "错误",
                text: "无法请求到您的头像，请在您的服务器配置CORS跨域策略。",
                buttons: {
                    confirm: {
                        text: "爷这就去配置"
                    }
                }
            });
            flag = false;
        }
    });
    if (!flag) return;
    $.ajax({
        method: "POST",
        url: '/api/link.add',
        data: {
            http: http,
            password: password,
            title: title,
            desc: desc,
            email: email,
            profile: profile,
            verifyCode: verifyCode
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
});

$('#info-submit').click(async function () {
    let title = $('#u-title').val();
    let desc = $('#u-desc').val();
    let email = $('#u-email').val();
    let profile = $('#u-profile').val();
    let linkVerifyCode = $('#u-verifyCode').val();
    let verifyCode = $('#n-verifyCode').val();
    let flag = true;
    if (linkVerifyCode.length != 6) {
        swal({
            icon: "warning",
            title: "警告",
            text: "请填写旧邮箱验证码。",
            buttons: {
                confirm: {
                    text: "确认"
                }
            }
        });
        return;
    }
    $.ajax({
        method: "GET",
        url: 'https://' + profile,
        async: false,
        success: function () {
        },
        error: function () {
            swal({
                closeOnClickOutside: false,
                icon: "error",
                title: "错误",
                text: "无法请求到您的头像，请在您的服务器配置CORS跨域策略。",
                buttons: {
                    confirm: {
                        text: "爷这就去配置"
                    }
                }
            });
            flag = false;
        }
    });
    if (!flag) return;
    await swal({
        closeOnClickOutside: false,
        icon: "warning",
        title: "警告",
        text: "修改信息会使您的友链进入审核队列（即为消隐状态），暂时无法使用。",
        buttons: {
            cancel: {
                text: "取消",
                visible: true,
                value: false
            },
            confirm: {
                text: "确定",
                visible: true,
                value: true
            }
        }
    }).then(function (value) {
        if (value) {
            $.ajax({
                method: "POST",
                url: '/api/linkInfo.update',
                data: {
                    title: title,
                    desc: desc,
                    email: email,
                    profile: profile,
                    linkVerifyCode: linkVerifyCode,
                    verifyCode: verifyCode
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
            })
        }
    });
});

$('#pwd-submit').click(function () {
    let password = $('#u-password').val();
    let verifyCode = $('#up-verifyCode').val();
    $.ajax({
        method: "POST",
        url: '/api/linkPwd.update',
        data: {
            password: password,
            linkVerifyCode: verifyCode
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
});

$('#login-submit').click(function () {
    let http = $('#login-http').val();
    let password = $('#login-password').val();
    $.ajax({
        method: "POST",
        url: '/api/login.do',
        data: {
            http: http,
            password: password
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
});