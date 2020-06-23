/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50727
Source Host           : localhost:3306
Source Database       : easy_go

Target Server Type    : MYSQL
Target Server Version : 50727
File Encoding         : 65001

Date: 2020-06-23 19:14:26
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
  `is_top` tinyint(1) DEFAULT NULL,
  `recommend` tinyint(1) DEFAULT NULL,
  `hot` tinyint(1) DEFAULT NULL,
  `sort` int(11) DEFAULT NULL,
  `state` tinyint(1) DEFAULT NULL,
  `created_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of articles
-- ----------------------------
INSERT INTO `articles` VALUES ('1', '1', null, '', 'markdown', null, 'markdown', null, null, '0', '1', '0', '1', '0', '0', '0', '0', '1', '0', '2020-06-22 18:01:54', null);
INSERT INTO `articles` VALUES ('2', '1', null, '', 'Spin 加载中', null, 'Spin 加载中', null, null, '0', '0', '0', '1', '0', '0', '0', '0', '2', '0', '2020-06-22 18:07:18', '2020-06-23 18:07:42');
INSERT INTO `articles` VALUES ('3', '1', null, '', 'MySQL中查询时间最大的一条记录', null, '\nMySQL中查询时间最大的一条记录\n', null, null, '0', '0', '0', '1', '0', '0', '0', '0', '3', '0', '2020-06-22 18:29:13', null);

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of article_contents
-- ----------------------------
INSERT INTO `article_contents` VALUES ('1', '2', null, '<h1 id=\"Spin-\"><pre><code>&lt;template&gt;<br>  &lt;div&gt;<br>    &lt;a-spin /&gt;<br>  &lt;/div&gt;<br>&lt;/template&gt;</code></pre><p><br></p></h1>');
INSERT INTO `article_contents` VALUES ('2', '2', null, '<h1 id=\"Spin-\"><pre><code>&lt;template&gt;<br>  &lt;div&gt;<br>    &lt;a-spin /&gt;<br>  &lt;/div&gt;<br>&lt;/template&gt;</code></pre><p><br></p></h1>');
INSERT INTO `article_contents` VALUES ('3', '3', null, '<pre><code>SELECT ip,MAX(act_time) FROM users_login GROUP BY login_id;</code></pre><p><br></p>');

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
INSERT INTO `article_types` VALUES ('1', 'vue', 'vue', '2', '1', '2', '0', '2020-06-19 14:53:56', '2020-06-19 18:17:13');
INSERT INTO `article_types` VALUES ('2', 'react', 'react', '2', '1', '1', '0', '2020-06-19 15:06:07', '2020-06-19 18:17:13');
INSERT INTO `article_types` VALUES ('3', 'typescript', 'ts', '2', '1', '3', '0', '2020-06-19 15:07:25', '2020-06-19 18:10:19');
INSERT INTO `article_types` VALUES ('4', 'react native', 'rn', '2', '1', '4', '0', '2020-06-19 15:07:42', '2020-06-19 18:10:21');
INSERT INTO `article_types` VALUES ('5', 'wexx', 'wexx', '2', '1', '6', '0', '2020-06-19 15:08:06', '2020-06-19 18:17:20');
INSERT INTO `article_types` VALUES ('6', 'gin', 'gin', '3', '1', '5', '0', '2020-06-19 15:08:20', '2020-06-19 18:17:20');
INSERT INTO `article_types` VALUES ('7', 'javascript', 'js', '2', '1', '7', '0', '2020-06-19 15:11:46', '2020-06-19 17:59:08');
INSERT INTO `article_types` VALUES ('8', 'gorm', 'gorm', '3', '1', '8', '0', '2020-06-19 15:21:29', '2020-06-19 17:59:08');
INSERT INTO `article_types` VALUES ('9', 'docker', 'docker', '3', '1', '9', '0', '2020-06-19 15:23:02', '2020-06-19 17:59:11');

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
INSERT INTO `menu_settings` VALUES ('1', '首页', 'home', 'iconfont icon-home1', '1', '0', '1', '0', '2020-06-19 13:38:37', '2020-06-19 13:43:00');
INSERT INTO `menu_settings` VALUES ('2', '前端', 'web', 'iconfont icon-h5', '1', '0', '2', '1', '2020-06-19 13:39:04', '2020-06-19 13:43:02');
INSERT INTO `menu_settings` VALUES ('3', 'golang', 'go', 'iconfont icon-prog-golang', '1', '0', '3', '1', '2020-06-19 13:39:33', '2020-06-19 13:43:02');
INSERT INTO `menu_settings` VALUES ('4', '移动端', 'mobile', 'iconfont icon-mobile', '1', '0', '4', '1', '2020-06-19 13:41:18', '2020-06-19 13:43:05');
INSERT INTO `menu_settings` VALUES ('5', '数据库', 'data_base', 'iconfont icon-data-base', '1', '0', '5', '0', '2020-06-19 13:41:53', '2020-06-19 13:43:05');
INSERT INTO `menu_settings` VALUES ('6', '区块链', 'block', 'iconfont icon-qukuailian', '1', '0', '6', '0', '2020-06-19 13:42:30', '2020-06-19 13:43:06');
INSERT INTO `menu_settings` VALUES ('7', '其他', 'other', 'iconfont icon-qita', '1', '0', '7', '0', '2020-06-19 13:42:43', '2020-06-19 13:43:07');

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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of systems
-- ----------------------------
INSERT INTO `systems` VALUES ('1', null, '0612_1592817870091_9,0612_1592817870092_1', '2020-06-22 17:04:53', '2020-06-22 17:24:31');

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
INSERT INTO `users` VALUES ('1', '123456', '1c6a47df3c59184b447411d3764d9e56', '2', '[::1]:58834', '2020-06-23 18:37:19', '2020-06-23 15:17:15', '2020-06-23 18:37:19', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiIxMjM0NTYiLCJsb2dpbl9pcCI6Ils6OjFdOjU4ODM0IiwiZXhwIjoxNTkyOTEyMjM4LCJpYXQiOjE1OTI5MDg2Mzh9.urOaJK4d0Ro9AmH-0-307kxYse3iHOeW_mifaIit5NM');
