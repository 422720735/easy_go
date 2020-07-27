/*****************************************************
 简单实用的jQuery提示框美化插件(支持alert、confirm和toast)
 版本：V1.0
 开发：www.fytxsoft.com
 ******************************************************/
var _fytx_alert_bg=0.3;                         //页面背景遮挡层的透明度
var _fytx_alert_bgcolor="#000000";              //页面背景遮挡层的颜色
var _fytx_alert_box_bgcolor="#ffffff";          //alert弹出框颜色
var _fytx_alert_title_color="#333333";          //alert标题颜色
var _fytx_alert_titleline_color="#3475f5";      //alert标题下分隔线颜色
var _fytx_alert_message_color="#333333";        //alert提示信息颜色
var _fytx_alert_btn_color="#ffffff";            //alert按钮字体颜色
var _fytx_alert_btn_bgcolor="#3475f5";          //alert按钮背景颜色
var _fytx_confirm_bg=0.3;                       //页面背景遮挡层的透明度
var _fytx_confirm_bgcolor="#000000";            //页面背景遮挡层的颜色
var _fytx_confirm_box_bgcolor="#ffffff";        //confirm弹出框颜色
var _fytx_confirm_title_color="#333333";        //confirm标题颜色
var _fytx_confirm_titleline_color="#3475f5";    //confirm标题下分隔线颜色
var _fytx_confirm_message_color="#333333";      //confirm提示信息颜色
var _fytx_confirm_okbtn_color="#ffffff";        //confirm确定按钮字体颜色
var _fytx_confirm_okbtn_bgcolor="#3475f5";      //confirm确定按钮背景颜色
var _fytx_confirm_cancelbtn_color="#333333";    //confirm取消按钮字体颜色
var _fytx_confirm_cancelbtn_bgcolor="#ffffff";  //confirm取消按钮背景颜色
var _fytx_toast_bg=0.3;                 //页面背景遮挡层的透明度
var _fytx_toast_bgcolor="#000000";      //页面背景遮挡层的颜色
var _fytx_toast_box_bg=0.5;             //Toast框的透明度
var _fytx_toast_box_bgcolor="#000000";  //Toast弹出框颜色
var _fytx_toast_color="#ffffff";        //Toast字体颜色
var _fytx_toast_close=true;             //Toast框不设置自动关闭时间时，是否允许点击关闭（true允许，flase不允许）