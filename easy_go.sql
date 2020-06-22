/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50710
 Source Host           : localhost:3306
 Source Schema         : easy_go

 Target Server Type    : MySQL
 Target Server Version : 50710
 File Encoding         : 65001

 Date: 22/06/2020 00:18:10
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of article_contents
-- ----------------------------
BEGIN;
INSERT INTO `article_contents` VALUES (1, 3, NULL, '<div><div><p>NG的实现最严谨，React的思想最正确，所以Vue是最好的前端框架。</p><p><br></p><p>其实我Vue用的最少，比较喜欢的是React，目前在用NG，所以我的观点应该不会有所偏颇？</p><p>NG的话，其实思路比较明确了特定情况下，一定会选这个，没有替代性，比如我现在正在做的多团队协作，不用NG的注入机制，不用TS的强校验，就没法完美解决，那就当然要用NG啦。</p><p>React是我最喜欢的，设计思路是王道，但是对使用者要求太高，对需求稳定性的要求也高，开发维护成本其实是3个框架中最高的，不过如果能用的好，效果也是最好的。</p><p>Vue提倡的渐进式的开发，而这点正是最贴切前端开发的思路，容易入手容易协同，能够更快速灵活的开发迭代，而这些正是Vue的成功之处，可以说是最具互联网思维的前端框架了。选择Vue不是因为它完善，而是因为它能包容不完善。所以其实Vue切换到TS，我是不看好的，等于把快速开发的看家本领给丢弃了，换回的强类型约束弥补不了。</p><p><br></p><p>再来看一下，所谓的那么多公司选择React，你可以去考虑一下他们切入的时间点和他们的项目，就能明白了，基本都是在Vue2成型之前，或者项目体量足够大的情况。</p><p>目前的创业公司基本都会选择Vue，因为3个框架中，Vue是最符合快速开发快速迭代的，人员培养又简单，后期维护又不复杂。</p><p>所以选择哪个框架完全是看需求来的啊，脱离需求谈技术都是耍流氓。</p></div></div>');
INSERT INTO `article_contents` VALUES (2, 3, NULL, '<div><div><p>NG的实现最严谨，React的思想最正确，所以Vue是最好的前端框架。</p><p><br></p><p>其实我Vue用的最少，比较喜欢的是React，目前在用NG，所以我的观点应该不会有所偏颇？</p><p>NG的话，其实思路比较明确了特定情况下，一定会选这个，没有替代性，比如我现在正在做的多团队协作，不用NG的注入机制，不用TS的强校验，就没法完美解决，那就当然要用NG啦。</p><p>React是我最喜欢的，设计思路是王道，但是对使用者要求太高，对需求稳定性的要求也高，开发维护成本其实是3个框架中最高的，不过如果能用的好，效果也是最好的。</p><p>Vue提倡的渐进式的开发，而这点正是最贴切前端开发的思路，容易入手容易协同，能够更快速灵活的开发迭代，而这些正是Vue的成功之处，可以说是最具互联网思维的前端框架了。选择Vue不是因为它完善，而是因为它能包容不完善。所以其实Vue切换到TS，我是不看好的，等于把快速开发的看家本领给丢弃了，换回的强类型约束弥补不了。</p><p><br></p><p>再来看一下，所谓的那么多公司选择React，你可以去考虑一下他们切入的时间点和他们的项目，就能明白了，基本都是在Vue2成型之前，或者项目体量足够大的情况。</p><p>目前的创业公司基本都会选择Vue，因为3个框架中，Vue是最符合快速开发快速迭代的，人员培养又简单，后期维护又不复杂。</p><p>所以选择哪个框架完全是看需求来的啊，脱离需求谈技术都是耍流氓。</p></div></div>');
INSERT INTO `article_contents` VALUES (3, 3, NULL, '<div><div><p>NG的实现最严谨，React的思想最正确，所以Vue是最好的前端框架。</p><p><br></p><p>其实我Vue用的最少，比较喜欢的是React，目前在用NG，所以我的观点应该不会有所偏颇？</p><p>NG的话，其实思路比较明确了特定情况下，一定会选这个，没有替代性，比如我现在正在做的多团队协作，不用NG的注入机制，不用TS的强校验，就没法完美解决，那就当然要用NG啦。</p><p>React是我最喜欢的，设计思路是王道，但是对使用者要求太高，对需求稳定性的要求也高，开发维护成本其实是3个框架中最高的，不过如果能用的好，效果也是最好的。</p><p>Vue提倡的渐进式的开发，而这点正是最贴切前端开发的思路，容易入手容易协同，能够更快速灵活的开发迭代，而这些正是Vue的成功之处，可以说是最具互联网思维的前端框架了。选择Vue不是因为它完善，而是因为它能包容不完善。所以其实Vue切换到TS，我是不看好的，等于把快速开发的看家本领给丢弃了，换回的强类型约束弥补不了。</p><p><br></p><p>再来看一下，所谓的那么多公司选择React，你可以去考虑一下他们切入的时间点和他们的项目，就能明白了，基本都是在Vue2成型之前，或者项目体量足够大的情况。</p><p>目前的创业公司基本都会选择Vue，因为3个框架中，Vue是最符合快速开发快速迭代的，人员培养又简单，后期维护又不复杂。</p><p>所以选择哪个框架完全是看需求来的啊，脱离需求谈技术都是耍流氓。</p></div></div>');
INSERT INTO `article_contents` VALUES (4, 4, NULL, '<p>tihisbfewf</p>');
COMMIT;

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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of article_types
-- ----------------------------
BEGIN;
INSERT INTO `article_types` VALUES (1, 'vue', 'vue', 2, 1, 1, 0, '2020-06-19 21:34:15', '2020-06-19 21:58:18');
INSERT INTO `article_types` VALUES (2, 'react', 'react', 2, 1, 2, 0, '2020-06-19 21:34:52', '2020-06-19 21:52:46');
INSERT INTO `article_types` VALUES (3, 'angular', 'angular', 2, 1, 3, 0, '2020-06-19 21:35:13', '2020-06-19 21:52:47');
INSERT INTO `article_types` VALUES (4, 'beego', 'beego', 3, 1, 4, 0, '2020-06-19 21:35:30', '2020-06-19 21:52:47');
INSERT INTO `article_types` VALUES (5, 'gin', 'gin', 3, 1, 5, 0, '2020-06-19 21:36:10', '2020-06-19 21:52:48');
INSERT INTO `article_types` VALUES (6, 'react native', 'rn', 4, 1, 6, 0, '2020-06-19 21:36:27', '2020-06-19 21:52:49');
INSERT INTO `article_types` VALUES (7, 'flutter', 'flutter', 4, 1, 7, 0, '2020-06-19 21:36:43', '2020-06-19 21:52:50');
COMMIT;

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
  `is_top` tinyint(1) DEFAULT NULL,
  `recommend` tinyint(1) DEFAULT NULL,
  `hot` tinyint(1) DEFAULT NULL,
  `sort` int(11) DEFAULT NULL,
  `state` tinyint(1) DEFAULT NULL,
  `created_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of articles
-- ----------------------------
BEGIN;
INSERT INTO `articles` VALUES (1, 3, 4, '', 'blog', NULL, '新版本博客', NULL, 'beego,golang', 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, '2020-06-19 22:00:09', '2020-06-19 23:55:11');
INSERT INTO `articles` VALUES (2, 2, 1, '', '如何评价Vue之于前端三大主流框架的地位 ?', NULL, 'NG的实现最严谨，React的思想最正确，所以Vue是最好的前端框架。其实我Vue用的最少，比较喜欢的是Re', NULL, NULL, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, '2020-06-19 22:01:15', '2020-06-19 22:05:08');
INSERT INTO `articles` VALUES (3, 1, NULL, '', '前端三大主流框架React、Vue、Angular的对比', NULL, '一、Angular，它两个版本都是强主张的，如果你用它，必须接受以下东西：必须使用它的模块机制必须使用它的依', NULL, NULL, 0, 0, 1, 1, 0, 1, 1, 1, 3, 0, '2020-06-19 22:02:36', '2020-06-20 00:31:05');
INSERT INTO `articles` VALUES (4, 1, NULL, '0612_1592754512142_6', 'ewfew', NULL, 'ewf', NULL, NULL, 0, 0, 0, 1, 0, 0, 0, 0, 4, 0, '2020-06-21 23:48:33', NULL);
COMMIT;

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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of menu_settings
-- ----------------------------
BEGIN;
INSERT INTO `menu_settings` VALUES (1, '首页', 'home', 'iconfont icon-home1', 1, 0, 1, 0, '2020-06-19 21:32:19', '2020-06-19 21:57:23');
INSERT INTO `menu_settings` VALUES (2, '前端', 'web', 'iconfont icon-h5', 1, 0, 2, 1, '2020-06-19 21:32:36', '2020-06-19 21:57:22');
INSERT INTO `menu_settings` VALUES (3, 'golang', 'go', 'iconfont icon-prog-golang', 1, 0, 3, 1, '2020-06-19 21:32:47', '2020-06-19 21:52:40');
INSERT INTO `menu_settings` VALUES (4, '移动端', 'mobile', 'iconfont icon-mobile', 1, 0, 4, 1, '2020-06-19 21:33:03', '2020-06-19 21:52:40');
INSERT INTO `menu_settings` VALUES (5, '区块链', 'block', 'iconfont icon-qukuailian', 1, 0, 5, 0, '2020-06-19 21:33:21', '2020-06-19 21:52:41');
INSERT INTO `menu_settings` VALUES (6, '其他', 'other', 'iconfont icon-qita', 1, 0, 6, 0, '2020-06-19 21:33:55', '2020-06-19 21:52:42');
COMMIT;

-- ----------------------------
-- Table structure for specials
-- ----------------------------
DROP TABLE IF EXISTS `specials`;
CREATE TABLE `specials` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `top_id` bigint(20) DEFAULT NULL,
  `created_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of specials
-- ----------------------------
BEGIN;
INSERT INTO `specials` VALUES (1, 3, '2020-06-19 23:55:17', '2020-06-20 00:31:05');
COMMIT;

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
  `cover` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES (1, '123456', '1c6a47df3c59184b447411d3764d9e56', 2, '[::1]:62475', '2020-06-21 23:05:31', '2020-06-19 21:31:49', '2020-06-21 23:05:31', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiIxMjM0NTYiLCJsb2dpbl9pcCI6Ils6OjFdOjYyNDc1IiwiZXhwIjoxNTkyNzU1NTMwLCJpYXQiOjE1OTI3NTE5MzB9.JLJb6CiP0SjTDLUuRxIndvtbMRaOjPKSChACiGiMx8I', NULL);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
