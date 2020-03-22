function handleValidator() {
    if ($('#register') && $('#register').length > 0) {
        const password = $('#register #password').val()
        const password2 = $('#register #password2').val()
        if (password.length >= 6 && password2.length >= 6 && (password === password2)) {
            $('#register #password').css({"border":"1px solid #dee2e6"})
            $('#register #password2').css({"border":"1px solid #dee2e6"})
            $('.btn.btn-primary.btn-block').eq(0).removeAttr('disabled')
            // 通过
        } else {
            $('#register #password').css({"border":"1px solid #e0291d"})
            $('#register #password2').css({"border":"1px solid #e0291d"})
            $('.btn.btn-primary.btn-block').eq(0).attr('disabled', 'disabled')
            // 不通过
        }
    }
}

