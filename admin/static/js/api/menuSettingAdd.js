var HOST = '/api';
var current = 0;

function addMenu() {
    var menuName = $('#menuName').val();
    var path = $('#path').val();
    var icon = $('#icon').val();
    // 第一步
    if (menuName && menuName !== '' && path && path !== '' && icon && icon !== '') {
        $('#next-btn').removeAttr('disabled');
    } else {
        // $('#next-btn').attr('disabled', 'disabled')
    }
}

function goPrevOfNext(type) {
    switch (type) {
        case 1:
            // 上一步
            current -= 1;
            break;
        case 2:
            // 下一步
            current += 1;
            break;
    }

    // 第二步
    if (current === 0) {
        // 上一步可以显示。
        $('#next-prev').addClass('d-none');
    } else {
        $('#next-prev').removeClass('d-none');
    }
    if (current > 1) {
        $('#next-btn').addClass('d-none');
    }

    if (current === 2) {
        // 获取数据
        var menuName = $('#menuName').val();
        var path = $('#path').val();
        var icon = $('#icon').val();
        var isChildSwitch = $('#isChildSwitch').is(':checked');
        var isHotSwitch = $('#isHotSwitch').is(':checked');
        // 发送请求
        $.ajax({
            type: "post",
            async: false,
            url: HOST + '/menuSetting/add',
            data: JSON.stringify({
                menuName: menuName,
                path: path,
                icon: icon,
                isChildSwitch: isChildSwitch,
                isHotSwitch: isHotSwitch
            }),
            success: function success(res) {
                if (res.code === Ok) {
                    window.message.success(res);
                    setTimeout(function () {
                        window.location.reload();
                    }, 5000);
                } else {
                    window.message.error(res);
                }
            }
        });
    }
}