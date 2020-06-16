/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50727
Source Host           : localhost:3306
Source Database       : easy_go

Target Server Type    : MYSQL
Target Server Version : 50727
File Encoding         : 65001

Date: 2020-06-16 19:02:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for articles
-- ----------------------------
DROP TABLE IF EXISTS `articles`;
CREATE TABLE `articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `menu_id` int(11) DEFAULT NULL,
  `category_id` bigint(20) DEFAULT NULL,
  `cover` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `keyword` varchar(255) DEFAULT NULL,
  `tags` varchar(255) DEFAULT NULL,
  `view` int(11) DEFAULT NULL,
  `markdown` tinyint(1) DEFAULT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of articles
-- ----------------------------
INSERT INTO `articles` VALUES ('1', '1', null, '', '234234', null, '234324', null, null, '3', '0', '1', '0', '0', '0', '0', '1', '0', '2020-06-16 16:47:13', null);
INSERT INTO `articles` VALUES ('2', '1', null, '', '25', null, '235235', null, null, '0', '0', '1', '0', '0', '0', '0', '2', '0', '2020-06-16 16:47:19', null);
INSERT INTO `articles` VALUES ('3', '1', null, '0612_1592298878511_5', '我是标题123', null, '24234243', null, null, '0', '0', '1', '0', '1', '0', '0', '3', '0', '2020-06-16 17:14:39', null);
INSERT INTO `articles` VALUES ('4', '1', null, '0612_1592302169812_9', '测试123654', null, '问问他很可能是', null, null, '0', '0', '1', '0', '1', '0', '1', '4', '0', '2020-06-16 18:09:30', null);
INSERT INTO `articles` VALUES ('5', '1', null, '0612_1592302209340_8', '23423423', null, '2423432', null, null, '0', '0', '1', '0', '1', '0', '0', '5', '0', '2020-06-16 18:10:09', null);
INSERT INTO `articles` VALUES ('6', '1', null, '0612_1592302236126_0', '3543253', null, '5345345435', null, null, '0', '0', '1', '0', '1', '0', '0', '6', '0', '2020-06-16 18:10:36', null);
INSERT INTO `articles` VALUES ('7', '1', null, '0612_1592302282301_0', '544354354', null, '3543535435', null, null, '0', '0', '1', '0', '1', '0', '1', '7', '0', '2020-06-16 18:11:22', null);
INSERT INTO `articles` VALUES ('8', '1', null, '0612_1592302969460_4', '4234324', null, '234', '4234', null, '0', '0', '1', '0', '1', '0', '0', '8', '0', '2020-06-16 18:22:50', null);
INSERT INTO `articles` VALUES ('9', '1', null, '0612_1592303589292_1', '46646646', null, '45654654456', null, null, '0', '0', '1', '0', '0', '0', '0', '9', '0', '2020-06-16 18:33:10', null);
INSERT INTO `articles` VALUES ('10', '1', null, '0612_1592303646522_2', 'ewrwrew', null, 'rwrwr', null, null, '0', '0', '1', '0', '1', '0', '0', '10', '0', '2020-06-16 18:34:07', null);
INSERT INTO `articles` VALUES ('11', '1', null, '0612_1592303885841_6', '234234234', null, '234324234234', null, null, '0', '0', '1', '0', '1', '0', '0', '11', '0', '2020-06-16 18:38:06', null);
INSERT INTO `articles` VALUES ('12', '1', null, '0612_1592303986202_4', '测试标题', null, '3', null, null, '0', '0', '1', '0', '0', '0', '0', '12', '0', '2020-06-16 18:39:46', null);
INSERT INTO `articles` VALUES ('13', '1', null, '0612_1592304071177_0', '测试标题23', null, '234234', null, 'vue', '0', '0', '1', '0', '0', '0', '0', '13', '0', '2020-06-16 18:41:11', null);
INSERT INTO `articles` VALUES ('14', '1', null, '0612_1592304120026_4', '测试标签1424234', null, '涂塑钢管', 'NEREWF', 'vue,react', '0', '0', '1', '0', '0', '0', '0', '14', '0', '2020-06-16 18:42:00', null);
INSERT INTO `articles` VALUES ('15', '4', '3', '0612_1592304666032_7', '测试标题789', null, 'fwhfwfnwkf', '测试关键字', 'vue,react', '0', '0', '1', '0', '1', '1', '1', '15', '0', '2020-06-16 18:51:06', null);

-- ----------------------------
-- Table structure for article_contents
-- ----------------------------
DROP TABLE IF EXISTS `article_contents`;
CREATE TABLE `article_contents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `article_id` int(11) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of article_contents
-- ----------------------------
INSERT INTO `article_contents` VALUES ('1', '1', null, '<p>234324</p>');
INSERT INTO `article_contents` VALUES ('2', '2', null, '<p>235235</p>');
INSERT INTO `article_contents` VALUES ('3', '3', null, '<p>24234243</p>');
INSERT INTO `article_contents` VALUES ('4', '4', null, '<p>问问他很可能是</p>');
INSERT INTO `article_contents` VALUES ('5', '5', null, '<p>2423432</p>');
INSERT INTO `article_contents` VALUES ('6', '6', null, '<p>5345345435</p>');
INSERT INTO `article_contents` VALUES ('7', '7', null, '<p>3543535435</p>');
INSERT INTO `article_contents` VALUES ('8', '8', null, '<p>23234</p>');
INSERT INTO `article_contents` VALUES ('9', '9', null, '<p>45654654456</p>');
INSERT INTO `article_contents` VALUES ('10', '10', null, '<p>rwrwr</p>');
INSERT INTO `article_contents` VALUES ('11', '11', null, '<p>234324234234</p>');
INSERT INTO `article_contents` VALUES ('12', '12', null, '<p>3</p>');
INSERT INTO `article_contents` VALUES ('13', '13', null, '<p>234234</p>');
INSERT INTO `article_contents` VALUES ('14', '14', null, '<p>涂塑钢管</p>');
INSERT INTO `article_contents` VALUES ('15', '15', null, '<p>测试内容</p>');

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
  `hot` tinyint(1) DEFAULT NULL,
  `sort` int(11) DEFAULT NULL,
  `state` tinyint(1) DEFAULT '0',
  `created_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of article_types
-- ----------------------------
INSERT INTO `article_types` VALUES ('1', 'vue', 'vue', '2', '1', '0', '8', '0', '2020-06-16 13:46:57', null);
INSERT INTO `article_types` VALUES ('2', 'react', 'react', '2', '1', '1', '8', '0', '2020-06-16 13:48:34', null);
INSERT INTO `article_types` VALUES ('3', 'react native', 'reactNative', '4', '1', '0', '8', '0', '2020-06-16 13:49:12', null);
INSERT INTO `article_types` VALUES ('4', 'mysql', 'mysql', '5', '1', '0', '8', '0', '2020-06-16 13:49:41', null);
INSERT INTO `article_types` VALUES ('5', 'beego', 'beego', '3', '1', '0', '8', '0', '2020-06-16 13:50:12', null);
INSERT INTO `article_types` VALUES ('6', 'fullter', 'fullter', '4', '1', '0', '8', '0', '2020-06-16 13:50:37', null);
INSERT INTO `article_types` VALUES ('7', '小程序', 'min', '4', '1', '0', '8', '0', '2020-06-16 13:51:10', null);

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
  `hot` tinyint(1) DEFAULT NULL,
  `created_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of menu_settings
