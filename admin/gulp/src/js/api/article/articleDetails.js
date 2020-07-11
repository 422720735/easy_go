const HOST = '/api'
const ASSETS = 'http://assets.cdbob.cn/'
const Ok = 1

let selectType = $('#article-type')[0]
let availableTags = []
for (let i = 0; i < selectType.length; i++) {
    availableTags.push(selectType[i].innerText)
}
// tags标记中预加载数据，数据来自menu+articleType
$("#articleTags").tagit({
    availableTags: availableTags
});

let title, type, created, update, cover, desc, tags, keyword, isTop, hot, recommend;
let coverStr, id

// 文章内容挂载到文章详情上面。
let content
if (window.location.search && window.location.search !== '') {
    // 请求数据
    const id = getQueryVariable('id')
    if (id !== false) {
        $.ajax({
            url: HOST + '/article/details?id=' + id,
            method: 'Get',
            success: function (res) {
                if (res.code === Ok) {
                    setValue(res.data)
                } else {
                    window.message.error(res)
                }
            }
        })
    }
} else {
    cupload()
}

function setValue(data) {
    const {title, menu_id, category_id, created_time, update_time, view, content, cover, desc, tags, keyword, top_id, hot, recommend} = data

    id = data.id

    $('#article-title').val(title)

    if (category_id && category_id !== '') {
        let opt = []
        opt.push(menu_id)
        opt.push(category_id)
        $("#article-type").val(opt.join(','))
    } else {
        $("#article-type").val(menu_id)
    }

    $('#article-created').val(moment(created_time).format('YYYY-MM-DD HH:mm:ss'))

    if (update_time) {
        $('#article-update').val(moment(update_time).format('YYYY-MM-DD HH:mm:ss'))
    }

    $('#article-view').val(view)

    if ((window.location.pathname.indexOf('markdown') === -1)) {
        window.editor.txt.html(content)
    }

    window.content = content

    $('#article-desc').val(desc)

    if (cover && cover !== '') {
        coverStr = cover
        cupload(cover)
    } else {
        cupload()
    }

    /**
     * 添加标签
     * */
    if (tags && tags !== '') {
        const tag = tags.split(',')
        let str = ''
        tag.forEach(item => {
            str += '<li class="tagit-choice ui-widget-content ui-state-default ui-corner-all tagit-choice-editable"><span class="tagit-label">' + item + '</span><a class="tagit-close"><span class="text-icon">×</span><span class="ui-icon ui-icon-close"></span></a><input type="hidden" value="11" name="tags" class="tagit-hidden-field"></li>'
        })
        $('#articleTags').prepend(str)
    }

    if (keyword && keyword !== '') {
        $('#keyword').val(keyword)
    }

    if (top_id === data.id) {
        $('#is-top').prop('checked', true)
    }

    $('#hot').prop('checked', hot)
    $('#recommend').prop('checked', recommend)
}


/**
 * js原生图片上传
 * */
function cupload(cover) {
    cuploadCreate = new Cupload({
        ele: '#cupload',
        num: 1,
        width: 160, // 预览框的宽,单位为px,非必需,默认为148
        height: 114, // 预览框的高,单位为px,非必需,默认为148
        data: cover ? [ASSETS + cover] : null
    });
}

function articleItemValue() {
    title = $('#article-title').val()

    if ($('#article-type').val() && $('#article-type').val() !== "") {
        type = $('#article-type').val().split(',').map(item => Number(item))
    }
    created = $('#article-created').val()
    update = $('#article-update').val()
    desc = $('#article-desc').val()
    if (desc && typeof desc === 'string' && desc !== '' && desc.length > 200) {
        desc = desc.substr(0, 200)
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
                Tags.push($(TagHtml[i]).find('.tagit-label')[0].innerText.toLowerCase())
            }
        }
    }

    if (Tags.length === 0) {
        Tags = ''
    } else {
        Tags = Tags.join(',')
    }

    if (cover && window.qiniuyun) {
        // 走七牛云接口
        if (!get()) {
            const results = handleToken()
            if (results && Object.keys(results).length === 2) {
                const token = results.secretKey
                coverStr = getTokenUrl($('.cupload-image-list li input[type="hidden"]').val(), token)
            }
        } else {
            const token = get().secretKey
            coverStr = getTokenUrl($('.cupload-image-list li input[type="hidden"]').val(), token)
        }
    }

    const data = {
        title,
        created,
        update,
        content: window.content,
        cover: coverStr,
        desc,
        keyword: keyword ? keyword : '',
        isTop: isTop ? isTop : false,
        hot: hot ? hot : false,
        recommend: recommend ? recommend : false,
        prod,
        markdown: !(window.location.pathname.indexOf('markdown') == -1)
    }

    if (id) {
        data.id = id
    }

    if (Tags !== '') {
        data.tags = Tags
    }

    if (desc === undefined || desc === '' || !desc) {
        data.desc = window.text ? window.text.substr(0, 200) : null
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
    saveArticle(data)
}

