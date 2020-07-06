// 位移高度
// let TRANSLATE_Y_HIGHT = 0;

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
    if (localStorage.getItem('mode')) {
        $('body').removeClass('day-mode')
        $('body').addClass('night-mode')
    }

    // 评论信息
    selectComment()

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
    const totalWidth = document.body.clientWidth
    // 判断是不是小屏幕，大屏幕添加class，文章详情title动画。
    if (totalWidth >= 768) {
        $('#navbar-menu .nav.navbar-nav').addClass('artile-ul')
    } else {
        $('#navbar-menu .nav.navbar-nav').removeClass('artile-ul')
    }

    // 文章详情title 具有动画
    // const h = $('.nav.navbar-nav li').eq(0).height()
    const navBar = document.querySelectorAll('ul.nav.navbar-nav')
    if (navBar.length > 0) {
        const h = navBar[0].clientHeight
        document.querySelectorAll('nav.navbar.navbar-default')[0].style.height = h + 'px'
        $('.article-h1 .articleTitle').css({'height': h + 'px'})
        // $('.article-h1 .articleTitle').css({'height': h + 'px', 'line-height': h + 'px'})

        const navHeight = document.querySelectorAll('nav.navbar.bootsnav')[0].clientHeight;
        const marginBottom = parseInt($('nav.navbar.bootsnav').css('marginBottom'))
        // 空容器用来占nav定位留下来的高度
        document.querySelectorAll('#placeholder.ensp')[0].style.height = navHeight + marginBottom + 'px';
    }


    // 计算sidebar的定位位置。
    const elHtml = document.querySelectorAll('.article-wrap')
    if (elHtml.length > 0) {
        const totalWidth = document.body.clientWidth
        const articleInfoWidth = elHtml[0].offsetWidth;
        const contentWidth = document.querySelectorAll('.article-content')[0].offsetWidth;
        const navHeight = document.querySelectorAll('nav.navbar.bootsnav')[0].clientHeight;
        const marginBottom = parseInt($('nav.navbar.bootsnav').css('marginBottom'))
        const unilateral = (totalWidth - articleInfoWidth) / 2;
        $('.sidebar').css({'left': unilateral + 17 + contentWidth + 'px', 'top': navHeight + marginBottom + 'px'})
    }
    // 滚动获取第一层nav的高度，计算位移。
    // TRANSLATE_Y_HIGHT = document.querySelectorAll('ul.nav.navbar-nav')[0].clientHeight;
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
        localStorage.removeItem('mode')

        $('.themeMixin-skin .iconfont').addClass('icon-moon')
        $('.themeMixin-skin .iconfont').removeClass('icon-sun')

    }
});


$('.nav.navbar-nav > li, .nav.navbar-nav > li ul.dropdown-menu').hover(function () {
    $('nav.navbar.bootsnav').css({'overflow': 'visible'})
    $('.article-h1').css({'display': 'none'})
}, function () {
    $('nav.navbar.bootsnav').css({'overflow': 'hidden'})
    $('.article-h1').css({'display': 'block'})
});

// 发布评论信息
function insertComment() {
    $.ajax({
        url: '/api' + '/comment/insert',
        method: 'post',
        headers: {'Content-Type': 'application/json;charset=utf8', 'r': getCookie('auth')},
        data: JSON.stringify({
            article_id: $('#article_id').val(),
            message: $('#comment-textarea').val()
        }),
        success: function (res) {
            if (res.code === 1) {
            } else {
                // window.message.error(res)
            }
        }
    })
}

// 显示信息
function selectComment() {
    var arr = [
        {
            id: 1,
            img: "./img.jpg",
            replyName: "帅大叔",
            beReplyName: "匿名",
            content: "同学聚会，看到当年追我的屌丝开着宝马车带着他老婆来了，他老婆是我隔壁宿舍的同班同学，心里后悔极了。",
            time: "2017-10-17 11:42:53",
            address: "深圳",
            osname: "",
            browse: "谷歌",
            replyBody: []
        },
        {
            id: 2,
            img: "./img.jpg",
            replyName: "匿名",
            beReplyName: "",
            content: "到菜市场买菜，看到一个孩子在看摊，我问：“一只鸡多少钱？” 那孩子回答：“23。” 我又问：“两只鸡多少钱？” 孩子愣了一下，一时间没算过来，急中生智大吼一声：“一次只能买一只！”",
            time: "2017-10-17 11:42:53",
            address: "深圳",
            osname: "",
            browse: "谷歌",
            replyBody: [{
                id: 3,
                img: "",
                replyName: "帅大叔",
                beReplyName: "匿名",
                content: "来啊，我们一起吃鸡",
                time: "2017-10-17 11:42:53",
                address: "",
                osname: "",
                browse: "谷歌"
            }]
        },
        {
            id: 3,
            img: "./img.jpg",
            replyName: "帅大叔",
            beReplyName: "匿名",
            content: "同学聚会，看到当年追我的屌丝开着宝马车带着他老婆来了，他老婆是我隔壁宿舍的同班同学，心里后悔极了。",
            time: "2017-10-17 11:42:53",
            address: "深圳",
            osname: "win10",
            browse: "谷歌",
            replyBody: []
        }
    ];
    $(".comment-list").addCommentList({data: arr, add: ""});

    $.ajax({
        url: '/article/comment/' + $('#article_id').val(),
        method: 'get',
        success: function (res) {
            if (res.code === 1) {
            } else {
                // window.message.error(res)
            }
        }
    })
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

