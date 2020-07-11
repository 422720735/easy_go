/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50723
Source Host           : localhost:3306
Source Database       : easy_go

Target Server Type    : MYSQL
Target Server Version : 50723
File Encoding         : 65001

Date: 2020-07-11 20:44:30
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
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of articles
-- ----------------------------
INSERT INTO `articles` VALUES ('1', '2', '1', '', 'vue自定义卡片', null, '自定义卡片', null, null, '1', '0', '0', '1', '0', '0', '0', '1', '0', '2020-07-01 09:52:51', '2020-07-11 19:40:57', null, null);
INSERT INTO `articles` VALUES ('2', '2', '7', '', 'js ajax请求', null, '23432423', null, '', '1', '0', '0', '1', '0', '0', '1', '2', '0', '2020-07-01 10:03:21', '2020-07-11 19:40:54', null, null);
INSERT INTO `articles` VALUES ('3', '3', '8', '', 'beego', null, '231', null, '', '1', '0', '0', '1', '0', '0', '0', '3', '0', '2020-07-01 10:08:01', '2020-07-11 19:40:49', null, null);
INSERT INTO `articles` VALUES ('4', '3', '9', '', 'golang部署', null, 'golang部署', null, 'golang,html,css3', '6', '1', '0', '1', '0', '0', '0', '4', '0', '2020-07-01 13:56:54', '2020-07-11 19:40:51', null, null);
INSERT INTO `articles` VALUES ('5', '3', '8', '', 'golang', null, 'gorm', null, null, '78', '1', '0', '1', '0', '0', '0', '5', '0', '2020-07-01 15:23:37', '2020-07-11 19:40:46', null, null);
INSERT INTO `articles` VALUES ('6', '5', null, '', 'sql', null, 'sql', null, null, '1', '1', '0', '1', '0', '0', '0', '6', '0', '2020-07-01 15:24:00', '2020-07-11 19:40:45', null, null);
INSERT INTO `articles` VALUES ('7', '2', '1', '', 'sass', null, 'Sass 安装本章节我们主要介绍 Sass 的安装与使用。NPM 安装我们可以使用 npm（NPM 使用介绍', null, null, '1', '0', '0', '1', '0', '0', '0', '7', '0', '2020-07-01 15:24:54', '2020-07-11 19:40:45', null, null);
INSERT INTO `articles` VALUES ('8', '7', null, '', 'scss', null, '为文章内含有很多sass代码，如需自己动手查看编译结果，推荐使用sassmeister这款在线编译工具，方便', null, null, '1', '0', '0', '1', '0', '0', '0', '8', '0', '2020-07-01 15:25:21', '2020-07-11 19:40:44', null, null);
INSERT INTO `articles` VALUES ('9', '5', null, '', 'link', null, 'sfsf', null, null, '1', '1', '0', '1', '0', '0', '0', '9', '0', '2020-07-01 15:25:56', '2020-07-11 19:40:43', null, null);
INSERT INTO `articles` VALUES ('10', '7', null, '', 'theme', null, 'te', null, null, '1', '1', '0', '1', '0', '0', '0', '10', '0', '2020-07-01 15:26:17', '2020-07-11 19:40:43', null, null);
INSERT INTO `articles` VALUES ('11', '2', '5', '', 'External use', null, '234234', null, null, '6', '1', '0', '1', '0', '0', '0', '11', '0', '2020-07-01 15:26:54', '2020-07-11 19:40:42', null, null);
INSERT INTO `articles` VALUES ('12', '7', null, '', '阿隆索', null, '阿隆索', null, null, '1', '0', '0', '1', '0', '0', '0', '12', '0', '2020-07-09 11:26:03', '2020-07-11 19:40:41', null, '0');
INSERT INTO `articles` VALUES ('13', '2', '1', '0612_1594467770518_2', 'vue2.0 + elementUI 后台管理平台', null, '基于vue2.0 +vuex+ element-ui后台管理系统', null, null, '2', '1', '1', '1', '0', '0', '0', '13', '0', '2020-07-11 19:42:51', '2020-07-11 20:08:39', null, '0');
INSERT INTO `articles` VALUES ('14', '2', '1', '0612_1594468433616_2', 'xmall-front', null, '基于Vue开发的XMall商城前台页面 PC端', null, null, '1', '1', '1', '1', '0', '1', '1', '14', '0', '2020-07-11 19:53:54', '2020-07-11 20:08:36', null, '0');
INSERT INTO `articles` VALUES ('15', '2', '1', '0612_1594468701848_5', 'renren-fast-vue', null, 'renren-fast-vue基于vue、element-ui构建开发，实现renren-fast后台管理前', null, null, '0', '1', '1', '1', '0', '0', '0', '15', '0', '2020-07-11 19:58:22', '2020-07-11 20:08:35', null, '0');
INSERT INTO `articles` VALUES ('16', '2', '1', '0612_1594468979200_1', 'vue-amap', null, '基于 Vue 2.x 和高德地图的地图组件', null, 'vue', '1', '1', '1', '1', '0', '0', '0', '16', '0', '2020-07-11 20:02:59', '2020-07-11 20:08:34', null, '0');
INSERT INTO `articles` VALUES ('17', '2', '1', '0612_1594469234378_0', 'gin-vue-admin', null, '基于gin+vue搭建的后台管理系统框架，集成jwt鉴权，权限管理，动态路由，分页封装，多点登录拦截，资源权', null, 'gin,vue', '1', '1', '1', '1', '0', '0', '0', '17', '0', '2020-07-11 20:07:15', '2020-07-11 20:08:32', null, '0');
INSERT INTO `articles` VALUES ('22', '2', '4', '0612_1594469789778_4', ' react-native-guide', null, 'React Native指南汇集了各类react-native学习资源、开源App和组件', null, 'react native', '0', '1', '0', '1', '0', '1', '1', '18', '0', '2020-07-11 20:16:30', null, null, '0');
INSERT INTO `articles` VALUES ('23', '2', '5', '0612_1594469977203_9', 'Flutter版 WanAndroid App', null, '基于Google Flutter的WanAndroid客户端，支持Android和iOS。包括', null, 'flutter', '0', '1', '0', '1', '0', '1', '1', '19', '0', '2020-07-11 20:19:37', null, null, '0');

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
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of article_contents
-- ----------------------------
INSERT INTO `article_contents` VALUES ('1', '1', null, '<pre><code>&lt;template&gt;<br>    &lt;a-card<br>        v-loading=\"loading &amp;&amp; initLoading\"<br>        element-loading-text=\"拼命加载中\"<br>    ');
INSERT INTO `article_contents` VALUES ('2', '2', null, '<h1>配置 onchange 函数</h1><p>配置<code>onchange</code>函数之后');
INSERT INTO `article_contents` VALUES ('3', '3', null, '<p>npm install quill@1.3.4&nbsp;</p><pre><code>&lt;!');
INSERT INTO `article_contents` VALUES ('4', '4', null, '# studygolang\n\n[![Build Status](https://travis-ci.org/studygolang/studygolang.svg?branch=master)](https://travis-ci.or');
INSERT INTO `article_contents` VALUES ('5', '5', null, '## admin/template/base 暂时废弃\n\n\n\n# 使');
INSERT INTO `article_contents` VALUES ('6', '6', null, '```sql\n-- SELECT articles.*,IFNULL(systems.top_id, 0) FROM articles LEFT JOIN systems ON articles.id = systems.id  ORDER BY systems.created_time desc,articles.hot desc \n\n-- SELECT *, IFNULL(systems.to');
INSERT INTO `article_contents` VALUES ('7', '7', null, '<h1>Sass 安装</h1><p>本章节我们主要介绍 Sass 的安装与使用。</p><h3>NPM 安装</h3><p>我们可以使用 npm（NPM 使用介绍）来安装 Sass。</p><pre>npm install -g sass</pre><p><strong>注：</strong>国内 npm ');
INSERT INTO `article_contents` VALUES ('8', '8', null, '<p>为文章内含有很多sass代码，如需自己动手查看编译结果，推荐使用<a ');
INSERT INTO `article_contents` VALUES ('9', '9', null, '{% highlight ruby %} name = \'Storm\' real_name = \'张奇\'\n\ncompany = \'薄荷信息科技');
INSERT INTO `article_contents` VALUES ('10', '10', null, '[T');
INSERT INTO `article_contents` VALUES ('11', '11', null, 'TOC]\n\n### External use of toolbar handlers / modal dialog\n\n```javascript \ntestEditor =');
INSERT INTO `article_contents` VALUES ('12', '12', null, '<p style=\"text-align: center;\"><img src=\"//n.sinaimg.cn/sports/transform/210/w650h360/202007');
INSERT INTO `article_contents` VALUES ('13', '13', null, '# vue2-management-platform（请点右');
INSERT INTO `article_contents` VALUES ('14', '14', null, '## XMall-Front\n### 基于Vue开发的XMall商城前台页面\n##');
INSERT INTO `article_contents` VALUES ('15', '15', null, '## renren-fast-vue\n- renren-fast-vue基于vue、element-ui构建开发，实现[renren-fast](https');
INSERT INTO `article_contents` VALUES ('16', '16', null, '<p align=\"center\">\n  <img src=\"https://cdn.rawgit.com/E');
INSERT INTO `article_contents` VALUES ('17', '17', null, '﻿\n<div align=center>\n<img src=\"http://qmplusimg.henrongyi.');
INSERT INTO `article_contents` VALUES ('18', '22', null, '# React-Native学习指南\n本指南');
INSERT INTO `article_contents` VALUES ('19', '23', null, '# Flutter版 WanAndroid App.\n\n本项目包含启动页，引导页，主题色，国际化，Bloc，RxDart。拥有较好的项目结构，比较规范的代码。 App拥有精致的UI界面，统');

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
INSERT INTO `article_types` VALUES ('5', 'wexx', 'weex', '2', '1', '7', '0', '2020-06-19 15:08:06', '2020-06-26 00:16:57');
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
  `from_uid` int(11) DEFAULT NULL,
  `comment_state` tinyint(1) DEFAULT NULL,
  `created_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of comments
-- ----------------------------
INSERT INTO `comments` VALUES ('1', '5', '人生苦短，少编程。', '2', '1', '2020-07-10 11:03:21', null);
INSERT INTO `comments` VALUES ('2', '5', '还嫌头发多？', '2', '1', '2020-07-10 11:03:39', null);
INSERT INTO `comments` VALUES ('3', '5', '33333', '3', '1', '2020-07-10 17:55:13', null);
INSERT INTO `comments` VALUES ('4', '5', '42344', '1', '1', '2020-07-10 22:03:38', null);
INSERT INTO `comments` VALUES ('5', '5', '5555', '1', '1', '2020-07-10 22:26:06', null);
INSERT INTO `comments` VALUES ('6', '5', '3554543', '1', '1', '2020-07-10 22:26:14', null);
INSERT INTO `comments` VALUES ('7', '5', '555555', '1', '1', '2020-07-10 22:28:53', null);
INSERT INTO `comments` VALUES ('8', '5', '234242342', '1', '1', '2020-07-10 22:29:30', null);
INSERT INTO `comments` VALUES ('9', '5', 'rwrweew', '1', '1', '2020-07-10 23:26:49', null);
INSERT INTO `comments` VALUES ('10', '5', 'wrwerwe', '1', '1', '2020-07-10 23:26:51', null);
INSERT INTO `comments` VALUES ('11', '5', 'werewew', '1', '1', '2020-07-10 23:26:53', null);
INSERT INTO `comments` VALUES ('12', '5', '风云争霸', '1', '1', '2020-07-11 00:14:04', null);
INSERT INTO `comments` VALUES ('13', '5', 'js 对象合并', '1', '1', '2020-07-11 00:15:05', null);
INSERT INTO `comments` VALUES ('14', '5', '2342', '1', '1', '2020-07-11 00:20:21', null);
INSERT INTO `comments` VALUES ('15', '5', '32133', '1', '1', '2020-07-11 00:21:00', null);
INSERT INTO `comments` VALUES ('16', '5', '46456', '1', '1', '2020-07-11 00:26:34', null);
INSERT INTO `comments` VALUES ('17', '5', '4232333333333333', '1', '1', '2020-07-11 00:28:36', null);
INSERT INTO `comments` VALUES ('18', '5', '324243242432432555', '1', '1', '2020-07-11 00:34:20', null);
INSERT INTO `comments` VALUES ('19', '5', '谁带你飞看来你是法律可能是浪费了可能否看上你', '1', '1', '2020-07-11 00:35:22', null);
INSERT INTO `comments` VALUES ('20', '5', '我我哈佛is还放假哦i', '1', '1', '2020-07-11 00:36:38', null);
INSERT INTO `comments` VALUES ('21', '5', '二恶烷热我认为二', '1', '1', '2020-07-11 00:36:59', null);
INSERT INTO `comments` VALUES ('22', '5', '4333432432432432424', '1', '1', '2020-07-11 00:38:11', null);
INSERT INTO `comments` VALUES ('23', '5', '特尔特润体乳特瑞特让他', '1', '1', '2020-07-11 00:38:28', null);
INSERT INTO `comments` VALUES ('24', '5', '24242342424', '1', '1', '2020-07-11 00:39:02', null);
INSERT INTO `comments` VALUES ('25', '5', '53454353535', '1', '1', '2020-07-11 00:39:05', null);
INSERT INTO `comments` VALUES ('26', '5', '5232523523532', '1', '1', '2020-07-11 00:39:41', null);
INSERT INTO `comments` VALUES ('27', '5', '24324242432424324324324324', '1', '1', '2020-07-11 00:40:18', null);
INSERT INTO `comments` VALUES ('28', '5', '234322232', '1', '1', '2020-07-11 00:42:40', null);
INSERT INTO `comments` VALUES ('29', '5', '234324324', '1', '1', '2020-07-11 00:42:43', null);
INSERT INTO `comments` VALUES ('30', '5', '35435435435436456546546456', '1', '1', '2020-07-11 00:42:47', null);
INSERT INTO `comments` VALUES ('31', '5', '6456456546544564645', '1', '1', '2020-07-11 00:42:50', null);
INSERT INTO `comments` VALUES ('32', '5', '2342344232342323234243342342433432423443243242343434', '1', '1', '2020-07-11 00:42:54', null);

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
-- Table structure for oauth_users
-- ----------------------------
DROP TABLE IF EXISTS `oauth_users`;
CREATE TABLE `oauth_users` (
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of oauth_users
-- ----------------------------
INSERT INTO `oauth_users` VALUES ('1', '1997334', '1', '刘体勇', 'l422720735', null, 'https://gitee.com/assets/no_portrait.png', '127.0.0.1', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTk5NzMzNCwidXNlcm5hbWUiOiLliJjkvZPli4ciLCJsb2dpbl9pcCI6IjEyNy4wLjAuMSIsImV4cCI6MTU5NDQ1MjUwMSwiaWF0IjoxNTk0NDQ4OTAxfQ.ASxagPplzJ4fA8MTGM6_bVzcVqhHaK_ByJlLsXSEmwY', '8721544f65c7b4ce43932d1a36d2605d', '2020-07-11 14:28:21', '2020-07-10 10:59:18', '2020-07-11 14:28:21');
INSERT INTO `oauth_users` VALUES ('2', '32890951', '2', '422720735', '422720735', '中国四川省成都市青白江区祥福镇', 'https://avatars2.githubusercontent.com/u/32890951?v=4', '127.0.0.1', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzI4OTA5NTEsInVzZXJuYW1lIjoiNDIyNzIwNzM1IiwibG9naW5faXAiOiIxMjcuMC4wLjEiLCJleHAiOjE1OTQ0NDE1NzEsImlhdCI6MTU5NDQzNzk3MX0.9zm4SyCWXDSDcP5K9c8Me3VtASVF-Mf6zQsFxC82Src', '0874065c5c9ca4b7cacbc8fca7e67cff6cca48d3&expires_in=28800&refresh_token=r1.038e50b1f67c56ca1b861af8c8296530d11f91e8472a590e8afc2aac8ff712b28c03064823e85e80&refresh_token_expires_in=15897600', '2020-07-11 11:26:11', '2020-07-10 11:02:31', '2020-07-11 11:26:11');
INSERT INTO `oauth_users` VALUES ('3', '1394969', '1', 'jokerLeo', 'proLeo', null, 'https://gitee.com/assets/no_portrait.png', '127.0.0.1', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTM5NDk2OSwidXNlcm5hbWUiOiJqb2tlckxlbyIsImxvZ2luX2lwIjoiMTI3LjAuMC4xIiwiZXhwIjoxNTk0Mzc3MDgzLCJpYXQiOjE1OTQzNzM0ODN9._lIDloM5P2NanNgmW3RHT4iqtVIyGoIwfrU1_OaXVlI', 'a9934592111b73eed28902a2701cb1f3', '2020-07-10 17:31:23', '2020-07-10 11:07:17', '2020-07-10 17:31:23');
INSERT INTO `oauth_users` VALUES ('4', '47135694', '2', '1561097459', '1561097459', '中国四川省成都市青白江区祥福', 'https://avatars1.githubusercontent.com/u/47135694?v=4', '127.0.0.1', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcxMzU2OTQsInVzZXJuYW1lIjoiMTU2MTA5NzQ1OSIsImxvZ2luX2lwIjoiMTI3LjAuMC4xIiwiZXhwIjoxNTk0MzU2MTkyLCJpYXQiOjE1OTQzNTI1OTJ9.icIaVwN8Z2pByyOJbM2lVf5i9-QDA5joJorcuO_3AjA', '1bf7e0a43a0c7d2d91785b68acdc302d08039e78&expires_in=28800&refresh_token=r1.6a9899445b7351938db7d30523967a45c0a6058f96e8b2dc89611b094250084af425200bd2be6731&refresh_token_expires_in=15897600', '2020-07-10 11:37:06', '2020-07-10 11:37:23', null);
INSERT INTO `oauth_users` VALUES ('5', '1565161', '2', '模拟数据1', '4191515122', null, 'https://avatars1.githubusercontent.com/u/47135694?v=4', '127.0.0.1', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcxMzU2OTQsInVzZXJuYW1lIjoiMTU2MTA5NzQ1OSIsImxvZ2luX2lwIjoiMTI3LjAuMC4xIiwiZXhwIjoxNTk0MzU2MTkyLCJpYXQiOjE1OTQzNTI1OTJ9.icIaVwN8Z2pByyOJbM2lVf5i9-QDA5joJorcuO_3AjA', '1bf7e0a43a0c7d2d91785b68acdc302d08039e78&expires_in=28800&refresh_token=r1.6a9899445b7351938db7d30523967a45c0a6058f96e8b2dc89611b094250084af425200bd2be6731&refresh_token_expires_in=15897600', '2020-07-10 11:43:12', '2020-07-10 11:43:12', null);
INSERT INTO `oauth_users` VALUES ('6', '4984999', '2', '模拟数据2', '665464646', null, 'https://gitee.com/assets/no_portrait.png', '127.0.0.1', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcxMzU2OTQsInVzZXJuYW1lIjoiMTU2MTA5NzQ1OSIsImxvZ2luX2lwIjoiMTI3LjAuMC4xIiwiZXhwIjoxNTk0MzU2MTkyLCJpYXQiOjE1OTQzNTI1OTJ9.icIaVwN8Z2pByyOJbM2lVf5i9-QDA5joJorcuO_3AjA', '1bf7e0a43a0c7d2d91785b68acdc302d08039e78&expires_in=28800&refresh_token=r1.6a9899445b7351938db7d30523967a45c0a6058f96e8b2dc89611b094250084af425200bd2be6731&refresh_token_expires_in=15897600', '2020-07-10 11:47:17', '2020-07-10 11:47:22', null);
INSERT INTO `oauth_users` VALUES ('7', '4984998', '2', '模拟数据3', '161651665', null, 'https://gitee.com/assets/no_portrait.png', '127.0.0.1', 'tB75Tssj0m30pIn9fSatsdUaSnE', '1bf7e0a43a0c7d2d91785b68acdc302d08039e78&expires_in=28800&refresh_token=r1.6a9899445b7351938db7d30523967a45c0a6058f96e8b2dc89611b094250084af425200bd2be6731&refresh_token_expires_in=15897600', '2020-07-10 12:23:59', '2020-07-10 12:24:05', null);
INSERT INTO `oauth_users` VALUES ('8', '1997333', '1', '模拟数据4', '161666644', null, 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg', '127.0.0.1', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTk5NzMzNCwidXNlcm5hbWUiOiLliJjkvZPli4ciLCJsb2dpbl9pcCI6IjEyNy4wLjAuMSIsImV4cCI6MTU5NDM1MzU1NywiaWF0IjoxNTk0MzQ5OTU3fQ.Gf0YSdR-4j69DTxZGxg-Zl8ySas_d3qyd9w-BHOdpoQ', '1940831d71a88e246ae9793375609aa2', '2020-07-10 12:25:08', '2020-07-10 12:25:12', null);

-- ----------------------------
-- Table structure for praises
-- ----------------------------
DROP TABLE IF EXISTS `praises`;
CREATE TABLE `praises` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type_id` int(11) DEFAULT NULL,
  `type` tinyint(4) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `state` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of praises
