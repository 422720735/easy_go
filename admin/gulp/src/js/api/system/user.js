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

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}