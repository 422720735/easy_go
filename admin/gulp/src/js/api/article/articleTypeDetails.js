const HOST = '/api'
const Ok = 1

if (window.location.search && window.location.search !== '') {
    // 请求数据
    const id = getQueryVariable('id')
    if (id !== false) {
        $.ajax({
            type: "Get",
            url: HOST + `/article/type/details?id=` + id,
            success: function (res) {
                if (res.code === Ok) {
                    const {article_name, key_word, menu_id} = res.data
                    $('#articleName').val(article_name)
                    $('#KeyWord').val(key_word)
                    $('#menuId').val(menu_id)

                    if (article_name && key_word && menu_id) {
                        $('button.btn.validation').removeAttr('disabled')
                    }
                } else {
                    window.message.error(res)
                }
            }
        })
    }
}

function addArticle() {
    const articleName = $('#articleName').val()
    const KeyWord = $('#KeyWord').val()
    const menuId = $('#menuId').val()

    // 第一步
    if (articleName && articleName !== '' && KeyWord && KeyWord !== '' && menuId && menuId !== '') {
        $('button.btn.validation').removeAttr('disabled')
    } else {
        $('button.btn.validation').attr('disabled', 'disabled')
    }
    $('.needs-validation').addClass('was-validated')
}

$('button.btn.validation').click(function () {
    const articleName = $('#articleName').val()
    const KeyWord = $('#KeyWord').val()
    const menuId = $('#menuId').val()
    const id = getQueryVariable('id')
    if (window.location.search && window.location.search !== '' && id) {
        $.ajax({
            type: "Put",
            async: false,
            url: HOST + `/article/type/details`,
            data: JSON.stringify({
                articleName,
                KeyWord,
                menuId,
                id
            }),
            success: function (res) {
                if (res.code === Ok) {
                    window.message.set(res)
                    window.location.reload()
                } else {
                    window.message.error(res)
                }
            }
        })
    } else {
        $.ajax({
            type: "Post",
            async: false,
            url: HOST + `/article/type/details`,
            data: JSON.stringify({
                articleName,
                KeyWord,
                menuId
            }),
            success: function (res) {
                if (res.code === Ok) {
                    window.message.set(res)
                    window.location.reload()
                } else {
                    window.message.error(res)
                }
            }
        })
    }

})
