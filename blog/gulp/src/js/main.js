const Ok = 1

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
    // setTimeout(function () {
    //     document.getElementById('initialize').style.display = 'none'
    // });

    document.getElementById('year').innerText = new Date().getFullYear();
    handleMoreIcon();
    computeNavWidth();
    /*
    if (!localStorage.getItem('blog_mode')) {
        $('body').addClass('day-mode')
        $('#themeMixin-skin .iconfont').addClass('icon-sun')

        localStorage.setItem('blog_mode', 'day')
    } else {
        $('body').addClass('night-mode')
        $('#themeMixin-skin .iconfont').addClass('icon-moon')
    }
    */
    if (localStorage.getItem('mode')) {
        $('body').removeClass('day-mode')
        $('body').addClass('night-mode')
    }
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
    const BodyWidth = document.querySelectorAll('body')[0].clientWidth;
    const totalWidth = document.querySelectorAll('body')[0].clientWidth;
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
    document.querySelectorAll('#placeholder.ensp')[0].style.height = navHeight + marginBottom + 'px';

    // 文章加载器 锁定定位 需要定位在文章列表中间
    const articleAllWidth = document.querySelectorAll('.article-list')[0].clientWidth;
    const skinWidth = document.querySelectorAll('.nav-skin')[0].clientWidth;
    const sidebarWidth = document.querySelectorAll('.sidebar-box')[0].clientWidth;
    if (BodyWidth > 768) {
        document.querySelectorAll('#initialize')[0].style.left = (articleAllWidth / 2) + skinWidth + sidebarWidth + 'px';
    } else {
        document.querySelectorAll('#initialize')[0].style.left = (articleAllWidth / 2) + 'px';
    }
}


// 皮肤切换白天黑夜
$('.themeMixin-skin').click(function () {
    if ($('body').hasClass('day-mode')) {
        // body 添加icon切换
        $('body').removeClass('day-mode')
        $('body').addClass('night-mode')
        localStorage.setItem('mode', 'night-mode')

        // 当前模式的icon
        $('.themeMixin-skin .iconfont').addClass('icon-sun')
        $('.themeMixin-skin .iconfont').removeClass('icon-moon')
    } else {
        $('body').removeClass('night-mode')
        $('body').addClass('day-mode')

        $('.themeMixin-skin .iconfont').addClass('icon-moon')
        $('.themeMixin-skin .iconfont').removeClass('icon-sun')

        localStorage.removeItem('mode')
    }
});

$("#confirmbtn").click(function () {
    $.confirm("提示信息", "是否退出登录！");
});
$.isok = function (ok) {
    console.log(getCookie('auth'))
    $.ajax({
        url: '/api' + '/log/out',
        method: 'Post',
        headers: {'Content-Type': 'application/json;charset=utf8', 'r': getCookie('auth')},
        success: function (res) {
            if (res.code === Ok) {
                sessionStorage.setItem('out', '1')
                window.location.reload()
            } else {
                window.message.error(res)
                $.alert("标题", "内容");
            }
        }
    })
}

window.onload = function () {
    if (sessionStorage.getItem('out')) {
        $.toast("退出登录！", 5, true);
        sessionStorage.removeItem('out')
    }
}

// 获取指定名称的cookie
function getCookie(name) {
    var strcookie = document.cookie;//获取cookie字符串
    var arrcookie = strcookie.split("; ");//分割
    //遍历匹配
    for (var i = 0; i < arrcookie.length; i++) {
        var arr = arrcookie[i].split("=");
        if (arr[0] == name) {
            return arr[1];
        }
    }
    return "";
}