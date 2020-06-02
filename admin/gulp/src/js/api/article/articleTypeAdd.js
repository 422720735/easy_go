const HOST = '/api'
let current = 0

function addArticle() {
    const articleName = $('#articleName').val()
    const KeyWord = $('#KeyWord').val()
    const menuId = $('#menuId').val()

    // 第一步
    if (articleName && articleName !== '' && KeyWord && KeyWord !== '' && menuId && menuId !== '') {
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
        const articleName = $('#articleName').val()
        const KeyWord = $('#KeyWord').val()
        const menuId = $('#menuId').val()
        const isHotSwitch = $('#isHotSwitch').is(':checked')
        // 发送请求
        $.ajax({
            type: "post",
            async: false,
            url: HOST + `/articleType/add`,
            data: JSON.stringify({
                articleName,
                KeyWord,
                menuId,
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