-- ----------------------------
INSERT INTO `praises` VALUES ('1', '5', '1', '1', '1');
INSERT INTO `praises` VALUES ('2', '11', '1', '1', '1');
INSERT INTO `praises` VALUES ('3', '4', '1', '1', '1');

-- ----------------------------
-- Table structure for replies
-- ----------------------------
DROP TABLE IF EXISTS `replies`;
CREATE TABLE `replies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_id` int(11) DEFAULT NULL,
  `reply_id` int(11) DEFAULT NULL,
  `reply_type` tinyint(4) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `from_uid` int(11) DEFAULT NULL,
  `to_uid` int(11) DEFAULT NULL,
  `created_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of replies
-- ----------------------------
INSERT INTO `replies` VALUES ('1', '2', '2', '1', '第一条回复', '8', '2', '2020-07-10 12:34:01', null);
INSERT INTO `replies` VALUES ('2', '2', '2', '1', '第二条回复', '7', '2', '2020-07-10 12:34:28', null);
INSERT INTO `replies` VALUES ('3', '2', '2', '2', '第三条回复的回复', '6', '7', '2020-07-10 12:35:58', null);
INSERT INTO `replies` VALUES ('4', '2', '3', '2', '第四条回复的回复', '5', '6', '2020-07-10 12:36:29', null);
INSERT INTO `replies` VALUES ('5', '2', '4', '2', '第五条回复的回复', '4', '5', '2020-07-10 12:37:02', null);
INSERT INTO `replies` VALUES ('6', '1', '1', '1', '第六条回复', '3', '2', '2020-07-10 12:38:10', null);
INSERT INTO `replies` VALUES ('17', '1', '6', '2', '42424324', '3', '0', '2020-07-10 17:43:58', null);
INSERT INTO `replies` VALUES ('18', '1', '6', '2', '313123', '3', '0', '2020-07-10 17:45:46', null);
INSERT INTO `replies` VALUES ('19', '1', '6', '2', '3223', '3', '0', '2020-07-10 17:58:02', null);
INSERT INTO `replies` VALUES ('20', '4', '4', '1', '455', '1', '0', '2020-07-10 22:05:13', null);
INSERT INTO `replies` VALUES ('21', '4', '4', '2', '31333', '1', '0', '2020-07-10 22:22:13', null);
INSERT INTO `replies` VALUES ('22', '4', '4', '2', '432443', '1', '0', '2020-07-10 22:22:36', null);
INSERT INTO `replies` VALUES ('23', '4', '4', '2', '332323', '1', '0', '2020-07-10 22:23:38', null);
INSERT INTO `replies` VALUES ('24', '4', '4', '2', '45435', '1', '0', '2020-07-10 22:24:48', null);
INSERT INTO `replies` VALUES ('25', '3', '3', '1', '3534543', '1', '0', '2020-07-11 00:53:34', null);
INSERT INTO `replies` VALUES ('26', '3', '3', '2', '3454354354', '1', '0', '2020-07-11 00:56:04', null);
INSERT INTO `replies` VALUES ('27', '3', '3', '2', '34535', '1', '0', '2020-07-11 01:00:48', null);
INSERT INTO `replies` VALUES ('28', '32', '32', '1', '32424324', '2', '0', '2020-07-11 01:01:47', null);
INSERT INTO `replies` VALUES ('29', '29', '29', '1', '222', '2', '0', '2020-07-11 01:08:21', null);
INSERT INTO `replies` VALUES ('30', '26', '26', '1', '4564', '2', '0', '2020-07-11 01:08:33', null);
INSERT INTO `replies` VALUES ('31', '24', '24', '1', '53453535', '2', '0', '2020-07-11 01:09:38', null);
INSERT INTO `replies` VALUES ('32', '26', '26', '2', '23432423432', '2', '0', '2020-07-11 01:27:36', null);
INSERT INTO `replies` VALUES ('33', '29', '29', '2', '234324', '2', '0', '2020-07-11 01:27:54', null);
INSERT INTO `replies` VALUES ('34', '32', '32', '2', '234324324324', '2', '0', '2020-07-11 01:28:17', null);
INSERT INTO `replies` VALUES ('35', '32', '32', '2', '23432424', '2', '0', '2020-07-11 01:33:42', null);
INSERT INTO `replies` VALUES ('36', '21', '21', '1', '234324', '2', '0', '2020-07-11 01:33:52', null);
INSERT INTO `replies` VALUES ('37', '32', '32', '2', '34534534', '2', '0', '2020-07-11 01:35:00', null);
INSERT INTO `replies` VALUES ('38', '28', '28', '1', '35345', '2', '0', '2020-07-11 01:35:08', null);
INSERT INTO `replies` VALUES ('39', '22', '22', '1', '345435354', '2', '0', '2020-07-11 01:35:20', null);
INSERT INTO `replies` VALUES ('40', '28', '28', '2', '2342424', '2', '0', '2020-07-11 01:35:41', null);
INSERT INTO `replies` VALUES ('41', '32', '32', '2', '234242', '2', '0', '2020-07-11 01:36:00', null);
INSERT INTO `replies` VALUES ('42', '23', '23', '1', '23424', '2', '0', '2020-07-11 01:36:10', null);
INSERT INTO `replies` VALUES ('43', '32', '32', '2', '23432432', '2', '0', '2020-07-11 01:36:28', null);
INSERT INTO `replies` VALUES ('44', '22', '22', '2', '23432432', '2', '0', '2020-07-11 01:38:35', null);
INSERT INTO `replies` VALUES ('45', '23', '23', '1', '432432', '2', '0', '2020-07-11 01:38:56', null);
INSERT INTO `replies` VALUES ('46', '31', '31', '1', '424324', '2', '0', '2020-07-11 01:39:22', null);
INSERT INTO `replies` VALUES ('47', '13', '13', '1', '2343243', '2', '0', '2020-07-11 01:39:31', null);
INSERT INTO `replies` VALUES ('48', '27', '27', '1', '2332423', '2', '0', '2020-07-11 01:39:38', null);
INSERT INTO `replies` VALUES ('49', '28', '28', '2', '3535', '2', '0', '2020-07-11 01:42:50', null);
INSERT INTO `replies` VALUES ('50', '32', '32', '2', '345435353', '2', '0', '2020-07-11 01:43:14', null);
INSERT INTO `replies` VALUES ('51', '3', '3', '1', '424234324', '1', '0', '2020-07-11 02:08:08', null);
INSERT INTO `replies` VALUES ('52', '3', '3', '1', '23432424', '1', '0', '2020-07-11 02:09:31', null);
INSERT INTO `replies` VALUES ('53', '3', '3', '1', '345353', '1', '0', '2020-07-11 02:10:57', null);
INSERT INTO `replies` VALUES ('54', '3', '3', '1', '456456446', '1', '0', '2020-07-11 02:11:54', null);
INSERT INTO `replies` VALUES ('55', '3', '3', '1', '345345435', '1', '0', '2020-07-11 02:15:14', null);
INSERT INTO `replies` VALUES ('56', '3', '3', '1', '243243424', '1', '0', '2020-07-11 02:16:45', null);
INSERT INTO `replies` VALUES ('57', '3', '3', '1', '2342424', '1', '0', '2020-07-11 02:19:12', null);
INSERT INTO `replies` VALUES ('58', '3', '3', '1', '4543543543543', '1', '0', '2020-07-11 02:20:48', null);
INSERT INTO `replies` VALUES ('59', '3', '3', '1', '34543535', '1', '0', '2020-07-11 02:25:11', null);
INSERT INTO `replies` VALUES ('60', '3', '3', '1', '4324324324', '1', '0', '2020-07-11 02:27:35', null);
INSERT INTO `replies` VALUES ('61', '3', '3', '1', '3121213', '1', '0', '2020-07-11 02:34:05', null);
INSERT INTO `replies` VALUES ('62', '3', '3', '1', '2343242424', '1', '0', '2020-07-11 02:38:17', null);
INSERT INTO `replies` VALUES ('63', '3', '3', '1', '234444444423233333332', '1', '0', '2020-07-11 02:39:36', null);
INSERT INTO `replies` VALUES ('64', '3', '3', '1', '2342423423534265436股份的的非官方的为广大的风格', '1', '0', '2020-07-11 02:40:14', null);
INSERT INTO `replies` VALUES ('65', '3', '3', '1', '2342423423534265436股份的的非官方的为广大的风格', '1', '0', '2020-07-11 02:40:15', null);
INSERT INTO `replies` VALUES ('66', '3', '3', '1', '345435345435353543股份第三个', '1', '0', '2020-07-11 02:42:54', null);
INSERT INTO `replies` VALUES ('67', '3', '3', '1', '345435345435353543股份第三个特特他', '1', '0', '2020-07-11 02:43:04', null);
INSERT INTO `replies` VALUES ('68', '3', '3', '1', '35443535343434543', '1', '0', '2020-07-11 02:43:46', null);
INSERT INTO `replies` VALUES ('69', '3', '3', '1', '45654654645646', '1', '0', '2020-07-11 02:44:08', null);
INSERT INTO `replies` VALUES ('70', '3', '3', '1', '2342342424', '1', '0', '2020-07-11 02:45:20', null);
INSERT INTO `replies` VALUES ('71', '3', '3', '1', '23423424323', '1', '0', '2020-07-11 02:45:55', null);
INSERT INTO `replies` VALUES ('72', '3', '3', '1', '绕弯儿无若无若', '1', '0', '2020-07-11 02:46:24', null);
INSERT INTO `replies` VALUES ('73', '3', '3', '2', '6464664', '1', '0', '2020-07-11 02:48:31', null);
INSERT INTO `replies` VALUES ('74', '3', '3', '2', '6464664', '1', '0', '2020-07-11 02:48:37', null);
INSERT INTO `replies` VALUES ('75', '32', '32', '1', '4223324', '2', '0', '2020-07-11 11:26:18', null);
INSERT INTO `replies` VALUES ('76', '32', '32', '1', '42233242343242324', '2', '0', '2020-07-11 11:26:23', null);
INSERT INTO `replies` VALUES ('77', '32', '32', '1', '422332423432423242243244432423432424', '2', '0', '2020-07-11 11:26:30', null);
INSERT INTO `replies` VALUES ('78', '32', '32', '2', '外网迭代', '2', '0', '2020-07-11 11:26:39', null);
INSERT INTO `replies` VALUES ('79', '32', '32', '1', '43432443', '2', '0', '2020-07-11 11:26:49', null);
INSERT INTO `replies` VALUES ('80', '32', '32', '1', '24234', '2', '0', '2020-07-11 11:27:21', null);
INSERT INTO `replies` VALUES ('81', '32', '32', '1', '23424342', '2', '0', '2020-07-11 11:27:46', null);
INSERT INTO `replies` VALUES ('82', '32', '32', '1', '我进行测试回复信息', '2', '0', '2020-07-11 11:29:29', null);
INSERT INTO `replies` VALUES ('83', '32', '32', '1', '测试信息二', '2', '0', '2020-07-11 11:30:26', null);
INSERT INTO `replies` VALUES ('84', '32', '32', '2', '肉我让我让', '2', '0', '2020-07-11 11:30:44', null);

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
INSERT INTO `systems` VALUES ('1', null, '0612_1592817870091_9,0612_1592817870092_1', '2020-06-22 17:04:53', '2020-07-11 20:08:26');

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
INSERT INTO `users` VALUES ('1', '123456', '1c6a47df3c59184b447411d3764d9e56', '2', '[::1]:50947', '2020-07-11 19:40:28', '2020-06-23 15:17:15', '2020-07-11 19:40:28', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiIxMjM0NTYiLCJsb2dpbl9pcCI6Ils6OjFdOjUwOTQ3IiwiZXhwIjoxNTk0NDcxMjI3LCJpYXQiOjE1OTQ0Njc2Mjd9.CSlbQasE5cXMytPN7oQECSrPZFYaYR9m5MvUGeYmBEI');
