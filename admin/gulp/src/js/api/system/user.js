const HOST = '/api'
const Ok = 1

// 退出登陆
function logOut() {
    $.ajax({
        url: HOST + '/log/out',
        method: 'Post',
        success: function (res) {

        }
    })
}