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
    if (!checkbox) {
        window.message.error('请先阅读相关条款')
    } else if (password !== password2) {
        window.message.error('两次密码不一致')
    } else if (username && username !== '' || invitecode && invitecode !== '' && password && password !== '') {
        const data = JSON.stringify({
            username,
            invitecode,
            password
        })
        $.ajax({
            url: HOST + '/register',
            data: data,
            method: 'POST',
            success: function (res) {
                if (res.code === Ok) {
                    window.message.success(res)
                    setTimeout(function () {
                        window.location.href = '/login'
                    }, 5000)
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
    if (username && username !== '' && password && password !== '') {
        const data = JSON.stringify({
            username: username,
            password: password,
            checkbox: checkbox
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