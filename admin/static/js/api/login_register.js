/**
 * 注册接口
 * */
var HOST = '/api';
var Ok = 1;
$('#register-btn').click(function () {
    var username = $('#username').val();
    var invitecode = $('#invitecode').val();
    var password = $('#password').val();
    var password2 = $('#password2').val();
    var checkbox = $('#checkbox-signup').is(':checked');
    if (!checkbox) {
        window.message.error('请先阅读相关条款');
    } else if (password !== password2) {
        window.message.error('两次密码不一致');
    } else if (username && username !== '' || invitecode && invitecode !== '' && password && password !== '') {
        var data = JSON.stringify({
            username: username,
            invitecode: invitecode,
            password: password
        });
        $.ajax({
            url: HOST + '/register',
            data: data,
            method: 'POST',
            success: function success(res) {
                if (res.code === Ok) {
                    window.message.success(res);
                    setTimeout(function () {
                        window.location.href = '/login';
                    }, 5000);
                } else {
                    window.message.error(res);
                }
            }
        });
    }
});

$('#login-btn.btn.btn-primary.btn-block').click(function () {
    console.log('111hifhaifi');
    var username = $('#username').val();
    var password = $('#password').val();
    // 是不是记住密码
    var checkbox = $('#checkbox-signin').is(':checked');
    if (username && username !== '' && password && password !== '') {
        var data = JSON.stringify({
            username: username,
            password: password,
            checkbox: checkbox
        });
        $.ajax({
            url: '/login',
            data: data,
            method: 'POST',
            success: function success(res) {
                console.log(res);
            }
        });
    }
});