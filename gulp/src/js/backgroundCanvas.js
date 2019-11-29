function Dotline(option) {
    this.opt = this.extend({
        dom: 'J_dotLine',//画布id
        cw: 1000,//画布宽
        ch: 500,//画布高
        ds: 100,//点的个数
        r: 0.5,//圆点半径
        dis: 100//触发连线的距离
    }, option);
    this.c = document.getElementById(this.opt.dom);//canvas元素id
    this.ctx = this.c.getContext('2d');
    this.c.width = this.opt.cw;//canvas宽
    this.c.height = this.opt.ch;//canvas高
    this.dotSum = this.opt.ds;//点的数量
    this.radius = this.opt.r;//圆点的半径
    this.disMax = this.opt.dis * this.opt.dis;//点与点触发连线的间距
    this.dots = [];
    //requestAnimationFrame控制canvas动画
    var RAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
    var _self = this;
    //增加鼠标效果
    var mousedot = {x: null, y: null, label: 'mouse'};
    this.c.onmousemove = function (e) {
        var e = e || window.event;
        mousedot.x = e.clientX - _self.c.offsetLeft;
        mousedot.y = e.clientY - _self.c.offsetTop;
    };
    this.c.onmouseout = function (e) {
        mousedot.x = null;
        mousedot.y = null;
    }
    //控制动画
    this.animate = function () {
        _self.ctx.clearRect(0, 0, _self.c.width, _self.c.height);
        _self.drawLine([mousedot].concat(_self.dots));
        RAF(_self.animate);
    };
}

//合并配置项，es6直接使用obj.assign();
Dotline.prototype.extend = function (o, e) {
    for (var key in e) {
        if (e[key]) {
            o[key] = e[key]
        }
    }
    return o;
};
//画点
Dotline.prototype.addDots = function () {
    var dot;
    for (var i = 0; i < this.dotSum; i++) {//参数
        dot = {
            x: Math.floor(Math.random() * this.c.width) - this.radius,
            y: Math.floor(Math.random() * this.c.height) - this.radius,
            ax: (Math.random() * 2 - 1) / 1.5,
            ay: (Math.random() * 2 - 1) / 1.5
        }
        this.dots.push(dot);
    }
};
//点运动
Dotline.prototype.move = function (dot) {
    dot.x += dot.ax;
    dot.y += dot.ay;
    //点碰到边缘返回
    dot.ax *= (dot.x > (this.c.width - this.radius) || dot.x < this.radius) ? -1 : 1;
    dot.ay *= (dot.y > (this.c.height - this.radius) || dot.y < this.radius) ? -1 : 1;
    //绘制点
    this.ctx.beginPath();
    this.ctx.arc(dot.x, dot.y, this.radius, 0, Math.PI * 2, true);
    this.ctx.stroke();
};
//点之间画线
Dotline.prototype.drawLine = function (dots) {
    var nowDot;
    var _that = this;
    //自己的思路：遍历两次所有的点，比较点之间的距离，函数的触发放在animate里
    this.dots.forEach(function (dot) {

        _that.move(dot);
        for (var j = 0; j < dots.length; j++) {
            nowDot = dots[j];
            if (nowDot === dot || nowDot.x === null || nowDot.y === null) continue;//continue跳出当前循环开始新的循环
            var dx = dot.x - nowDot.x,//别的点坐标减当前点坐标
              dy = dot.y - nowDot.y;
            var dc = dx * dx + dy * dy;
            if (Math.sqrt(dc) > Math.sqrt(_that.disMax)) continue;
            // 如果是鼠标，则让粒子向鼠标的位置移动
            if (nowDot.label && Math.sqrt(dc) > Math.sqrt(_that.disMax) / 2) {
                dot.x -= dx * 0.02;
                dot.y -= dy * 0.02;
            }
            var ratio;
            ratio = (_that.disMax - dc) / _that.disMax;

            _that.ctx.beginPath();
            _that.ctx.lineWidth = ratio / 2;
            _that.ctx.strokeStyle = 'rgba(0,0,0,' + (ratio + 0.2) + ')';
            _that.ctx.moveTo(dot.x, dot.y);
            _that.ctx.lineTo(nowDot.x, nowDot.y);
            _that.ctx.stroke();//不描边看不出效果

            //dots.splice(dots.indexOf(dot), 1);
        }
    });
};
//开始动画
Dotline.prototype.start = function () {
    var _that = this;
    this.addDots();
    setTimeout(function () {
        _that.animate();
    }, 100);
}
//调用
window.onload = function () {
    var w = document.querySelectorAll('body')[0].clientWidth
    var h = document.querySelectorAll('body')[0].clientHeight
    var dotline = new Dotline({
        dom: 'J_dotLine',//画布id
        cw: w,//画布宽
        ch: h,//画布高
        ds: 120,//点的个数
        r: 0.5,//圆点半径
        dis: 80//触发连线的距离
    }).start();
}