function saveArticle(data) {
    $.ajax({
        url: HOST + '/article/details',
        data: JSON.stringify(data),
        method: data.id ? 'Put' : 'POST',
        success: function (res) {
            if (res.code === Ok) {
                if (data.id) {
                    window.message.set(res)
                    window.location.reload()
                } else {
                    window.message.set(res)
                    window.location.href = "/article/list?page=1"
                }
            } else {
                window.message.error(res)
            }
        }
    })
}

function remove() {
    if (cover) {
        window.qiniuyun = null
    }
    id = null
    title = null
    data = null
    type = null
    created = null
    update = null
    cover = null
    desc = null
    tags = null
    keyword = null
    isTop = null
    hot = null
    recommend = null
    coverStr = null
    window.content = null
    window.text = null


}

/**
 * 数据保存
 * */
/**
 * 七牛云图片请求
 * */
function getTokenUrl(base, token) {
    let src;
    let size = window.qiniuyun.size
    let name = window.btoa("0612_" + new Date().getTime() + "_" + parseInt(Math.random() * 10))
    let pic = base.split("base64,")[1];  //七牛云需要接受的参数是  base64， 后面的值 所以我把它截取了
    let url = 'http://up-z2.qiniup.com/putb64/' + size + "/key/" + name;  //  我这个是华南地区的   要根据仓库选择url   这个是官方的  https://developer.qiniu.com/kodo/kb/1326/how-to-upload-photos-to-seven-niuyun-base64-code
    $.ajax({
        url: url,
        type: 'POST',
        async: false,  //  这里我使用同步的方式是为了把得到的src返回出去
        beforeSend(request) { // 请求之前设置请求头
            request.setRequestHeader('Content-Type', 'application/octet-stream');
            request.setRequestHeader('Authorization', 'UpToken ' + token)   // token服务端请求
        },
        data: pic,
        success: function (data) {
            src = data.key
        },
        error: function (e) {
            window.message.error('上传封面失败')
            localStorage.removeItem('localStorage')
        }
    });
    return src
}


/**
 * 1: 先查看永久存储有token？
 * 2：如果有就获取到看过期没有， 过期就执行请求token, 成功后走七牛云到存储。
 * */
function handleToken() {
    let data
    $.ajax({
        url: HOST + '/qn/token',
        method: 'get',
        async: false,
        success: function (res) {
            if (res.code === Ok) {
                set({expireTime: res.expireTime, token: res.token}, (d) => {
                    data = d
                })
            } else {
                window.message.error(res)
            }
        }
    })
    return data
}


function set(data, success, error) {
    if (data && Object.keys(data).length === 2) {
        let option = {}
        option['expireTime'] = data['expireTime']
        option['secretKey'] = data['token']
        localStorage.setItem('localStorage', JSON.stringify(option))
        success && success(option)
    } else {
        error && error()
    }
}

function get() {
    let store = localStorage.getItem('localStorage'), results

    if (store && isJSON(store)) {
        store = JSON.parse(store)
    } else {
        return null
    }


    if (Object.keys(store).length === 2) {
        const now = new Date().getTime()
        const end = store['expireTime'] + 1000 * 60 * 60
        if (now < end) {
            results = store
        } else {
            localStorage.removeItem('localStorage')
            return null
        }
    }

    return results
}

function isJSON(str) {
    if (typeof str == 'string') {
        try {
            JSON.parse(str)
            return true
        } catch (e) {
            return false
        }
    }
}