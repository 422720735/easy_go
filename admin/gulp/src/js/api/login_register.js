/**
 * 注册接口
 * */
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
    } else if (invitecode === '') {
        window.message.error('邀请码不能为空')
    } else if (username && username !== '' || invitecode && invitecode !== '' && password && password !== '') {
        const result =  encodeAes(username) + '+' + encodeAes(password)
        const data = JSON.stringify({
            t: result,
            invitecode,
            code: code
        })
        $.ajax({
            url: 'register',
            data: data,
            method: 'POST',
            success: function (res) {
                console.log(res)
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
        const result = encodeAes(password) + '-' + encodeAes(username)
        const data = JSON.stringify({
            checkbox,
            s: result,
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


//加密
var tysitn = "O8Hp9WQbFPT0b5AUsEMVLtIU1MVYOrt5"
function encodeAes(plaintTextStr) {
    var key = CryptoJS.enc.Utf8.parse(tysitn);
    var encryptedData = CryptoJS.AES.encrypt(plaintTextStr, key, {
        iv: key,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    encryptedData = encryptedData.ciphertext.toString();
    return encryptedData
}

function handleValidator() {
    if ($('#register') && $('#register').length > 0) {
        const password = $('#register #password').val()
        const password2 = $('#register #password2').val()
        if (password.length >= 6 && password2.length >= 6 && (password === password2)) {
            $('#register #password').css({"border":"1px solid #dee2e6"})
            $('#register #password2').css({"border":"1px solid #dee2e6"})
            $('.btn.btn-primary.btn-block').eq(0).removeAttr('disabled')
            // 通过
        } else {
            $('#register #password').css({"border":"1px solid #e0291d"})
            $('#register #password2').css({"border":"1px solid #e0291d"})
            $('.btn.btn-primary.btn-block').eq(0).attr('disabled', 'disabled')
            // 不通过
        }
    }
}
