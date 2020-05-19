/**
 * 路由
 * */
const HOST = '/api'
let current = 0
const Ok = 1
const Err = 0
function changeMenu(id, status) {
    $.ajax({
        type: "post",
        async: false,
        url: HOST + `/menuSetting/child`,
        data: JSON.stringify({
            id: id,
            status: status
        }),
        success: function (res) {
            if (res.code === Ok) {
                window.message.success(res)
                setTimeout(function () {
                    window.location.reload()
                }, 5000)
            } else {
                window.message.error(res)
            }
        }
    })
}

function isIssue(id, status) {
    $.ajax({
        type: "post",
        async: false,
        url: HOST + `/menuSetting/issue`,
        data: JSON.stringify({
            id: id,
            status: status
        }),
        success: function (res) {
            if (res.code === Ok) {
                window.message.success(res)
                setTimeout(function () {
                    window.location.reload()
                }, 5000)
            } else {
                window.message.error(res)
            }
        }
    })
}