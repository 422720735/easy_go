const HOST = '/api'
const ASSETS = 'http://assets.cdbob.cn/'
const Ok = 1
let img_src = []

/**
 * 请求token，完成数据请求。
 * */
function uploadCovers() {
    isVisible(true)
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

/** 清楚*/
function removeCovers() {
    $('#cupload-tailor').empty()
}

/**
 * 七牛云多图上传
 * */
$(document).ready(function () {
    $.ajax({
        url: HOST + '/cover',
        method: 'Get',
        success: function (res) {
            if (res.code === Ok  && res.data !== '') {
                // 把数据查入进去
                res.data.split(',').forEach(item => {
                    const src = ASSETS + item
                    const liDom = '<div class="li-img"><img onclick="maximize(event)" src="' + src + '"></div>'
                    $('#cupload-tailor').append(liDom)
                })
            }
        }
    })
})

function qnMultiple(token) {
    if ($('#cupload-tailor > .li-img').length === 0) {
        window.message.error('当前没有可选择上传的图片')
    } else {
        const src = $('#cupload-tailor > .li-img').eq(0).find('img').attr('data-src')
        if (src) {
            CoverUpload.have()
            console.log($('#cupload-tailor > .li-img'))
        } else {
            CoverUpload.none(token)
            console.log($('#cupload-tailor > .li-img'))
        }
    }
}

class CoverUpload {
    static have() {
        const len = document.querySelectorAll('#cupload-tailor .li-img').length
        let upLoad = []
        for (let i = 0; i < len; i++) {
            const el = $('#cupload-tailor .li-img').eq(i).find('img')
            const src = el.attr('data-src')
            upLoad.push(src)
        }
        if (upLoad.length > 0) {
            $.ajax({
                url: HOST + '/cover/alter',
                method: 'POST',
                data: JSON.stringify({
                    cover: upLoad.join(",")
                }),
                success: (res) => {
                    isVisible(false)
                    if (res.code === Ok) {
                        window.message.success(res)
                    } else {
                        window.message.error(res)
                    }

                },
                error: function () {
                    window.message.error('图片上传失败')
                    isVisible(false)
                }
            })
        }

    }

    static none(token) {
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

function isVisible(bool) {
    if (bool) {
        $('#upload-icon').addClass('d-none')
        $('#upload-spin').removeClass('d-none')
    } else {
        $('#upload-icon').removeClass('d-none')
        $('#upload-spin').addClass('d-none')
    }
}
/**
 * ajax 递归请求数据，并在最后一个请求完成后。我们走自己的上传接口数据
 * */
function func_digui(arry, len, token) {
    var temp
    var current = 0
    var title = ''
    try {
        for (let i = 0; i < len; i++) {
            if (i === 0) {
                temp = Object.assign({}, arry[0])
                arry.splice(i, 1);
                const {size, name, pic} = temp
                title = name
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
                            if (data.key) {
                                img_src.push(data.key)
                                current = i
                                func_digui(arry, len, token)
                            } else {
                                return false
                            }
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
        isVisible(false)
        window.message.error('上传封面背景失败')
    } finally {
        if (img_src[img_src.length - 1] && img_src[img_src.length - 1] !== null && img_src[img_src.length - 1] !== undefined) {
            // 把七牛云的图片地址放在img 自定义属性上。
            $('#cupload-tailor .li-img').eq(img_src.length - 1).find('img').attr('data-src', img_src[img_src.length - 1])
            $('#cupload-tailor .li-img').eq(img_src.length - 1).find('img').attr('data-title', title)
        }
        if (img_src.length > 0 && img_src.length === len) {
            // 请求我们自己的编辑接口
            $.ajax({
                url: HOST + '/cover/alter',
                method: 'POST',
                data: JSON.stringify({
                    cover: img_src.join(",")
                }),
                success: (res) => {
                    isVisible(false)
                    if (res.code === Ok) {
                        window.message.success(res)
                    } else {
                        window.message.error(res)
                    }

                },
                error: function () {
                    window.message.error('图片上传失败')
                    isVisible(false)
                }
            })
        } else {
            window.message.warning('当前没有背景可修改')
            isVisible(false)
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