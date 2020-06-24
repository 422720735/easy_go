$(function() {
    $('#switch_qlogin').click(function() {
        $('#switch_login').removeClass("switch_btn_focus").addClass('switch_btn');
        $('#switch_qlogin').removeClass("switch_btn").addClass('switch_btn_focus');
        $('#switch_bottom').animate({
            left: '0px',
            width: '70px'
        });
        $('#qlogin').css('display', 'none');
        $('#web_qr_login').css('display', 'block');
    });
    $('#switch_login').click(function() {
        $('#switch_login').removeClass("switch_btn").addClass('switch_btn_focus');
        $('#switch_qlogin').removeClass("switch_btn_focus").addClass('switch_btn');
        $('#switch_bottom').animate({
            left: '154px',
            width: '70px'
        });
        $('#qlogin').css('display', 'block');
        $('#web_qr_login').css('display', 'none');
    });
    if (getParam("a") == '0') {
        $('#switch_login').trigger('click');
    }
});
function logintab() {
    scrollTo(0);
    $('#switch_qlogin').removeClass("switch_btn_focus").addClass('switch_btn');
    $('#switch_login').removeClass("switch_btn").addClass('switch_btn_focus');
    $('#switch_bottom').animate({
        left: '154px',
        width: '96px'
    });
    $('#qlogin').css('display', 'none');
    $('#web_qr_login').css('display', 'block');
}
function getParam(pname) {
    var params = location.search.substr(1);
    var ArrParam = params.split('&');
    if (ArrParam.length == 1) {
        return params.split('=')[1];
    } else {
        for (var i = 0; i < ArrParam.length; i++) {
            if (ArrParam[i].split('=')[0] == pname) {
                return ArrParam[i].split('=')[1];
            }
        }
    }
}
var pwdmin = 6;
$(document).ready(function() {
    $('#reg').click(function() {
        if ($('#user').val() == "") {
            $('#user').focus().css({
                border: "1px solid red",
                boxShadow: "0 0 2px red"
            });
            $('#userCue').html("<font color='red'><b>×用户名不能为空</b></font>");
            return false;
        }
        if ($('#user').val().length < 4 || $('#user').val().length > 16) {
            $('#user').focus().css({
                border: "1px solid red",
                boxShadow: "0 0 2px red"
            });
            $('#userCue').html("<font color='red'><b>×用户名位4-16字符</b></font>");
            return false;
        }
        if ($('#passwd').val().length < pwdmin) {
            $('#passwd').focus();
            $('#userCue').html("<font color='red'><b>×密码不能小于" + pwdmin + "位</b></font>");
            return false;
        }
        if ($('#passwd2').val() != $('#passwd').val()) {
            $('#passwd2').focus();
            $('#userCue').html("<font color='red'><b>×两次密码不一致！</b></font>");
            return false;
        }
        var sqq = /^[1-9]{1}[0-9]{4,9}$/;
        if (!sqq.test($('#qq').val()) || $('#qq').val().length < 5 || $('#qq').val().length > 12) {
            $('#qq').focus().css({
                border: "1px solid red",
                boxShadow: "0 0 2px red"
            });
            $('#userCue').html("<font color='red'><b>×QQ号码格式不正确</b></font>");
            return false;
        } else {
            $('#qq').css({
                border: "1px solid #D7D7D7",
                boxShadow: "none"
            });
        }
        $('#regUser').submit();
    });
});
