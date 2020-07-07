/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50727
Source Host           : localhost:3306
Source Database       : easy_go

Target Server Type    : MYSQL
Target Server Version : 50727
File Encoding         : 65001

Date: 2020-07-07 18:26:23
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for articles
-- ----------------------------
DROP TABLE IF EXISTS `articles`;
CREATE TABLE `articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `menu_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `cover` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `keyword` varchar(255) DEFAULT NULL,
  `tags` varchar(255) DEFAULT NULL,
  `view` int(11) DEFAULT NULL,
  `markdown` tinyint(1) DEFAULT NULL,
  `visible` tinyint(1) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `praise` int(11) DEFAULT NULL,
  `recommend` tinyint(1) DEFAULT NULL,
  `hot` tinyint(1) DEFAULT NULL,
  `sort` int(11) DEFAULT NULL,
  `state` tinyint(1) DEFAULT NULL,
  `created_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `readonly` tinyint(1) DEFAULT NULL,
  `comment_readonly` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of articles
-- ----------------------------
INSERT INTO `articles` VALUES ('1', '2', '1', '', 'vue自定义卡片', null, '自定义卡片', null, null, '0', '0', '1', '1', '0', '0', '0', '1', '0', '2020-07-01 09:52:51', '2020-07-01 16:35:45', null, null);
INSERT INTO `articles` VALUES ('2', '2', '7', '', 'js ajax请求', null, '23432423', null, '', '0', '0', '1', '1', '0', '0', '1', '2', '0', '2020-07-01 10:03:21', '2020-07-01 16:43:40', null, null);
INSERT INTO `articles` VALUES ('3', '3', '8', '', 'beego', null, '231', null, '', '0', '0', '1', '1', '0', '0', '0', '3', '0', '2020-07-01 10:08:01', '2020-07-01 16:43:40', null, null);
INSERT INTO `articles` VALUES ('4', '3', '9', '', 'golang部署', null, 'golang部署', null, 'golang,html,css3', '0', '1', '1', '1', '0', '0', '0', '4', '0', '2020-07-01 13:56:54', '2020-07-01 16:43:39', null, null);
INSERT INTO `articles` VALUES ('5', '3', '8', '', 'golang', null, 'gorm', null, null, '0', '1', '1', '1', '0', '0', '0', '5', '0', '2020-07-01 15:23:37', '2020-07-01 16:43:39', null, null);
INSERT INTO `articles` VALUES ('6', '5', null, '', 'sql', null, 'sql', null, null, '0', '1', '1', '1', '0', '0', '0', '6', '0', '2020-07-01 15:24:00', '2020-07-01 16:43:38', null, null);
INSERT INTO `articles` VALUES ('7', '2', '1', '', 'sass', null, 'Sass 安装本章节我们主要介绍 Sass 的安装与使用。NPM 安装我们可以使用 npm（NPM 使用介绍', null, null, '0', '0', '1', '1', '0', '0', '0', '7', '0', '2020-07-01 15:24:54', '2020-07-01 16:43:37', null, null);
INSERT INTO `articles` VALUES ('8', '7', null, '', 'scss', null, '为文章内含有很多sass代码，如需自己动手查看编译结果，推荐使用sassmeister这款在线编译工具，方便', null, null, '0', '0', '1', '1', '0', '0', '0', '8', '0', '2020-07-01 15:25:21', '2020-07-01 16:43:36', null, null);
INSERT INTO `articles` VALUES ('9', '5', null, '', 'link', null, 'sfsf', null, null, '0', '1', '1', '1', '0', '0', '0', '9', '0', '2020-07-01 15:25:56', '2020-07-01 16:43:36', null, null);
INSERT INTO `articles` VALUES ('10', '7', null, '', 'theme', null, 'te', null, null, '0', '1', '1', '1', '0', '0', '0', '10', '0', '2020-07-01 15:26:17', '2020-07-03 09:33:41', null, null);
INSERT INTO `articles` VALUES ('11', '2', '5', '', 'External use', null, '234234', null, null, '0', '1', '1', '1', '0', '0', '0', '11', '0', '2020-07-01 15:26:54', '2020-07-03 14:06:25', null, null);

-- ----------------------------
-- Table structure for article_contents
-- ----------------------------
DROP TABLE IF EXISTS `article_contents`;
CREATE TABLE `article_contents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `article_id` int(11) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `content` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of article_contents
-- ----------------------------
INSERT INTO `article_contents` VALUES ('1', '1', null, '<pre><code>&lt;template&gt;<br>    &lt;a-card<br>        v-loading=\"loading &amp;&amp; initLoading\"<br>        element-loading-text=\"拼命加载中\"<br>        element-loading-spinner=\"el-icon-loading\"<br>        :loading=\"skeleton ? skeletonLoading : null\"<br>        class=\"mr-card__\"<br>        :tabList=\"(title &amp;&amp; Array.isArray(this.title) &amp;&amp; this.title.length &gt; 0) ? title : null\"<br>        :bordered=\"false\"<br>        :class=\"hiddenHead ? \'hidden-head\' : \'\'\"<br>        :headStyle=\"headStyle\"<br>        :bodyStyle=\"bodyStyle\"<br>        :activeTabKey=\"noTitleKey\"<br>        @tabChange=\"key =&gt; onTabChange(key)\"<br>    &gt;<br>        &lt;!--副标题--&gt;<br>        &lt;mr-sub-title v-if=\"title &amp;&amp; typeof this.title === \'string\' &amp;&amp; !$slots.title\" slot=\"title\" :sub-title=\"title\"&gt;&lt;/mr-sub-title&gt;<br>        &lt;slot v-if=\"!title &amp;&amp; $slots.title\" slot=\"title\" name=\"title\"&gt;&lt;/slot&gt;<br><br>        &lt;!--右侧更多--&gt;<br>        &lt;slot v-if=\"title &amp;&amp; typeof this.title === \'string\'\" slot=\"extra\" name=\"extra\"&gt;&lt;/slot&gt;<br>        &lt;slot v-if=\"(title &amp;&amp; Array.isArray(this.title) &amp;&amp; this.title.length &gt; 0)\" slot=\"tabBarExtraContent\" name=\"tabBarExtraContent\"&gt;&lt;/slot&gt;<br><br>        &lt;!--默认插槽--&gt;<br>        &lt;slot&gt;&lt;/slot&gt;<br>    &lt;/a-card&gt;<br>&lt;/template&gt;</code></pre><p><br></p>');
INSERT INTO `article_contents` VALUES ('2', '2', null, '<h1>配置 onchange 函数</h1><p>配置<code>onchange</code>函数之后，用户操作（鼠标点击、键盘打字等）导致的内容变化之后，会自动触发<code>onchange</code>函数执行。</p><p>但是，<strong>用户自己使用 JS 修改了<code>div1</code>的<code>innerHTML</code>，不会自动触发<code>onchange</code>函数</strong>，此时你可以通过执行<code>editor.change()</code>来手动触发<code>onchange</code>函数的执行。</p><pre><code>&lt;div id=\"div1\"&gt;<br>    &lt;p&gt;欢迎使用 wangEditor 富文本编辑器&lt;/p&gt;<br>&lt;/div&gt;<br><br>&lt;p&gt;手动触发 onchange 函数执行&lt;/p&gt;<br>&lt;button id=\"btn1\"&gt;change&lt;/button&gt;<br><br>&lt;script type=\"text/javascript\" src=\"/wangEditor.min.js\"&gt;&lt;/script&gt;<br>&lt;script type=\"text/javascript\"&gt;<br>    var E = window.wangEditor<br>    var editor = new E(\'#div1\')<br>    editor.customConfig.onchange = function (html) {<br>        // html 即变化之后的内容<br>        console.log(html)<br>    }<br>    editor.create()<br><br>    document.getElementById(\'btn1\').addEventListener(\'click\', function () {<br>        // 如果未配置 editor.customConfig.onchange，则 editor.change 为 undefined<br>        editor.change &amp;&amp; editor.change()<br>    })<br><br>&lt;/script&gt;</code></pre><p><br></p><p><br></p>');
INSERT INTO `article_contents` VALUES ('3', '3', null, '<p>npm install quill@1.3.4&nbsp;</p><pre><code>&lt;!-- 编辑器 --&gt;<br>&lt;div id=\"editor\"&gt;<br>  &lt;p&gt;Hello World!&lt;/p&gt;<br>  &lt;p&gt;Some initial &lt;strong&gt;bold&lt;/strong&gt; text&lt;/p&gt;<br>  &lt;p&gt;&lt;br&gt;&lt;/p&gt;<br>&lt;/div&gt;<br>&lt;!-- 按钮 --&gt;<br>&lt;div style=\"padding: 15px;margin-top: 20px;\"&gt;<br>  &lt;span onclick=\"nihao();\" class=\"btn\"&gt;获取编辑器内容&lt;/span&gt;<br>&lt;/div&gt;<br>&lt;!-- 获取内容 --&gt;<br>&lt;div class=\"content\"&gt;<br>&lt;/div&gt;<br></code></pre><p><br></p><p>&nbsp;<br></p>');
INSERT INTO `article_contents` VALUES ('4', '4', null, '# studygolang\n\n[![Build Status](https://travis-ci.org/studygolang/studygolang.svg?branch=master)](https://travis-ci.org/studygolang/studygolang)\n\n[Go语言中文网 - Golang中文社区](https://studygolang.com \"Go语言中文网 - Golang中文社区\") 源码\n\n网站上线时间：2013-03-15 14:38:09\n\n目前在线运行的分支是 Master。欢迎有兴趣的 gopher 们参与进来，一起构建一个完善的 Go 语言中文网，Go 语言爱好者的学习家园，参与方式请参考：https://studygolang.com/topics/4092\n\n## 本地搭建一个 Go语言中文网\n\n要求 Go 1.11+\n\n1、下载源码到本地某个目录\n\n```shell\ngit clone https://github.com/studygolang/studygolang\n```\n\n2、编译\n\n进入 studygolang 项目目录，执行如下命令：\n\n```shell\n// unix\nmake build\n// windows\ninstall.bat\n```\n\n这样便编译好了 studygolang\n\n3、在 studygolang 源码中的 bin 目录下应该有了 studygolang 可执行文件。\n\n接下来启动 studygolang。\n\n```shell\n// unix\nmake start\n// windows\nstart.bat\n```\n\n或者\n\n```shell\n// unix\nbin/studygolang\n// windows\nbin\\studygolang.exe\n```\n\n一切顺利的话，studygolang 应该就启动了。\n\n4、验证\n\n在浏览器中输入：http://127.0.0.1:8088\n\n应该就能看到了。\n\n接下来你会看到图形化安装界面，一步步照做吧。\n\n* 如果之后有出现页面空白，请查看 error.log 是否有错误\n\n## 参与我们\n\nfork + PR。如果有修改 js 和 css，请执行 gulp （需要先安装 gulp）。注意，Node 版本为：v10.16.2\n\n## 使用该项目搭建的网站\n\n- [Go语言中文网](https://studygolang.com)\n- [Kotlin中国](https://kotlintc.com)\n');
INSERT INTO `article_contents` VALUES ('5', '5', null, '## admin/template/base 暂时废弃\n\n\n\n# 使用beego重构博客（目的最简单的部署方式，最优美的界面展示）\n\n吴先生的博客[http://www.woann.cn](http://www.woann.cn)\n\n\n仿简述版本[仿简述版本](http://vue.jackhu.top/)\n###\n[参考1](http://www.54tianzhisheng.cn/)\n###\n[参考2](https://lin-xin.gitee.io/open/)\n\n### 侧边栏\n[jQuery响应式隐藏滑动侧边栏插件效果演示](http://www.htmleaf.com/Demo/201507012144.html)\n\n\n置顶 热门 标签\n[jQuery分页插件适配PC端移动端](http://www.jq22.com/demo/jquerypagination201811080936/)\n\n\n[Google Code Prettify，代码高亮的JS库](https://blog.csdn.net/u011127019/article/details/77165062)\n\n[代码高亮](http://www.bootstrapmb.com/search?keyword=%E4%BB%A3%E7%A0%81%E9%AB%98%E4%BA%AE)\n\n[登陆注册忘记密码模版](http://www.jq22.com/demo/jQueryZcMoban201709140221/)\n\n[css小三角](https://www.jianshu.com/p/9a463d50e441)\n\n\n[后台模版](http://v.bootstrapmb.com/2019/11/gdgux6705/)\n\n[创意bootstrap模版](http://www.bootstrapmb.com/item/6705)\n\n[用beego开发服务端应用](https://www.cnblogs.com/zhangboyu/p/7760693.html)\n\n[开源在线 Markdown 编辑器](http://editor.md.ipandao.com/)\n\n[原生js的图片上传插件cupload](http://www.jq22.com/jquery-info22747)\n\n[jQuery图片预览插件](http://www.jq22.com/jquery-info19658)\n\n[wangEditor-轻量级 web 富文本编辑器，配置方便，使用简单。支持 IE10+ 浏览器](https://www.kancloud.cn/wangfupeng/wangeditor3/332599)\n\n[仿微信公众平台文章发布](http://www.jq22.com/yanshi22827)\n\n[jQuery标签插件Tag-it](http://www.jq22.com/jquery-info19168)\n\n[评论参考](http://www.bootstrapmb.com/item/5089)\n\n[Swiper.js响应式单排图片滚动jQuery代码](http://www.bootstrapmb.com/item/3968/preview)\n\n[js图片编辑器插件Filerobot](http://www.bootstrapmb.com/item/5226/preview)\n\n[golang、JS AES(CBC模式)加密解密兼容](https://www.cnblogs.com/haima/p/12611372.html)\n\n[env config](https://learnku.com/articles/33910)\n\n\n[练习sql``](https://www.jb51.net/article/76997.htm)\n\n[关于 Xtiper](http://v.bootstrapmb.com/2019/10/ebc96463/#load)\n\n[Quill—心目中的最佳富文本编辑器](https://www.jianshu.com/p/b237372f15cc)\n\n```  \nSELECT * FROM articles LEFT JOIN systems ON articles.id = systems.id ORDER BY systems.created_time desc,articles.hot desc\n\nSELECT articles.*,IFNULL(systems.top_id,0) FROM articles LEFT JOIN systems ON articles.id = systems.id  ORDER BY systems.created_time desc,articles.hot desc \n\nSELECT articles.*,IFNULL(systems.top_id,0) FROM articles LEFT JOIN systems ON articles.id = systems.top_id  ORDER BY systems.created_time desc,articles.hot desc \n\n\nreplace into 针对于唯一数据的修改\ngolang flag包\n```\n\n\n# 转义\n```js\n\n//js\n//富文本反转义html\nfunction escape2Html(str){\n    var arrEntities = { \'lt\': \'<\', \'gt\': \'>\', \'nbsp\': \' \', \'amp\': \'&\', \'quot\': \'\"\' };\n	return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, function (all, t) {\n		return arrEntities[t];\n	});\n}\n \n//富文本转义html\nfunction html2Escape(str){\n    return str.replace(/[<>&\"]/g, function (c) {\n		return { \'<\': \'&lt;\', \'>\': \'&gt;\', \'&\': \'&amp;\', \'\"\': \'&quot;\' }[c];\n	});\n}\n \n \n//vue\n//富文本反转义html\nexport const escape2Html = (str) => {\n	var arrEntities = { \'lt\': \'<\', \'gt\': \'>\', \'nbsp\': \' \', \'amp\': \'&\', \'quot\': \'\"\' };\n	return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, function (all, t) {\n		return arrEntities[t];\n	});\n}\n \n//富文本转义html\nexport const html2Escape = (str) => {\n	return sHtml.replace(/[<>&\"]/g, function (c) {\n		return { \'<\': \'&lt;\', \'>\': \'&gt;\', \'&\': \'&amp;\', \'\"\': \'&quot;\' }[c];\n	});\n}\n\n```');
INSERT INTO `article_contents` VALUES ('6', '6', null, '```sql\n-- SELECT articles.*,IFNULL(systems.top_id, 0) FROM articles LEFT JOIN systems ON articles.id = systems.id  ORDER BY systems.created_time desc,articles.hot desc \n\n-- SELECT *, IFNULL(systems.top_id, 0) from systems\n\n-- select 字段列表 from table1 别名1 left join table2 别名2 on 连接条件 [where 子句]\n\n-- SELECT * from articles where menu_id = 1\n\n\n-- SELECT articles.*,IFNULL(systems.top_id, 0) FROM articles LEFT JOIN systems ON articles.id = systems.id  ORDER BY systems.created_time desc,articles.hot desc \n\nSELECT articles.*,IFNULL(systems.top_id, 0) FROM articles LEFT JOIN systems ON articles.id = systems.id WHERE 1 ORDER BY systems.created_time desc,articles.hot desc LIMIT 0, 2 \n```');
INSERT INTO `article_contents` VALUES ('7', '7', null, '<h1>Sass 安装</h1><p>本章节我们主要介绍 Sass 的安装与使用。</p><h3>NPM 安装</h3><p>我们可以使用 npm（NPM 使用介绍）来安装 Sass。</p><pre>npm install -g sass</pre><p><strong>注：</strong>国内 npm 建议使用淘宝镜像来安装，参考：<a href=\"https://www.runoob.com/w3cnote/npm-slow-use-cnpm.html\" rel=\"noopener noreferrer\" target=\"_blank\">NPM 国内慢的问题解决</a></p><h3>Windows 上安装</h3><p>我们可以使用 Windows 的包管理器&nbsp;<a href=\"https://chocolatey.org/\" rel=\"noopener noreferrer\" target=\"_blank\">Chocolatey</a>&nbsp;来安装：</p><pre>choco install sass</pre><h3>Mac OS X (Homebrew)安装</h3><p>Mac OS 可以使用&nbsp;<a href=\"https://brew.sh/\" rel=\"noopener noreferrer\" target=\"_blank\">Homebrew</a>&nbsp;包管理器来安装：</p><pre>brew install sass/sass/sass</pre><p>更多安装方法可以查看官网：<a href=\"https://sass-lang.com/install\" rel=\"noopener noreferrer\" target=\"_blank\">https://sass-lang.com/install</a></p><hr><h2>使用介绍</h2><p>我们的教程使用的是 npm 安装的 sass，安装完成后可以查看版本：</p><p>$ sass --version 1.22.12 compiled with dart2js 2.5.0 接下来我们创建一个 runoob-test.scss 文件，内容为：</p><div><h2>runoob-test.scss 文件代码:</h2><div>/* 定义变量与值 */<br>$bgcolor:&nbsp;lightblue;<br>$textcolor:&nbsp;darkblue;<br>$fontsize:&nbsp;18px;<br><br>/* 使用变量 */<br>body&nbsp;{<br>&nbsp;&nbsp;background-color:&nbsp;$bgcolor;<br>&nbsp;&nbsp;color:&nbsp;$textcolor;<br>&nbsp;&nbsp;font-size:&nbsp;$fontsize;<br>}<br></div></div><p>然后在命令行输入下面命令，即将 .scss 文件转化的 css 代码：</p><pre>$ sass runoob-test.scss \n@charset \"UTF-8\";\n/* 定义变量与值 */\n/* 使用变量 */\nbody {\n  background-color: lightblue;\n  color: darkblue;\n  font-size: 18px;\n}</pre><p>我们可以在后面再跟一个 .css 文件名，将代码保存到文件中：</p><pre>$ sass runoob-test.scss runoob-test.css</pre><p>这是会在当前目录下生存 runoob-test.css 文件，代码如下：</p><pre>@charset \"UTF-8\";\n/* 定义变量与值 */\n/* 使用变量 */\nbody {\n  background-color: lightblue;\n  color: darkblue;\n  font-size: 18px;\n}\n\n/*# sourceMappingURL=runoob-test.css.map */</pre>');
INSERT INTO `article_contents` VALUES ('8', '8', null, '<p>为文章内含有很多sass代码，如需自己动手查看编译结果，推荐使用<a href=\"http://sassmeister.com/\" target=\"_blank\">sassmeister</a>这款在线编译工具，方便你阅读学习。</p><p>在阅读本文章之前，请先确认你已经阅读了上篇文章<a href=\"https://www.w3cplus.com/preprocessor/sass-basic-variable.html\" target=\"_blank\">sass揭秘之变量</a>，不然会给你带来疑惑的感觉。</p><p>其实很多人之所以对sass或less感兴趣，就是因为他们能使用变量和这个@mixin功能，而后面的%和@function知道的人就比较少了。所以说@mixin这个东西还是很有诱惑力的，没办法，广告做得好啊，大明星。这里之所以把%和@function和@mixin放在一起，当然并非无缘无故，一看@mixin和@function就是兄弟，长得那么像，而%这个后起之秀，更是在一定程度上抢了@mixin的不少风头。</p><p>这里先说@mixin和%，谁让它们有竞争关系呢，哈哈。@function这个家伙一看就是函数，先闪一边去。 首先@mixin可以传递参数，而%不行；然后@mixin的调用方式是@include，而%的调用方式是@extend；最后@include产生的样式是以复制拷贝的方式存在的，而@extend产生的样式是以组合申明的方式存在的。概念简单讲解完毕，现在进入代码实例，上战场才是真理。</p><div></div><p>为了方面测试，我们先约定建立一个<code>_mixin.scss</code>文件，下面所有的有关@mixin，%和@function的一些定义全部写在这里，再建立一个<code>style.scss</code>来调用我们的<code>_mixin.scss</code>文件，所以在style的里面先写上一句<code>@import \'mixin\';</code></p><h2>@mixin</h2><p>先来一段无参数简单版本的@mixin（@mixin，%，@function全部放在<code>_mixin.scss</code>文件中）：</p><pre><code>// block得有宽度margin左右为auto才能居中\n@mixin center-block {\n  margin-left: auto;\n  margin-right: auto;\n}\n</code></pre><p>这应该是最简单版本的@mixin了，不但没有参数，连样式都只有两条，不过还是很实用的。接下来我们来调用下（调用的全部放在<code>style.scss</code>文件中，先导入<code>_mixin文件</code>）：</p><pre><code>@import \'mixin\';    \n#header{\n    width:1000px;\n    @include center-block;\n}\n.gallery{\n    width:600px;\n    @include center-block;\n}\n</code></pre><p>解析成的css：</p><pre><code>#header {\n  width: 1000px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.gallery {\n  width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n</code></pre><p>很显然，上面两个margin左右为auto在各自的选择器中，当然运行是没有问题的，但是如果把这两个一样样式提出来组合申明下多好啊，一看质量就不一样了吗，高端大气上档次了哈哈。这个问题稍后留给我们的%来解决，我们继续@mxixin。</p><p>再来个无参数版的，但是包含浏览器兼容方面的：</p><pre><code>$lte7:true !default;//是否兼容ie6,7\n\n// inline-block\n// ie6-7 *display: inline;*zoom:1;\n@mixin inline-block {\n  display: inline-block;\n  @if $lte7 {\n    *display: inline;*zoom:1;\n  }\n}\n</code></pre><p>上面的代码，有个<code>$lte7</code>全局变量，我们把这个变量提到<code>_mixin.scss</code>文件的最上面。注意这里@mixin里面有个@if判断，这是为ie6,7对inline-block部分不兼容的一个处理，默认$lte7为true，意思是需要兼容ie6,7，那么就会输出判断里面的代码<code>*display: inline;*zoom:1;</code>，当我们不需要兼容的时候呢，话说高富帅搞的就是搞ie8+的，那设置$lte7为false就没<code>*display: inline;*zoom:1;</code>这两个家伙的事了，直接宣布其斩立决了。代码为证：</p><pre><code>$lte7:false;    \n@import \'mixin\';    \n\n.inline-block{\n    @include inline-block;\n}\n</code></pre><p>这里注意：因为我们要重设$lte7为false，所以在<code>@import \'mixin\';</code>之前先定义下<code>$lte7:false;</code>，这涉及到变量默认值的使用，如果你不了解请先查阅<a href=\"http://www.w3cplus.com/preprocessor/sass-basic-variable.html\" target=\"_blank\">sass揭秘之变量</a></p><p>解析成的css：</p><pre><code>.inline-block{\n    display:inline-block;\n}\n</code></pre><p>当然如果没有<code>$lte7:false;</code>这个提前申明变量，那么解析成的css应该是这样的：</p><pre><code>.inline-block{\n    display:inline-block;\n    *display: inline;*zoom:1;\n}\n</code></pre><p>从上面可以看出，如果@mixin里面放点判断，对浏览器的兼容还可以做点有意义的事，不用每次都写一大坨，同时还为以后升级带来一个暗门，直接改变下变量的值重新解析下就ok了，那些为兼容处理的代码统统消失，这比较爽。测试完这个之后，请把<code>$lte7:false;</code>删掉，因为后面还要用到其值true。</p><p>现在来个参数简单版的：</p><pre><code>@mixin float($float:left) {\n  float: $float;\n  @if $lte7 {\n    display: inline;\n  }\n}\n</code></pre><p>够简单吧，float人人皆知啊。这里$float参数有默认值为left，我们调用下：</p><pre><code>.fl{\n    @include float;\n}\n.fr{\n    @include float(right);\n}\n</code></pre><p>解析成的css：</p><pre><code>.fl{\n    float:left;\n    display: inline;\n}\n.fr{\n    float:right;\n    display: inline;\n}\n</code></pre><p>因为在传参数的时候$float设置了一个默认值为left，所以调用的时候<code>@include float;</code>和<code>@include float(left);</code>能产生一样的代码。这里先说下我琢磨出来的一个经验，如果某个@mixin无法设置默认的参数，那么这个@mixin要么可以用%来取代，要么就是个鸡肋@mixin，所以请定义@mixin的时候参考这两点判断是否有必要，特殊情况除外。</p><p>关于鸡肋@mixin等下再说，我们接着说下多个参数的@mixin：</p><pre><code>// 禁用样式，加!important\n@mixin disabled($bgColor:#e6e6e6,$textColor:#ababab){\n  background-color: $bgColor !important;\n  color: $textColor !important;\n  cursor: not-allowed !important;\n}\n</code></pre><p>两个参数，一个为背景色，一个为文本色，两个冒号后面的分别为默认值，直接调用<code>@include diasbled;</code>使用的就是默认值，虽然简单，我们还是调用下吧。</p><pre><code>.disabled{\n    @include disabled;\n}\n</code></pre><p>解析后的css：</p><pre><code>.disabled {\n  background-color: #e6e6e6 !important;\n  color: #ababab !important;\n  cursor: not-allowed !important;\n}\n</code></pre><p>接着下一个实例，一个属性可以有多个属性值的，写到这里，看过<a href=\"http://www.w3cplus.com/preprocessor/sass-basic-variable.html\" target=\"_blank\">sass揭秘之变量</a>的人就想起来了，原来是传参的时候变量得加<code>...</code>:</p><p>著作权归作者所有。<br>商业转载请联系作者获得授权,非商业转载请注明出处。<br>原文:&nbsp;<a href=\"https://www.w3cplus.com/preprocessor/sass-mixins-function-placeholder.html\">https://www.w3cplus.com/preprocessor/sass-mixins-function-placeholder.html</a>&nbsp;©&nbsp;<a href=\"https://www.w3cplus.com/\">w3cplus.com</a>&nbsp;&nbsp;<br></p>');
INSERT INTO `article_contents` VALUES ('9', '9', null, '{% highlight ruby %} name = \'Storm\' real_name = \'张奇\'\n\ncompany = \'薄荷信息科技\' title = \'软件工程师\' skills = \'android, java, ruby, git, sql\'\n\nemail = \'zhangqi.dev$#qq.com\'.gsub(\'$#\', \'@\') blog = \'http://stormzhang.github.io\' github = \'https://github.com/stormzhang\'\n\nwhile true programing reading enjoying end {% endhighlight %}');
INSERT INTO `article_contents` VALUES ('10', '10', null, '[TOC]\n\n### Themes\n\n#### Setting\n\nconfigs:\n\n```javascript\n{\n    // Editor.md theme, default or dark, change at v1.5.0\n    // You can also custom css class .editormd-theme-xxxx\n    theme : \"default | dark\",\n\n    // Preview container theme, added v1.5.0\n    // You can also custom css class .editormd-preview-theme-xxxx\n    previewTheme : \"default | dark\",\n\n    // Added @v1.5.0 & after version this is CodeMirror (editor area) theme\n    editorTheme : editormd.editorThemes[\'theme-name\']\n}\n```\n\nfunctions:\n\n```javascript\neditor.setTheme(\'theme-name\');\neditor.setEditorTheme(\'theme-name\');\neditor.setPreviewTheme(\'theme-name\');\n```\n\n#### Default theme\n\n- Editor.md theme : `default`\n- Preview area theme : `default`\n- Editor area theme : `default`\n\n> Recommend `dark` theme.\n\n#### Recommend editor area themes\n\n- ambiance\n- eclipse\n- mdn-like\n- mbo\n- monokai\n- neat\n- pastel-on-dark\n\n#### Editor area themes\n\n- default\n- 3024-day\n- 3024-night\n- ambiance\n- ambiance-mobile\n- base16-dark\n- base16-light\n- blackboard\n- cobalt\n- eclipse\n- elegant\n- erlang-dark\n- lesser-dark\n- mbo\n- mdn-like\n- midnight\n- monokai\n- neat\n- neo\n- night\n- paraiso-dark\n- paraiso-light\n- pastel-on-dark\n- rubyblue\n- solarized\n- the-matrix\n- tomorrow-night-eighties\n- twilight\n- vibrant-ink\n- xq-dark\n- xq-light\n');
INSERT INTO `article_contents` VALUES ('11', '11', null, 'TOC]\n\n### External use of toolbar handlers / modal dialog\n\n```javascript \ntestEditor = editormd(\"test-editormd\", {\n    width  : \"90%\",\n    height : 720,\n    path   : \'../lib/\'\n}); \n\n// the first method\n$(\"#undo\").bind(\'click\', function() {\n    $.proxy(testEditor.toolbarHandlers.undo, testEditor)();\n});\n\n// the Second method : using manually loaded dialog plugin\n// <script src=\"../plugins/html-entities/html-entities.js\"></script>\n$(\"#open-html-entities-dialog\").bind(\'click\', function() {\n    testEditor.htmlEntities();\n});\n\n// using toolbar dialog plugin\n$(\"#open-link-dialog\").bind(\'click\', function() {\n    $.proxy(testEditor.toolbarHandlers.link, testEditor)();\n});\n\n// or\n$(\"#open-image-dialog\").bind(\'click\', function(){\n    // load and execute plugin\n    testEditor.executePlugin(\"imageDialog\", \"../plugins/image-dialog/image-dialog\");\n});\n```\n');

