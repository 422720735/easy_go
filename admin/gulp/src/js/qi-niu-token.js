(function (window, document) {
    var QiNiu = function (options) {
        if (!(this instanceof QiNiu)) {
            return new QiNiu(options)
        }
    }

    QiNiu.prototype = {
        constructor: this,

        test: function () {
            alert(12)
        }
    }
})(window, document)