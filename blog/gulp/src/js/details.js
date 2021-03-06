// 位移高度
// let TRANSLATE_Y_HIGHT = 0;

let flag = true

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
    // 点赞信息
    selectPraise()
}

$(window).resize(function () {
    computeNavWidth();
    debounce(handleMoreIcon, 200)
});

// nav的位移 + 用文章title替换。
let isScroll = true
$(window).scroll(() => {
    const top = Math.floor($(window).scrollTop());
    if (top > 100) {
        // $('.article-h1').css({ 'transform': `translateY(-${TRANSLATE_Y_HIGHT}px)` })
        $('.article-h1').addClass('article-current')
        $('ul.nav.navbar-nav').addClass('article-current')
    } else {
        // $('.article-h1').css({ 'transform': `translateY(0)` })
        $('.article-h1').removeClass('article-current')
        $('ul.nav.navbar-nav').removeClass('article-current')
    }
    if (isScroll) {
        isScroll = false
        // 输出和这个文章标题是不显示的，当我们滚动就显示，因为我们需要初始化需要计算这个标题的高度，所以只是元素不可见，不是隐藏。
        $('.article-h1 .articleTitle').removeClass('invisible')
        $('.article-h1 .articleTitle').addClass('visible')
    }
})

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
    if (!flag) {
        window.message.warning('正在新增评论中...')
        return
    }
    flag = false
    $.ajax({
        url: '/api' + '/comment/insert',
        method: 'post',
        headers: {'Content-Type': 'application/json;charset=utf8', 'r': getCookie('auth')},
        data: JSON.stringify(Object.assign({
            article_id: $('#article_id').val(),
            content: $.trim($('#comment-textarea').val())
        }, {page: defaultListDataset.pagination.current})),
        success: function (res) {
            flag = true
            if (res.code === 1) {
                window.message.success('新增评论成功！')
                $('#comment-textarea').val('')
                let list_now = defaultListDataset.list.concat();
                list_now.unshift(res.data.list[0])
                defaultListDataset.pagination = push_pagination(res.data)
                if (!defaultListDataset.pagination.lastPage) {
                    $('a.Details-Next').show()
                }
                $(".comment-list").html('')
                $(".comment-list").addCommentList({data: list_now || [], add: ""});
            } else {
                window.message.error(res.data)
            }
        },
        error: function () {
            flag = true
        }
    })
}

// 发布回复
function insertReply(reply, callback) {
    if (!flag) {
        window.message.warning('正在新增回复中...')
        return
    }
    flag = false
    if (document.getElementById('ok-comment')) {
        $.ajax({
            url: '/api' + '/reply/insert',
            method: 'post',
            headers: {'Content-Type': 'application/json;charset=utf8', 'r': getCookie('auth')},
            data: JSON.stringify(reply),
            success: function (res) {
                flag = true
                if (res.code === 1) {
                    defaultListDataset.list[reply.page - 1] = res.data.list[0]
                    $(".comment-list").html('')
                    $(".comment-list").addCommentList({data: defaultListDataset.list || [], add: ""});
                    window.message.success('新增回复成功！')
                    callback && callback()
                } else {
                    window.message.error(res.data)
                }
            },
            error: function () {
                flag = true
            }
        })
    } else {
        window.message.error('请先登录才能回复！')
    }
}

// 显示信息
function selectComment() {
    $.ajax({
        url: '/article/comment/' + $('#article_id').val() + '?page=1',
        method: 'get',
        success: function (res) {
            if (res.code === 1) {
                defaultListDataset = mergePagination(defaultListDataset, res.data)
                if (defaultListDataset.pagination.lastPage) {
                    $('a.Details-SeeMore').hide()
                }
                $(".comment-list").addCommentList({data: defaultListDataset.list || [], add: ""});
                if (defaultListDataset.pagination.lastPage) {
                    $('a.Details-Next').hide()
                }
            }
        }
    })
}

