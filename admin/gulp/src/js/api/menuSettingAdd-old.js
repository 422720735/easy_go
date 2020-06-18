const HOST = '/api'
let current = 0

function addMenu() {
    const menuName = $('#menuName').val()
    const path = $('#path').val()
    const icon = $('#icon').val()
    // 第一步
    if (menuName && menuName !== '' && path && path !== '' && icon && icon !== '') {
        $('#next-btn').removeAttr('disabled')
    } else {
        // $('#next-btn').attr('disabled', 'disabled')
    }
}

function goPrevOfNext(type) {
    switch (type) {
        case 1:
            // 上一步
            current -= 1
            break
        case 2:
            // 下一步
            current += 1
            break
    }

    // 第二步
    if (current === 0) {
        // 上一步可以显示。
        $('#next-prev').addClass('d-none')
    } else {
        $('#next-prev').removeClass('d-none')
    }
    if (current > 1) {
        $('#next-btn').addClass('d-none')
    }

    if (current === 2) {
        // 获取数据
        const menuName = $('#menuName').val()
        const path = $('#path').val()
        const icon = $('#icon').val()
        const isChildSwitch = $('#isChildSwitch').is(':checked')
        const isHotSwitch = $('#isHotSwitch').is(':checked')
        const isRecommend = $('#isRecommend').is(':checked')
        // 发送请求
        $.ajax({
            type: "post",
            async: false,
            url: HOST + `/menuSetting/add`,
            data: JSON.stringify({
                menuName,
                path,
                icon,
                isChildSwitch,
                isHotSwitch
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
}