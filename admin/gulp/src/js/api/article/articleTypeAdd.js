const HOST = '/api'
const Ok = 1

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

    $.ajax({
        type: "post",
        async: false,
        url: HOST + `/articleType/add`,
        data: JSON.stringify({
            articleName,
            KeyWord,
            menuId
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
})
