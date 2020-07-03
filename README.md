## admin/template/base 暂时废弃



# 使用beego重构博客（目的最简单的部署方式，最优美的界面展示）

吴先生的博客[http://www.woann.cn](http://www.woann.cn)


仿简述版本[仿简述版本](http://vue.jackhu.top/)
###
[参考1](http://www.54tianzhisheng.cn/)
###
[参考2](https://lin-xin.gitee.io/open/)

### 侧边栏
[jQuery响应式隐藏滑动侧边栏插件效果演示](http://www.htmleaf.com/Demo/201507012144.html)


置顶 热门 标签
[jQuery分页插件适配PC端移动端](http://www.jq22.com/demo/jquerypagination201811080936/)


[Google Code Prettify，代码高亮的JS库](https://blog.csdn.net/u011127019/article/details/77165062)

[代码高亮](http://www.bootstrapmb.com/search?keyword=%E4%BB%A3%E7%A0%81%E9%AB%98%E4%BA%AE)

[登陆注册忘记密码模版](http://www.jq22.com/demo/jQueryZcMoban201709140221/)

[css小三角](https://www.jianshu.com/p/9a463d50e441)


[后台模版](http://v.bootstrapmb.com/2019/11/gdgux6705/)

[创意bootstrap模版](http://www.bootstrapmb.com/item/6705)

[用beego开发服务端应用](https://www.cnblogs.com/zhangboyu/p/7760693.html)

[开源在线 Markdown 编辑器](http://editor.md.ipandao.com/)

[原生js的图片上传插件cupload](http://www.jq22.com/jquery-info22747)

[jQuery图片预览插件](http://www.jq22.com/jquery-info19658)

[wangEditor-轻量级 web 富文本编辑器，配置方便，使用简单。支持 IE10+ 浏览器](https://www.kancloud.cn/wangfupeng/wangeditor3/332599)

[仿微信公众平台文章发布](http://www.jq22.com/yanshi22827)

[jQuery标签插件Tag-it](http://www.jq22.com/jquery-info19168)

[评论参考](http://www.bootstrapmb.com/item/5089)

[Swiper.js响应式单排图片滚动jQuery代码](http://www.bootstrapmb.com/item/3968/preview)

[js图片编辑器插件Filerobot](http://www.bootstrapmb.com/item/5226/preview)

[golang、JS AES(CBC模式)加密解密兼容](https://www.cnblogs.com/haima/p/12611372.html)

[env config](https://learnku.com/articles/33910)


[练习sql``](https://www.jb51.net/article/76997.htm)

[关于 Xtiper](http://v.bootstrapmb.com/2019/10/ebc96463/#load)

[Quill—心目中的最佳富文本编辑器](https://www.jianshu.com/p/b237372f15cc)

```  
SELECT * FROM articles LEFT JOIN systems ON articles.id = systems.id ORDER BY systems.created_time desc,articles.hot desc

SELECT articles.*,IFNULL(systems.top_id,0) FROM articles LEFT JOIN systems ON articles.id = systems.id  ORDER BY systems.created_time desc,articles.hot desc 

SELECT articles.*,IFNULL(systems.top_id,0) FROM articles LEFT JOIN systems ON articles.id = systems.top_id  ORDER BY systems.created_time desc,articles.hot desc 


replace into 针对于唯一数据的修改
golang flag包
```


# 转义
```js

//js
//富文本反转义html
function escape2Html(str){
    var arrEntities = { 'lt': '<', 'gt': '>', 'nbsp': ' ', 'amp': '&', 'quot': '"' };
	return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, function (all, t) {
		return arrEntities[t];
	});
}
 
//富文本转义html
function html2Escape(str){
    return str.replace(/[<>&"]/g, function (c) {
		return { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c];
	});
}
 
 
//vue
//富文本反转义html
export const escape2Html = (str) => {
	var arrEntities = { 'lt': '<', 'gt': '>', 'nbsp': ' ', 'amp': '&', 'quot': '"' };
	return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, function (all, t) {
		return arrEntities[t];
	});
}
 
//富文本转义html
export const html2Escape = (str) => {
	return sHtml.replace(/[<>&"]/g, function (c) {
		return { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c];
	});
}

```

```  
mysql 有中文全文检索
你做博客的搜索会用到
自己的可以用mysql
企业级的，你要用elastic
没事，连表就行
连表inner join 是首选
```
[404](http://www.jq22.com/demo/jQuery404201710142052/)

[留言板](https://www.17sucai.com/preview/41468/2015-04-18/zyComment%E5%AE%9E%E4%BE%8B/demo.html)

[一款jQuery评论插件](http://www.jq22.com/jquery-info22092)

[jQuery弹出框美化插件(支持alert、confirm和toast)](http://www.bootstrapmb.com/item/7781)