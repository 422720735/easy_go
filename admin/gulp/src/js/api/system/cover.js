const HOST = '/api'
const ASSETS = 'http://qbv39uqsg.bkt.clouddn.com/'
const Ok = 1
let img_src = []

/**
 * 请求token，完成数据请求。
 * */
function uploadCovers() {
    if (!get()) {
        const results = handleToken()
        if (results && Object.keys(results).length === 2) {
            qnMultiple(results.secretKey)
        }
    } else {
        const token = get().secretKey
        qnMultiple(token)
    }
}

/**
 * 七牛云多图上传
 * */
function qnMultiple(token) {
    if ($('#cupload-tailor > .li-img').length === 0) {
        window.message.error('当前没有可选择上传的图片')
    } else {
        // 获取所有的base64
        const len = document.querySelectorAll('#cupload-tailor .li-img').length
        let upLoad = []
        /**
         * 编辑裁剪后的数据，得到每个base url 和 大小
         * */
        for (let i = 0; i < len; i++) {
            const el = $('#cupload-tailor .li-img').eq(i).find('img')
            const src = el[0].src
            const size = el.attr('data-size')
            const item = {
                size: size,
                pic: src.split("base64,")[1],
                name: window.btoa("0612_" + new Date().getTime() + "_" + parseInt(Math.random() * 10))
            }
            upLoad.push(item)
        }
        upLoad.length > 0 && func_digui(upLoad, upLoad.length, token)
    }
}

/**
 * ajax 递归请求数据，并在最后一个请求完成后。我们走自己的上传接口数据
 * */
function func_digui(arry, len, token) {
    var temp
    try {
        for (let i = 0; i < len; i++) {
            if (i === 0) {
                temp = Object.assign({}, arry[0])
                arry.splice(i, 1);
                const {size, name, pic} = temp
                const url = 'http://up-z2.qiniup.com/putb64/' + size + "/key/" + name;  //  我这个是华南地区的   要根据仓库选择url   这个是官方的  https://developer.qiniu.com/kodo/kb/1326/how-to-upload-photos-to-seven-niuyun-base64-code
                if (size && name && pic) {
                    $.ajax({
                        url: url,
                        type: 'POST',
                        beforeSend(request) { // 请求之前设置请求头
                            request.setRequestHeader('Content-Type', 'application/octet-stream');
                            request.setRequestHeader('Authorization', 'UpToken ' + token)   // token服务端请求
                        },
                        data: pic,
                        success: function (data) {
                            // src = data.key
                            if (data.key) {
                                img_src.push(data.key)
                                func_digui(arry, len, token)
                            } else return
                        },
                        error: function (e) {
                            console.log(e)
                            window.message.error('上传封面背景失败')
                            localStorage.removeItem('localStorage')
                        }
                    });
                }
            }
        }
    } catch (e) {
        console.log(e)
        window.message.error('上传封面背景失败12')
    } finally {
        if (img_src.length > 0 && img_src.length === len) {
            console.log(img_src)
        }
    }
}

/**
 * 1: 先查看永久存储有token？
 * 2：如果有就获取到看过期没有， 过期就执行请求token, 成功后走七牛云到存储。
 * */
function handleToken() {
    let data
    $.ajax({
        url: HOST + '/qn/token',
        method: 'get',
        async: false,
        success: function (res) {
            if (res.code === Ok) {
                set({expireTime: res.expireTime, token: res.token}, (d) => {
                    data = d
                })
            } else {
                window.message.error(res)
            }
        }
    })
    return data
}


function set(data, success, error) {
    if (data && Object.keys(data).length === 2) {
        let option = {}
        option['expireTime'] = data['expireTime']
        option['secretKey'] = data['token']
        localStorage.setItem('localStorage', JSON.stringify(option))
        success && success(option)
    } else {
        error && error()
    }
}

function get() {
    let store = localStorage.getItem('localStorage'), results

    if (store && isJSON(store)) {
        store = JSON.parse(store)
    } else {
        return null
    }


    if (Object.keys(store).length === 2) {
        const now = new Date().getTime()
        const end = store['expireTime'] + 1000 * 60 * 60
        if (now < end) {
            results = store
        } else {
            localStorage.removeItem('localStorage')
            return null
        }
    }

    return results
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