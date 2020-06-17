/**
 * 路由
 * */
const HOST = '/api'
let current = 0
const Ok = 1
const Err = 0

function deleteArticle(id) {
    $.ajax({
        type: "post",
        async: false,
        url: HOST + `/article/delete`,
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