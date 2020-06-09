const HOST = '/api'
const Ok = 1

window.onload = function () {

}

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
    cover = $('.cupload-image-box input').val()
    keyword = $('#keyword').val()
    isTop = $('#is-top').prop("checked")
    isTop = $('#hot').prop("checked")
    recommend = $('#recommend').prop("checked")
}
 function save(bool = false) {
    articleItemValue()
    const data = {
        title,
        created,
        update,
        content: window.content,
        cover,
        desc,
        keyword,
        isTop,
        hot,
        recommend,
        bool
    }
    if (type && Array.isArray(type) && type.length === 1) {
        data['menuId'] = type[0]
    }
    if (type && Array.isArray(type) && type.length === 2) {
        data['menuId'] = type[0]
        data['categoryId'] = type[1]
    }

     Object.keys(data).map(item => {
         if (data[item] === '' || data[item] === undefined || data[item] === null) {
             delete data[item]
         }
     })

    $.ajax({
        url: HOST + '/article/details/add',
        data: JSON.stringify(data),
        method: 'POST',
        success: function (res) {
            // if (res.code === Ok) {
            //     window.message.success(res)
            //     setTimeout(function () {
            //         window.location.href = '/login'
            //     }, 5000)
            // } else {
            //     window.message.error(res)
            // }
        }
    })
}
