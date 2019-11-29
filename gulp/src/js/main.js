// 函数防抖
function debounce(fn, wait) {
    var timeout = null;
    return function () {
        if (timeout !== null)
            clearTimeout(timeout);
        timeout = setTimeout(fn, wait);
    }
}

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
    setTimeout(function () {
        document.getElementById('initialize').style.display = 'none'
    }, 1);

    document.getElementById('year').innerText = new Date().getFullYear();
    handleMoreIcon();
    computeNavWidth();
}
window.onresize = function() {
    computeNavWidth();
    debounce(handleMoreIcon, 1000)
}

/**************** 搜索框有两个样式，多个元素绑定同个事件。****************/
$('#handleSearch, i#mobile').click(function () {
    const iconSearch = $('#handleSearch .iconfont.icon-search');
    const formBox = document.querySelectorAll('#search-form-box')[0]
    if (!iconSearch.hasClass('active')) {
        iconSearch.addClass('active');
        $('#search-form-box').addClass('active');
        // form_top 高度
        const isMobile = $(this).
        ('mobile'); // 是否是手机
        const mobileHeight = document.querySelectorAll('.navbar-header')[0].clientHeight;
        const pcHeight = document.querySelectorAll('.navbar-collapse')[0].clientHeight
        formBox.style.top = isMobile ? `${mobileHeight + 14}px` : `${pcHeight + 14}px`
    } else {
        iconSearch.removeClass('active')
        $('#search-form-box').removeClass('active');
        formBox.style.top = `${0}px`
    }
});

/**************** 计算nav的宽度，因为采用了锁定定位所以需要宽度，后期还需要加工。****************/
function computeNavWidth() {
    const totalWidth = document.querySelectorAll('.wrapper')[0].clientWidth;
    if (totalWidth > 768) {
        const skinWidth = document.querySelectorAll('.nav-skin')[0].clientWidth;
        const coverWidth = document.querySelectorAll('.cover-img')[0].clientWidth;
        const contentWidth = totalWidth - skinWidth - coverWidth;
        document.querySelectorAll('nav.navbar.bootsnav')[0].style.width = contentWidth + 'px'
    } else {
        document.querySelectorAll('nav.navbar.bootsnav')[0].style.width = totalWidth + 'px'
    }

    const navHeight = document.querySelectorAll('nav.navbar.bootsnav')[0].clientHeight;
    const marginBottom = parseInt($('nav.navbar.bootsnav').css('marginBottom'))
    // 空容器用来占nav定位留下来的高度
    document.querySelectorAll("#placeholder.ensp")[0].style.height = navHeight + marginBottom + 'px'
}