-- ----------------------------
-- Table structure for article_types
-- ----------------------------
DROP TABLE IF EXISTS `article_types`;
CREATE TABLE `article_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `article_name` varchar(255) DEFAULT NULL,
  `key_word` varchar(255) DEFAULT NULL,
  `menu_id` int(11) DEFAULT NULL,
  `visible` tinyint(1) DEFAULT '0',
  `sort` int(11) DEFAULT NULL,
  `state` tinyint(1) DEFAULT '0',
  `created_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of article_types
-- ----------------------------
INSERT INTO `article_types` VALUES ('1', 'vue', 'vue', '2', '1', '2', '0', '2020-06-19 14:53:56', '2020-06-26 22:47:50');
INSERT INTO `article_types` VALUES ('2', 'react', 'react', '2', '1', '1', '0', '2020-06-19 15:06:07', '2020-07-03 09:33:19');
INSERT INTO `article_types` VALUES ('3', 'typescript', 'ts', '2', '1', '3', '0', '2020-06-19 15:07:25', '2020-06-19 18:10:19');
INSERT INTO `article_types` VALUES ('4', 'react native', 'rn', '2', '1', '4', '0', '2020-06-19 15:07:42', '2020-06-19 18:10:21');
INSERT INTO `article_types` VALUES ('5', 'wexx', 'wexx', '2', '1', '7', '0', '2020-06-19 15:08:06', '2020-06-26 00:16:57');
INSERT INTO `article_types` VALUES ('6', 'gin', 'gin', '3', '1', '5', '0', '2020-06-19 15:08:20', '2020-06-26 21:59:45');
INSERT INTO `article_types` VALUES ('7', 'javascript', 'js', '2', '1', '6', '0', '2020-06-19 15:11:46', '2020-06-26 00:16:57');
INSERT INTO `article_types` VALUES ('8', 'gorm', 'gorm', '3', '1', '8', '0', '2020-06-19 15:21:29', '2020-06-19 17:59:08');
INSERT INTO `article_types` VALUES ('9', 'docker', 'docker', '3', '1', '9', '0', '2020-06-19 15:23:02', '2020-06-19 17:59:11');

