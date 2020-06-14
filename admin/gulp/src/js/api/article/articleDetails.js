const HOST = '/api'
const Ok = 1

let title, type, created, update, cover, desc, tags, keyword, isTop, hot, recommend;

// 文章内容挂载到文章详情上面。
let content = window.content

function articleItemValue() {
    title = $('#article-title').val()

    if ($('#article-type').val() && $('#article-type').val() !== "") {
        type = $('#article-type').val().split(',').map(item => Number(item))
    }
    created = $('#article-created').val()
    update = $('#article-update').val()
    desc = $('#article-desc').val()
    if (desc && typeof desc === 'string' && desc !== '' && desc.length > 54) {
        desc = desc.substr(0, 54)
    }
    cover = $('.cupload-image-box input').val()
    keyword = $('#keyword').val()
    isTop = $('#is-top').prop("checked")
    hot = $('#hot').prop("checked")
    recommend = $('#recommend').prop("checked")
}

function save(prod = false) {
    articleItemValue()

    /**
     * 标签
     * */
    const TagHtml = $('#articleTags li')
    let Tags = []
    for (var i = 0; i < TagHtml.length; i++) {
        if ($(TagHtml[i]).find('.tagit-label') && $(TagHtml[i]).find('span.tagit-label').length > 0) {
            if ($(TagHtml[i]).find('.tagit-label')[0].innerText &&
                $(TagHtml[i]).find('.tagit-label')[0].innerText !== '' &&
                typeof $(TagHtml[i]).find('.tagit-label')[0].innerText === 'string'
            ) {
                Tags.push($(TagHtml[i]).find('.tagit-label')[0].innerText)
            }
        }
    }

    if (Tags.length === 0) Tags = ''
    else Tags.join(',')

    const data = {
        title,
        created,
        update,
        content: window.content,
        cover,
        desc,
        keyword: keyword ? keyword : '',
        isTop: isTop ? isTop : false,
        hot: hot ? hot : false,
        recommend: recommend ? recommend : false,
        prod
    }

    if (Tags !== '') {
        data.Tags = Tags
    }

    if (desc === undefined || desc === '' || !desc) {
        data.desc = window.text ? window.text.substr(0, 54) : null
    }

    if (type && Array.isArray(type) && type.length === 1) {
        data['menuId'] = type[0]

        // 没有文章类型的时候我们传递个-1满足接口不报错。
        data['categoryId'] = -1
    }

    if (type && Array.isArray(type) && type.length === 2) {
        data['menuId'] = type[0]
        data['categoryId'] = type[1]
    }

    Object.keys(data).map(key => {
        if (data[key] === '' || data[key] === undefined || data[key] === null) {
            (key !== 'keyword') && delete data[key]
        }
    })



    $.ajax({
        url: HOST + '/article/details/add',
        data: JSON.stringify(data),
        method: 'POST',
        success: function (res) {
            if (res.code === Ok) {
                // window.message.success(res)
                // setTimeout(function () {
                //     window.location.href = '/login'
                // }, 5000)
            } else {
                window.message.error(res)
            }
        }
    })
}


/**
 * 1: 先查看永久存储有token？
 * 2：如果有就获取到看过期没有， 过期就执行请求token, 成功后走七牛云到存储。
 * */