let not_first = true
function selectPraise() {
    $.ajax({
        url: '/article/praise/' + $('#article_id').val(),
        method: 'get',
        headers: {'Content-Type': 'application/json;charset=utf8', 'r': getCookie('auth')},
        success: function (res) {
            if (res.code === 1) {
                !not_first && window.message.success(res.message)
                const {praise, state} = res.data
                if (state) {
                    $('a.like-btn.link').addClass('active')
                } else {
                    $('a.like-btn.link').removeClass('active')
                }
                $('a.like-btn.link .like-count').text(praise)
            } else {
                !not_ffirst && window.message.error(res.data)
            }
            not_first = false
        },
        error: function () {
            not_first = false
        }
    })
}

// 文章赞
$('.like-btn.link .like-content').click(function () {
    const r = getCookie('auth')
    if (r && r !== '') {
        $.ajax({
            url: '/api' + '/article/praise',
            method: 'Post',
            data: JSON.stringify({
                article_id: $('#article_id').val()
            }),
            headers: {'Content-Type': 'application/json;charset=utf8', 'r': r},
            success: function (res) {
                if (res.code === 1) {
                    const {praise, state} = res.data
                    if (state) {
                        $('a.like-btn.link').addClass('active')
                    } else {
                        $('a.like-btn.link').removeClass('active')
                    }
                    $('a.like-btn.link .like-count').text(praise)
                    window.message.success(res.message)
                } else {
                    window.message.error(res.data)
                }
            }
        })
    }
})

$('.like-btn.disabled .like-content').click(function () {
    window.message.warning('登录后才能点赞！')
})


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


$('a.Details-Next').click(function () {
    console.log(defaultListDataset)
    if (!defaultListDataset.pagination.lastPage) {
        var c = defaultListDataset.pagination.current + 1
        $.ajax({
            url: '/article/comment/' + $('#article_id').val() + '?page=' + c,
            method: 'get',
            success: function (res) {
                if (res.code === 1) {
                    defaultListDataset = mergePagination(defaultListDataset, res.data)
                    if (defaultListDataset.pagination.lastPage) {
                        $('a.Details-Next').hide()
                    }
                    $(".comment-list").html('')
                    $(".comment-list").addCommentList({data: defaultListDataset.list || [], add: ""});
                }

            }
        })
    } else {
        window.message.error('当前已经是最后一页了！')
    }
})


let defaultListDataset = {
    list: [],
    pagination: {
        nextpage: 0,
        prepage: 0,
        pages: [],
        current: 1,
        size: 10,
        lastPage: false,
        total: 0
    }
}

// 评论分页加载更多
function mergePagination(prevData, resultsData) {
    if (!prevData || !prevData.list) {
        throw new Error('prevData传入的数据格式错误，请确保格式正确。')
    }

    if (!resultsData) {
        throw new Error('currentData传入的数据格式错误，请确保格式正确。')
    }

    if (resultsData.current == 1 && Array.isArray(resultsData.list)) {
        return {
            list: resultsData.list || [],
            pagination: {
                nextpage: resultsData.nextpage,
                prepage: resultsData.prepage,
                pages: resultsData.pages,
                total: resultsData.total,
                current: resultsData.current,
                size: resultsData.size,
                lastPage: resultsData.totalpages === resultsData.current // 是不是到最后一页了
            }
        }
    } else {
        let _list = prevData.list.concat(resultsData.list || [])
        return {
            list: _list,
            pagination: {
                nextpage: resultsData.nextpage,
                prepage: resultsData.prepage,
                pages: resultsData.pages,
                total: resultsData.total,
                current: resultsData.current,
                size: resultsData.size,
                lastPage: resultsData.totalpages === resultsData.current // 是不是到最后一页了
            }
        }
    }
}

function push_pagination(resultsData) {
    return {
        nextpage: resultsData.nextpage,
        prepage: resultsData.prepage,
        pages: resultsData.pages,
        total: resultsData.total,
        current: resultsData.current,
        size: resultsData.size,
        lastPage: resultsData.totalpages === resultsData.current // 是不是到最后一页了
    }
}