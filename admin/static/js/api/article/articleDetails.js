var HOST = '/api';
var Ok = 1;

var title = void 0,
    type = void 0,
    created = void 0,
    update = void 0,
    cover = void 0,
    desc = void 0,
    tags = void 0,
    keyword = void 0,
    isTop = void 0,
    hot = void 0,
    recommend = void 0;
var coverStr = void 0;

// 文章内容挂载到文章详情上面。
var content = window.content;

function articleItemValue() {
    title = $('#article-title').val();

    if ($('#article-type').val() && $('#article-type').val() !== "") {
        type = $('#article-type').val().split(',').map(function (item) {
            return Number(item);
        });
    }
    created = $('#article-created').val();
    update = $('#article-update').val();
    desc = $('#article-desc').val();
    if (desc && typeof desc === 'string' && desc !== '' && desc.length > 54) {
        desc = desc.substr(0, 54);
    }
    cover = $('.cupload-image-box input').val();
    keyword = $('#keyword').val();
    isTop = $('#is-top').prop("checked");
    hot = $('#hot').prop("checked");
    recommend = $('#recommend').prop("checked");
}

function save() {
    var prod = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    articleItemValue();

    /**
     * 标签
     * */
    var TagHtml = $('#articleTags li');
    var Tags = [];
    for (var i = 0; i < TagHtml.length; i++) {
        if ($(TagHtml[i]).find('.tagit-label') && $(TagHtml[i]).find('span.tagit-label').length > 0) {
            if ($(TagHtml[i]).find('.tagit-label')[0].innerText && $(TagHtml[i]).find('.tagit-label')[0].innerText !== '' && typeof $(TagHtml[i]).find('.tagit-label')[0].innerText === 'string') {
                Tags.push($(TagHtml[i]).find('.tagit-label')[0].innerText);
            }
        }
    }

    if (Tags.length === 0) Tags = '';else Tags.join(',');

    if (cover) {
        // 走七牛云接口
        if (!get()) {
            var results = handleToken();
            if (results && Object.keys(results).length === 2) {
                var token = data.secretKey;
                coverStr = getTokenUrl($('.cupload-image-list li input[type="hidden"]').val(), token);
            }
        } else {
            var _token = get().secretKey;
            coverStr = getTokenUrl($('.cupload-image-list li input[type="hidden"]').val(), _token);
        }
    }

    var data = {
        title: title,
        created: created,
        update: update,
        content: window.content,
        cover: coverStr,
        desc: desc,
        keyword: keyword ? keyword : '',
        isTop: isTop ? isTop : false,
        hot: hot ? hot : false,
        recommend: recommend ? recommend : false,
        prod: prod
    };

    if (Tags !== '') {
        data.Tags = Tags;
    }

    if (desc === undefined || desc === '' || !desc) {
        data.desc = window.text ? window.text.substr(0, 54) : null;
    }

    if (type && Array.isArray(type) && type.length === 1) {
        data['menuId'] = type[0];

        // 没有文章类型的时候我们传递个-1满足接口不报错。
        data['categoryId'] = -1;
    }

    if (type && Array.isArray(type) && type.length === 2) {
        data['menuId'] = type[0];
        data['categoryId'] = type[1];
    }

    Object.keys(data).map(function (key) {
        if (data[key] === '' || data[key] === undefined || data[key] === null) {
            key !== 'keyword' && delete data[key];
        }
    });
    saveArticle(data);
}

function saveArticle(data) {
    $.ajax({
        url: HOST + '/article/details/add',
        data: JSON.stringify(data),
        method: 'POST',
        success: function success(res) {
            if (res.code === Ok) {
                remove();
                window.message.success(res);
                setTimeout(function () {
                    window.location.reload();
                }, 5000);
            } else {
                window.message.error(res);
            }
        }
    });
}

function remove() {
    if (cover) {
        window.qiniuyun = null;
    }
    title = null;
    type = null;
    created = null;
    update = null;
    cover = null;
    desc = null;
    tags = null;
    keyword = null;
    isTop = null;
    hot = null;
    recommend = null;
    coverStr = null;
    window.content = null;
    window.text = null;
}

/**
 * 数据保存
 * */
/**
 * 七牛云图片请求
 * */
function getTokenUrl(base, token) {
    var src = void 0;
    var size = window.qiniuyun.size;
    var name = window.btoa("0612_" + new Date().getTime() + "_" + parseInt(Math.random() * 10));
    var pic = base.split("base64,")[1]; //七牛云需要接受的参数是  base64， 后面的值 所以我把它截取了
    var url = 'http://up-z2.qiniup.com/putb64/' + size + "/key/" + name; //  我这个是华南地区的   要根据仓库选择url   这个是官方的  https://developer.qiniu.com/kodo/kb/1326/how-to-upload-photos-to-seven-niuyun-base64-code
    $.ajax({
        url: url,
        type: 'POST',
        async: false, //  这里我使用同步的方式是为了把得到的src返回出去
        beforeSend: function beforeSend(request) {
            // 请求之前设置请求头
            request.setRequestHeader('Content-Type', 'application/octet-stream');
            request.setRequestHeader('Authorization', 'UpToken ' + token); // token服务端请求
        },

        data: pic,
        success: function success(data) {
            src = data.key;
        }
    });
    return src;
}

/**
 * 1: 先查看永久存储有token？
 * 2：如果有就获取到看过期没有， 过期就执行请求token, 成功后走七牛云到存储。
 * */
function handleToken() {
    var data = void 0;
    $.ajax({
        url: HOST + '/qn/token',
        method: 'get',
        async: false,
        success: function success(res) {
            if (res.code === Ok) {
                set({ expireTime: res.expireTime, token: res.token }, function (d) {
                    data = d;
                });
            } else {
                window.message.error(res);
            }
        }
    });
    return data;
}

function set(data, success, error) {
    if (data && Object.keys(data).length === 2) {
        var option = {};
        option['expireTime'] = data['expireTime'];
        option['secretKey'] = data['token'];
        localStorage.setItem('localStorage', JSON.stringify(option));
        success && success(option);
    } else {
        error && error();
    }
}

function get() {
    var store = localStorage.getItem('localStorage'),
        results = void 0;

    if (store && isJSON(store)) {
        store = JSON.parse(store);
    } else {
        return null;
    }

    if (Object.keys(store).length === 2) {
        var now = new Date().getTime();
        var end = store['expireTime'] + 1000 * 60 * 60;
        if (now < end) {
            results = store;
        } else {
            localStorage.removeItem('localStorage');
            return null;
        }
    }

    return results;
}

function isJSON(str) {
    if (typeof str == 'string') {
        try {
            JSON.parse(str);
            return true;
        } catch (e) {
            return false;
        }
    }
}