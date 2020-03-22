/**
 * 支持浏览器:IE8+
 * */
var MyMessage = (function() {
	function message(setting) {
		//合并默认参数
		this.messageContainer = null;
		this.opts = null;
		this._setting(setting);
		this.init();
	}

	/*默认参数*/
	message.DEFAULTS = {
		iconFontSize: "20px", //图标大小
		messageFontSize: "12px", //信息字体大小
		showTime: 3000, //消失时间
		align: "center", //显示的位置
		positions: { //放置信息的范围
			top: "10px",
			bottom: "10px",
			right: "10px",
			left: "10px"
		},
		message: "这是一条消息", //消息内容
		type: "normal", //消息的类型，还有success,error,warning等
	}
	/*设置消息的参数*/
	message.prototype._setting = function(setting) {
		this.opts = $.extend({}, message.DEFAULTS, setting);
	}
	message.prototype.setting = function(name, val) {
		if("object" === typeof name) {
			for(var k in name) {
				this.opts[k] = name[k]
			}
		} else if("string" === typeof name) {
			this.opts[name] = val;
		}
	}
	/*
	 用于添加相应的dom到body标签中
	 * */
	message.prototype.init = function() {
		var domStr = "<div class='m-message' style='top:" +
			this.opts.positions.top +
			";right:" +
			this.opts.positions.right +
			";left:" +
			this.opts.positions.left +
			";width:calc(100%-" +
			this.opts.positions.right +
			this.opts.positions.left +
			");bottom:" + this.opts.positions.bottom +
			"'></div>"
		this.messageContainer = $(domStr);
		this.messageContainer.appendTo($('body'))
	}
	/*
	 用于添加消息到相应的标签中
	 message:具体的消息
	 type:消息的类型
	 * */
	message.prototype.add = function(message, type) {
		var domStr = "";
		type = type || this.opts.type;
		domStr += "<div class='c-message-notice' style='" +
			"text-align:" +
			this.opts.align +
			";'><div class='m_content'><i class='";
		switch(type) {
			case "normal":
				domStr += "icon-bubble";
				break;
			case "success":
				domStr += "icon-check-alt";
				break;
			case "error":
				domStr += "icon-cancel-circle";
				break;
			case "warning":
				domStr += "icon-notification";
				break;
			default:
				throw "传递的参数type错误，请传递normal/success/error/warning中的一种";
				break;
		}
		domStr += "' style='font-size:" +
			this.opts.iconFontSize +
			";'></i><span style='font-size:" +
			this.opts.messageFontSize +
			";'>" + message + "</span></div></div>";
		var $domStr = $(domStr).appendTo(this.messageContainer);
		this._hide($domStr);
	}
	/**
	 * 隐藏消息
	 * $domStr：该消息的jq对象
	 * */
	message.prototype._hide = function($domStr) {
		setTimeout(function() {
			$domStr.fadeOut(1000);
		}, this.opts.showTime);
	}
	return {
		message: message /*对外提供的接口*/
	}
})();