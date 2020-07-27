/**
 * 工作台
 * */

$('.headerContent > .title > .date').text(timeFix())
$('.headerContent > .title > .name').text('刘体勇')
$('.headerContent > .title > .welcome-text').text(welcome())
var _Time = getDiffDate('2019-06-18')
$('.head-info > .running p.time').text(_Time).append('<sapn class="unit">' + '天' +'</sapn>')

function timeFix() {
    const time = new Date()
    const hour = time.getHours()
    return hour < 9 ? '早上好' : hour <= 11 ? '上午好' : hour <= 13 ? '中午好' : hour < 20 ? '下午好' : '晚上好'
}

function welcome() {
    const arr = ['休息一会儿吧', '准备吃什么呢?', '要不要出去逛逛', '我猜你可能累了']
    const index = Math.floor(Math.random() * arr.length)
    return arr[index]
}

function getDiffDate(targetDate) {
    let date1 = new Date(targetDate);
    let date2 = new Date();
    date1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
    date2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
    const diff = date2.getTime() - date1.getTime();
    const diffDate = diff / (24 * 60 * 60 * 1000);
    return diffDate;
}