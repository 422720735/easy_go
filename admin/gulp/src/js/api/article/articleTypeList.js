/**
 * 路由
 * */
const HOST = '/api'
let current = 0
const Ok = 1

function deleteArticle(id) {
    $.ajax({
        type: "post",
        async: false,
        url: HOST + `/article/type/delete`,
        data: JSON.stringify({
            id: id
        }),
        success: function (res) {
            if (res.code === Ok) {
                window.location.reload()
            } else {
                window.message.error(res)
            }
        }
    })
}