-- ----------------------------
INSERT INTO `menu_settings` VALUES ('1', '首页', '/home', 'iconfont icon-home1', '1', '0', '1', '0', '0', '2020-06-03 19:25:06', '2020-06-16 13:57:25');
INSERT INTO `menu_settings` VALUES ('2', '前端', '/web', 'iconfont icon-h5', '1', '0', '2', '1', '1', '2020-06-03 19:26:28', '2020-06-16 13:57:25');
INSERT INTO `menu_settings` VALUES ('3', 'golang', '/go', 'iconfont icon-prog-golang', '1', '0', '3', '1', '1', '2020-06-03 19:27:03', null);
INSERT INTO `menu_settings` VALUES ('4', '移动端', 'mobile', 'iconfont icon-mobile', '1', '0', '4', '1', '1', '2020-06-03 19:27:49', '2020-06-16 14:02:31');
INSERT INTO `menu_settings` VALUES ('5', '数据库', '/data_base', 'iconfont icon-data-base', '1', '0', '5', '1', '0', '2020-06-03 19:28:48', null);
INSERT INTO `menu_settings` VALUES ('6', '区块链', '/block', 'iconfont icon-qukuailian', '1', '0', '6', '0', '0', '2020-06-03 19:30:08', '2020-06-16 14:00:29');
INSERT INTO `menu_settings` VALUES ('7', '其他', '/other', 'iconfont icon-qita', '1', '0', '7', '0', '0', '2020-06-03 19:30:50', null);

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
INSERT INTO `specials` VALUES ('1', '15', '2020-06-16 16:45:23', '2020-06-16 18:51:06');

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
INSERT INTO `users` VALUES ('1', '123456', '1c6a47df3c59184b447411d3764d9e56', '2', '[::1]:49777', '2020-06-16 18:18:14', '2020-06-03 19:24:15', '2020-06-16 18:18:14', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiIxMjM0NTYiLCJsb2dpbl9pcCI6Ils6OjFdOjQ5Nzc3IiwiZXhwIjoxNTkyMzA2MjkzLCJpYXQiOjE1OTIzMDI2OTN9.QEnDZmeqJKkm9-oiCYBnvSrPn8F-Z1KdnND6OQXpWiU');
