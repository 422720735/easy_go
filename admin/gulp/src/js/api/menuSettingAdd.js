const HOST = '/api'
const Ok = 1


function addMenu() {
    const menuName = $('#menuName').val()
    const path = $('#path').val()
    // 第一步
    if (menuName && menuName !== '' && path && path !== '') {
        $('button.btn.validation').removeAttr('disabled')
    } else {
        $('button.btn.validation').attr('disabled', 'disabled')
    }
    $('.needs-validation').addClass('was-validated')
}

$('button.btn.validation').click(function () {
    // 获取数据
    const menuName = $('#menuName').val()
    const path = $('#path').val()
    const icon = $('#icon').val()
    const isChildSwitch = $('#isChildSwitch').is(':checked')
    const data = {
        menuName,
        path,
        icon,
        isChildSwitch
    }

    for (const key in data) {
        if (key === 'icon') {
            continue;
        }
        if (data[key] === '' || data[key] === undefined || data[key] === null) {
            (key !== 'keyword') && delete data[key]
        }
    }

    // 发送请求
    $.ajax({
        type: "post",
        async: false,
        url: HOST + `/menuSetting/add`,
        data: JSON.stringify(data),
        success: function (res) {
            if (res.code === Ok) {
                window.message.set(res)
                window.location.reload()
            } else {
                window.message.error(res)
            }
        }
    })

})