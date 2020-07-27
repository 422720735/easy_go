const Ok = 1
/**************** 更多按钮icon 始终是 三的样式 去除关闭icon的class。****************/
function handleMoreIcon() {
    document.getElementById('drawer-mask').onclick = function () {
        if ($(this).attr('aria-expanded') === 'true') {
            const more = $('nav.navbar.bootsnav .navbar-toggle i');
            more.removeClass('fa fa-times');
            more.addClass('fa fa-bars');
        }
    }
}

window.onload = function () {
    handleMoreIcon();
    if (localStorage.getItem('mode')) {
        $('body').removeClass('day-mode')
        $('body').addClass('night-mode')
    }
}

$('.main > .user-title-tag .tag').click(function () {
    $('.main > .user-title-tag .tag').removeClass('active')
    $(this).addClass('active')
    const Index = $(this).index()
    const lnkBar = document.querySelectorAll('.lnk-bar')
    const inputBox = document.querySelectorAll('.inputBox.form')
    switch (Index) {
        case 0:
            lnkBar[0].className = 'lnk-bar one'
            inputBox[0].className = 'inputBox form'
            break;
        case 1:
            lnkBar[0].className = 'lnk-bar two'
            inputBox[0].className = 'inputBox form mobile'
            break;
    }
})

// 登陆页废弃验证码
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

// if (sessionStorage.getItem('r')) {
//     $('.github').attr('href', $('.github').attr('href') + encodeURIComponent(sessionStorage.getItem('r')))
//     $('.github').attr('href', $('.github').attr('href') + '&' + encodeURIComponent('RedirectUrl') + '='+ encodeURIComponent(sessionStorage.getItem('r')))
// }