-- ----------------------------
-- Table structure for comments
-- ----------------------------
DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `article_id` int(11) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `comment_state` tinyint(1) DEFAULT NULL,
  `created_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of comments
-- ----------------------------
INSERT INTO `comments` VALUES ('1', '5', '测试数据1', '1', '1', '2020-07-07 17:44:13', null);
INSERT INTO `comments` VALUES ('2', '5', '测试数据2', '1', '1', '2020-07-07 17:44:38', null);
INSERT INTO `comments` VALUES ('3', '5', '测试数据3', '1', '1', '2020-07-07 17:44:50', null);
INSERT INTO `comments` VALUES ('4', '5', '测试数据4', '1', '1', '2020-07-07 17:44:54', null);

-- ----------------------------
-- Table structure for menu_settings
-- ----------------------------
DROP TABLE IF EXISTS `menu_settings`;
CREATE TABLE `menu_settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `menu_name` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `visible` tinyint(1) DEFAULT NULL,
  `state` tinyint(1) DEFAULT NULL,
  `sort` int(11) DEFAULT NULL,
  `child_status` tinyint(1) DEFAULT NULL,
  `created_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of menu_settings
-- ----------------------------
INSERT INTO `menu_settings` VALUES ('1', '首页', 'home', 'iconfont icon-home1', '1', '0', '1', '0', '2020-06-19 13:38:37', '2020-06-26 20:15:21');
INSERT INTO `menu_settings` VALUES ('2', '前端', 'web', 'iconfont icon-h5', '1', '0', '2', '1', '2020-06-19 13:39:04', '2020-06-26 20:15:21');
INSERT INTO `menu_settings` VALUES ('3', 'golang', 'go', 'iconfont icon-prog-golang', '1', '0', '3', '1', '2020-06-19 13:39:33', '2020-06-19 13:43:02');
INSERT INTO `menu_settings` VALUES ('4', '移动端', 'mobile', 'iconfont icon-mobile', '1', '0', '4', '1', '2020-06-19 13:41:18', '2020-06-19 13:43:05');
INSERT INTO `menu_settings` VALUES ('5', '数据库', 'data_base', 'iconfont icon-data-base', '1', '0', '5', '0', '2020-06-19 13:41:53', '2020-06-19 13:43:05');
INSERT INTO `menu_settings` VALUES ('6', '区块链', 'block', 'iconfont icon-qukuailian', '1', '0', '6', '0', '2020-06-19 13:42:30', '2020-06-19 13:43:06');
INSERT INTO `menu_settings` VALUES ('7', '其他', 'other', 'iconfont icon-qita', '1', '0', '7', '0', '2020-06-19 13:42:43', '2020-06-19 13:43:07');

-- ----------------------------
-- Table structure for replies
-- ----------------------------
DROP TABLE IF EXISTS `replies`;
CREATE TABLE `replies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_id` int(11) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `reply_type` tinyint(4) DEFAULT NULL,
  `reply_id` int(11) DEFAULT NULL,
  `created_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of replies
