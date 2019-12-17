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
    document.getElementById('year').innerText = new Date().getFullYear();
    handleMoreIcon();
    computeNavWidth();
}

$(window).resize(function () {
    computeNavWidth();
    debounce(handleMoreIcon, 200)
});

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
    } else {
        iconSearch.removeClass('active')
        $('#search-form-box').removeClass('active');
        formBox.style.top = `${0}px`
    }
});

/**************** 计算nav的宽度，因为采用了锁定定位所以需要宽度，后期还需要加工。****************/
function computeNavWidth() {
    // 文章详情title 具有动画
    const h = $('.nav.navbar-nav li').eq(0).height()
    document.querySelectorAll('nav.navbar.navbar-default')[0].style.height = h + 'px'
    $('.article-h1 .articleTitle').css({'height': h + 'px', 'line-height': h + 'px'})



    const navHeight = document.querySelectorAll('nav.navbar.bootsnav')[0].clientHeight;
    const marginBottom = parseInt($('nav.navbar.bootsnav').css('marginBottom'))
    // 空容器用来占nav定位留下来的高度
    document.querySelectorAll('#placeholder.ensp')[0].style.height = navHeight + marginBottom + 'px';    
}


// 皮肤切换白天黑夜
$('.themeMixin-skin').click(function () {
    if ($('body').hasClass('day-mode')) {
        // body 添加icon切换
        $('body').removeClass('day-mode')
        $('body').addClass('night-mode')

        // 当前模式的icon
        $('.themeMixin-skin .iconfont').addClass('icon-sun')
        $('.themeMixin-skin .iconfont').removeClass('icon-moon')
    } else {
        $('body').removeClass('night-mode')
        $('body').addClass('day-mode')

        $('.themeMixin-skin .iconfont').addClass('icon-moon')
        $('.themeMixin-skin .iconfont').removeClass('icon-sun')
    }
});

/*推荐的滚动*/
$(window).scroll(() => {
    const top = Math.floor($(window).scrollTop());
    document.querySelectorAll('.sidebar')[0].style.top = top + 'px';
    if (top > 100) {
        $('.article-h1').addClass('article-current')
        $('ul.nav.navbar-nav').addClass('article-current')
    } else {
        $('.article-h1').removeClass('article-current')
        $('ul.nav.navbar-nav').removeClass('article-current')
    }
})
