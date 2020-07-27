/*****************************************************
 简单实用的jQuery提示框美化插件(支持alert、confirm和toast)
 版本：V1.0
 开发：www.fytxsoft.com
 ******************************************************/
var _fytx_toast_box="";
var _fytx_toast_background="";
var _fytx_toast_time=0;
function Fytx_Tips(){
    var _this=this;
    _fytx_toast_background=$('<div class="fytx_toast_background"></div>');
    _this.Fytx_alert=function(obj)
    {
        if($("div").is(".fytx_alert_background")) $('.fytx_alert_background').remove();
        var _fytx_alert_background='<div class="fytx_alert_background"><div class="fytx_alert_box">'+'<div class="fytx_alert_title">'+obj.title+'</div>'+'<div class="fytx_alert_message">'+obj.message+'</div>'+'<span class="fytx_alert_btn">确定</span>'+'</div></div>';
        $('body').append(_fytx_alert_background);
        if(_fytx_alert_bg!="")
        {
            var fytx_bgcolor=$.hextorgb(_fytx_alert_bgcolor);
            $('.fytx_alert_background').css("background","rgb("+fytx_bgcolor+","+_fytx_alert_bg+")");
        }
        if(_fytx_alert_box_bgcolor!="") $('.fytx_alert_box').css("background-color",_fytx_alert_box_bgcolor);
        if(_fytx_alert_title_color!="") $('.fytx_alert_title').css("color",_fytx_alert_title_color);
        if(_fytx_alert_titleline_color!="") $('.fytx_alert_title').css("border-bottom",_fytx_alert_titleline_color+" 1px solid");
        if(_fytx_alert_message_color!="") $('.fytx_alert_message').css("color",_fytx_alert_message_color);
        if(_fytx_alert_btn_bgcolor!="") $('.fytx_alert_btn').css("background-color",_fytx_alert_btn_bgcolor);
        if(_fytx_alert_btn_color!="") $('.fytx_alert_btn').css("color",_fytx_alert_btn_color);
    }
    _this.Fytx_confirm=function(obj)
    {
        if($("div").is(".fytx_confirm_background")) $('.fytx_confirm_background').remove();
        var _fytx_confirm_background='<div class="fytx_confirm_background"><div class="fytx_confirm_box"><div class="fytx_confirm_title">'+obj.title+'</div><div class="fytx_confirm_message">'+obj.message+'</div><span class="fytx_confirm_okbtn">确定</span><span class="fytx_confirm_cancelbtn">取消</span></div></div>';
        $('body').append(_fytx_confirm_background);
        if(_fytx_confirm_bg!="")
        {
            var fytx_bgcolor=$.hextorgb(_fytx_confirm_bgcolor);
            $('.fytx_confirm_background').css("background","rgb("+fytx_bgcolor+","+_fytx_confirm_bg+")");
        }
        if(_fytx_confirm_box_bgcolor!="") $('.fytx_confirm_box').css("background-color",_fytx_confirm_box_bgcolor);
        if(_fytx_confirm_title_color!="") $('.fytx_confirm_title').css("color",_fytx_confirm_title_color);
        if(_fytx_confirm_titleline_color!="") $('.fytx_confirm_title').css("border-bottom",_fytx_confirm_titleline_color+" 1px solid");
        if(_fytx_confirm_message_color!="") $('.fytx_confirm_message').css("color",_fytx_confirm_message_color);
        if(_fytx_confirm_okbtn_bgcolor!="") $('.fytx_confirm_okbtn').css("background-color",_fytx_confirm_okbtn_bgcolor);
        if(_fytx_confirm_okbtn_color!="") $('.fytx_confirm_okbtn').css("color",_fytx_confirm_okbtn_color);
        if(_fytx_confirm_cancelbtn_bgcolor!="") $('.fytx_confirm_cancelbtn').css("background-color",_fytx_confirm_cancelbtn_bgcolor);
        if(_fytx_confirm_cancelbtn_color!="") $('.fytx_confirm_cancelbtn').css("color",_fytx_confirm_cancelbtn_color);
    },
        _this.Fytx_toast=function(mes,time){
            if(!_fytx_toast_background.is(':hidden')) _fytx_toast_box.remove();
            _fytx_toast_box=$('<div class="fytx_toast_box">'+mes+'</div>');
            _fytx_toast_background.append(_fytx_toast_box);
            $('body').append(_fytx_toast_background);
            _fytx_toast_box.css({'marginTop':-_fytx_toast_box.outerHeight()/2+'px'});
            if(_fytx_toast_bg!="")
            {
                var fytx_bgcolor=$.hextorgb(_fytx_toast_bgcolor);
                $('.fytx_toast_background').css("background","rgb("+fytx_bgcolor+","+_fytx_toast_bg+")");
            }
            if(_fytx_toast_box_bg!="")
            {
                var fytx_bgcolors=$.hextorgb(_fytx_toast_box_bgcolor);
                $('.fytx_toast_box').css("background","rgb("+fytx_bgcolors+","+_fytx_toast_box_bg+")");
            }
            if(_fytx_toast_color!="") $('.fytx_toast_box').css("color",_fytx_toast_color);
            if(time>0){
                var Etimer=null;
                clearInterval(Etimer);
                _fytx_toast_time=time;
                Etimer=setInterval(function(){
                    _fytx_toast_time--;
                    if(_fytx_toast_time<=0){
                        clearInterval(Etimer);
                        _fytx_toast_background.remove();
                        _fytx_toast_box.remove();
                    }
                },1000);
            }
        },
        _this.Fytx_removetoast=function(){
            _fytx_toast_background.remove();
            _fytx_toast_box.remove();
        },
        $("body").on("click",".fytx_toast_box",function(){
            if(_fytx_toast_time>0 && _fytx_toast_close){
                _fytx_toast_background.remove();
                _fytx_toast_box.remove();
                _fytx_toast_time=0;
            }
        });
}
$(document).ready(function(){
    var _fytx_confirm_isokstr="";
    var _fytx_confirm_iscancelstr="";
    var Fytx = new Fytx_Tips();
    $.alert=function(title,msg){
        Fytx.Fytx_alert({
            title:title, message:msg
        })
    },
        $("body").on("click",".fytx_alert_btn",function(){$(".fytx_alert_background").hide();});
    $.confirm=function(title,msg,isokstr,iscancelstr){
        _fytx_confirm_isokstr = arguments[2] ? arguments[2] : "";
        _fytx_confirm_iscancelstr = arguments[3] ? arguments[3] : "";
        Fytx.Fytx_confirm({title:title, message:msg});
    },
        $("body").on("click",".fytx_confirm_okbtn",function(){
            $(".fytx_confirm_background").hide();
            if(typeof $.isok === "function") {
                if(_fytx_confirm_isokstr==""){
                    $.isok();
                }else{
                    $.isok(_fytx_confirm_isokstr);
                }
            }
        });
    $("body").on("click",".fytx_confirm_cancelbtn",function(){
        $(".fytx_confirm_background").hide();
        if(typeof $.iscancel === "function") {
            if(_fytx_confirm_iscancelstr==""){
                $.iscancel();
            }else{
                $.iscancel(_fytx_confirm_iscancelstr);
            }
        }
    });
    $.toast=function(msg,time,state){
        time = arguments[1] ? arguments[1] : ((arguments[1]==0)?0:3);
        state = arguments[2] ? arguments[2] : ((arguments[2]==0)?0:undefined);
        if(state!=undefined)
        {
            if(state==1)
            {
                _fytx_toast_close=true;
            }
            else if(state==0){
                _fytx_toast_close=false;
            }
            else
            {
                _fytx_toast_close=state;
            }
        }
        Fytx.Fytx_toast(msg,time);
    },
        $.removetoast=function(){
            Fytx.Fytx_removetoast();
        }
    $.hextorgb = function (str) {
        if(str!="")
        {
            str = str.replace("#","");
            if(str.length==3) str=str.substr(0,1)+str.substr(0,1)+str.substr(1,1)+str.substr(1,1)+str.substr(2,1)+str.substr(2,1);
            var hex = str.match(/../g);
            for (var i = 0; i < 3; i++) hex[i] = parseInt(hex[i], 16);
            return hex;
        }
        else
        {
            return "0,0,0";
        }
    }
});