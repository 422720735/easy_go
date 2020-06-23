/**
 * 注册接口
 * */
const HOST = '/api'
const Ok = 1
$('#register-btn').click(function () {
    const username = $('#username').val()
    const invitecode = $('#invitecode').val()
    const password = $('#password').val()
    const password2 = $('#password2').val()
    const checkbox = $('#checkbox-signup').is(':checked')
    const code = $('#code').val()
    if (!checkbox) {
        window.message.error('请先阅读相关条款')
    } else if (password !== password2) {
        window.message.error('两次密码不一致')
    } else if (!code || code === '') {
        window.message.error('请输入验证码')
    } else if (code.length !== 6) {
        window.message.error('验证码长度必须为6位')
    } else if (username && username !== '' || invitecode && invitecode !== '' && password && password !== '') {
        const data = JSON.stringify({
            username,
            invitecode,
            password
        })
        $.ajax({
            url: 'register',
            data: data,
            method: 'POST',
            success: function (res) {
                if (res.code === Ok) {
                    window.message.set(res)
                    window.location.href = '/login'
                } else {
                    window.message.error(res)
                }
            }
        })
    }
})

// 登录
$('#login-btn.btn.btn-primary.btn-block').click(function () {
    const username = $('#username').val()
    const password = $('#password').val()
    // 是不是记住密码
    const checkbox = $('#checkbox-signin').is(':checked')
    const code = $('#code').val()
    if (!code || code === '') {
        window.message.error('请输入验证码')
    } else if (code.length !== 6) {
        window.message.error('验证码长度必须为6位')
    }else if (username && username !== '' && password && password !== '') {
        const data = JSON.stringify({
            username,
            password,
            checkbox,
            code
        })
        $.ajax({
            url: '/login',
            data: data,
            method: 'POST',
            success: function (res) {
                if (res.code === Ok) {
                    window.message.set(res)
                    window.location.href = '/workplace'
                } else {
                    window.message.error(res)
                }
            }
        })
    }
})

function getCode() {
    $.ajax({
        url: '/captcha',
        method: 'Get',
        success: function (res) {
            if (res.code === Ok) {
                $('#captcha').attr('src', res.data)
            }
        }
    })
}
getCode()
