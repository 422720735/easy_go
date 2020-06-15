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
    if (!get()) {
        handleToken((data) => {
            // data["SecretKey"]
        })
    } else {
        // 七牛云
        const token = get().secretKey

    }
}


/**
 * 1: 先查看永久存储有token？
 * 2：如果有就获取到看过期没有， 过期就执行请求token, 成功后走七牛云到存储。
 * */
function handleToken(success) {
    $.ajax({
        url: HOST + '/qn/token',
        method: 'get',
        success: function (res) {
            if (res.code === Ok) {
                set({expireTime: res.expireTime, token: res.token}, (data) => {
                    success(data)
                })
            } else {
                window.message.error(res)
            }
        }
    })
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
        const end = store['expireTime'] + 1000 * 60 *60
        if (now < end) {
            results = store
        } else {
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