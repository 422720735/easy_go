$("#confirmbtn,#confirmbtn2,#confirmbtn3").click(function () {
    $.confirm("提示信息", "是否退出登录！");
});
$.isok = function (ok) {
    $.ajax({
        url: '/api' + '/log/out',
        method: 'Post',
        headers: {'Content-Type': 'application/json;charset=utf8', 'r': getCookie('auth')},
        success: function (res) {
            if (res.code === 1) {
                sessionStorage.setItem('out', '1')
                window.location.reload()
            }
        }
    })
}

// 获取指定名称的cookie
function getCookie(name) {
    var strcookie = document.cookie;//获取cookie字符串
    var arrcookie = strcookie.split("; ");//分割
    //遍历匹配
    for (var i = 0; i < arrcookie.length; i++) {
        var arr = arrcookie[i].split("=");
        if (arr[0] == name) {
            return arr[1];
        }
    }
    return "";
}