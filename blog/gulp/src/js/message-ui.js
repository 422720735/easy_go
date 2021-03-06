var message = new MyMessage.message({
    /*默认参数，下面为默认项*/
    iconFontSize: "20px", //图标大小,默认为20px
    messageFontSize: "12px", //信息字体大小,默认为12px
    showTime: 3000, //消失时间,默认为3000
    align: "center", //显示的位置类型center,right,left
    positions: { //放置信息距离周边的距离,默认为10px
        top: "10px",
        bottom: "10px",
        right: "10px",
        left: "10px"
    },
    message: "这是一条消息", //消息内容,默认为"这是一条消息"
    type: "normal", //消息的类型，还有success,error,warning等，默认为normal
});
/*两种不同的设置方式*/
message.setting({
    align: "bottom" //会覆盖前面的所有设置,可以创建不同的对象去避免覆盖
});
message.setting("showTime", "3000");
window.Msg = message
class Message {
    static success(d) {
        if (Object.prototype.toString.call(d) === '[object Object]') {
            window.Msg.add(d.data, "success")
        } else {
            window.Msg.add(d, "success")
        }
    }

    static warning(d) {
        if (Object.prototype.toString.call(d) === '[object Object]') {
            window.Msg.add(d.data, "warning")
        } else {
            window.Msg.add(d, "warning")
        }
    }

    static error(d) {
        if (Object.prototype.toString.call(d) === '[object Object]') {
            window.Msg.add(d.data, "error")
        } else {
            window.Msg.add(d, "error")
        }
    }

    static info(d) {
        if (Object.prototype.toString.call(d) === '[object Object]') {
            window.Msg.add(d.data);
        } else {
            window.Msg.add(d);
        }
    }

    static set(res) {
        if (!res || Object.keys(res).length === 0 || !res.code) {
            window.Msg.add('数据不合法', 'error')
        } else {
            sessionStorage.setItem('msg', JSON.stringify(res))
        }
    }

    static get() {
        if (sessionStorage.getItem('msg')) {
            return JSON.parse(sessionStorage.getItem('msg'))
        }
    }

    static remove() {
        sessionStorage.removeItem('msg')
    }
}
window.message = Message

let msg = sessionStorage.getItem('msg')
if (msg && isJSON(msg)) {
    msg = JSON.parse(msg)
    if (msg.code === 1) {
        window.message.success(msg)
        window.message.remove()
    } else if (msg.code === 0) {
        window.Msg.add(msg.data, 'error')
    }
}

function isJSON(str) {
    if (typeof str == 'string') {
        try {
            JSON.parse(str)
            return true
        } catch (e) {
            return false
        }
    }
}