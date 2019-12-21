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