-- ----------------------------
INSERT INTO `replies` VALUES ('1', '4', '回复数据1', '1', '1', '4', '2020-07-07 17:45:09', null);

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL,
  `u_type` tinyint(4) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `u_login` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `avatar_url` varchar(255) DEFAULT NULL,
  `login_ip` varchar(255) DEFAULT NULL,
  `auth_token` varchar(255) DEFAULT NULL,
  `access_token` varchar(255) DEFAULT NULL,
  `current_login_time` datetime DEFAULT NULL,
  `created_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of roles
-- ----------------------------
INSERT INTO `roles` VALUES ('1', '1997334', '1', '刘体勇', 'l422720735', null, 'https://gitee.com/assets/no_portrait.png', '127.0.0.1', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTk5NzMzNCwidXNlcm5hbWUiOiLliJjkvZPli4ciLCJsb2dpbl9pcCI6IjEyNy4wLjAuMSIsImV4cCI6MTU5NDExODY0NywiaWF0IjoxNTk0MTE1MDQ3fQ._p75H7fYg5FpMaXx6kgrUKevdgkOHePkWSLLkQcwKc8', '5a30d6987d1b1a6a115959ccea40ed93', '2020-07-07 17:44:07', '2020-07-07 17:44:07', null);

-- ----------------------------
-- Table structure for systems
-- ----------------------------
DROP TABLE IF EXISTS `systems`;
CREATE TABLE `systems` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `top_id` bigint(20) DEFAULT NULL,
  `cover` varchar(255) DEFAULT NULL,
  `created_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of systems
-- ----------------------------
INSERT INTO `systems` VALUES ('1', '6', '0612_1592817870091_9,0612_1592817870092_1', '2020-06-22 17:04:53', '2020-07-01 15:24:00');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) DEFAULT NULL,
  `pass_word` varchar(255) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  `login_ip` varchar(255) DEFAULT NULL,
  `current_login_time` datetime DEFAULT NULL,
  `created_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `auth_token` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', '123456', '1c6a47df3c59184b447411d3764d9e56', '2', '[::1]:61357', '2020-07-03 14:06:07', '2020-06-23 15:17:15', '2020-07-03 14:06:07', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiIxMjM0NTYiLCJsb2dpbl9pcCI6Ils6OjFdOjYxMzU3IiwiZXhwIjoxNTkzNzU5OTY3LCJpYXQiOjE1OTM3NTYzNjd9.XyCKNjzBECy4-LKYZ4DZFqS_Ge1fllNDEwFpUWdKO40');

-- ----------------------------
-- Table structure for zans
-- ----------------------------
DROP TABLE IF EXISTS `zans`;
CREATE TABLE `zans` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type_id` int(11) DEFAULT NULL,
  `type` tinyint(4) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `state` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of zans
-- ----------------------------
