const HOST = '/api'
const Ok = 1

// 退出登陆
function logOut() {
    $.ajax({
        url: HOST + '/log/out',
        method: 'Post',
        success: function (res) {
            if (res.code === Ok) {
                window.message.set(res)
                window.location.href = '/login'
            } else {
                window.message.error(res)
            }
        }
    })
}