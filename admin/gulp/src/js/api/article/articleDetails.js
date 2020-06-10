const HOST = '/api'
const Ok = 1

let title, type, created, update, cover, desc, keyword, isTop, hot, recommend;

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

    if (desc === undefined || desc === '' || !desc) {
        data.desc = window.text.substr(0, 54)
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

    Object.keys(data).map(item => {
        if (data[item] === undefined || data[item] === null) {
            delete data[item]
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