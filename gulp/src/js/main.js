// 函数防抖
function debounce(fn, wait) {
    var timeout = null;
    return function() {
        if(timeout !== null)
            clearTimeout(timeout);
        timeout = setTimeout(fn, wait);
    }
}

function handleMoreIcon() {
    document.getElementById('drawer-mask').onclick = function() {
        if ($(this).attr('aria-expanded') === 'true') {
            const more = $('nav.navbar.bootsnav .navbar-toggle i');
            more.removeClass('fa fa-times');
            more.addClass('fa fa-bars');
        }
    }
}

window.onload = function () {
    setTimeout(function () {
        document.getElementById('initialize').style.display = 'none'
    }, 1);

    document.getElementById('year').innerText = new Date().getFullYear();
    handleMoreIcon()
}
window.onresize = debounce(handleMoreIcon, 1000)

/**************** 搜索框有两个样式，多个元素绑定同个事件。****************/
    $('#handleSearch, i#mobile').click(function () {
    const iconSearch = $('#handleSearch .iconfont.icon-search');
    const formBox = document.querySelectorAll('#search-form-box')[0]
    if (!iconSearch.hasClass('active')) {
        iconSearch.addClass('active');
        $('#search-form-box').addClass('active');
        // form_top 高度
        const isMobile = $(this).hasClass('mobile'); // 是否是手机
        const mobileHeight = document.querySelectorAll('.navbar-header')[0].clientHeight;
        const pcHeight = document.querySelectorAll('.navbar-collapse')[0].clientHeight
        formBox.style.top = isMobile ? `${mobileHeight + 14}px` : `${pcHeight + 14}px`
    } else  {
        iconSearch.removeClass('active')
        $('#search-form-box').removeClass('active');
        formBox.style.top = `${0}px`
    }
});