window.onload = function () {
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
    const loginForm = document.querySelectorAll('.loginForm')
    switch (Index) {
        case 0:
            lnkBar[0].className = 'lnk-bar one'
            loginForm[0].className = 'loginForm'
            break;
        case 1:
            lnkBar[0].className = 'lnk-bar two'
            loginForm[0].className = 'loginForm mobile'
            break;
    }
})