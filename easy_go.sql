/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50727
Source Host           : localhost:3306
Source Database       : easy_go

Target Server Type    : MYSQL
Target Server Version : 50727
File Encoding         : 65001

Date: 2020-06-18 18:58:31
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of articles
-- ----------------------------

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of article_contents
-- ----------------------------

-- ----------------------------
-- Table structure for article_types
-- ----------------------------
DROP TABLE IF EXISTS `article_types`;
CREATE TABLE `article_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `article_name` varchar(255) DEFAULT NULL,
  `key_word` varchar(255) DEFAULT NULL,
  `menu_id` int(11) DEFAULT NULL,
  `sum` int(11) DEFAULT '0',
  `visible` tinyint(1) DEFAULT '0',
  `hot` tinyint(1) DEFAULT NULL,
  `sort` int(11) DEFAULT NULL,
  `state` tinyint(1) DEFAULT '0',
  `created_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of article_types
-- ----------------------------

-- ----------------------------
-- Table structure for menu_settings
-- ----------------------------
DROP TABLE IF EXISTS `menu_settings`;
CREATE TABLE `menu_settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `menu_name` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `sum` int(11) DEFAULT '0',
  `visible` tinyint(1) DEFAULT NULL,
  `state` tinyint(1) DEFAULT NULL,
  `sort` int(11) DEFAULT NULL,
  `child_status` tinyint(1) DEFAULT NULL,
  `hot` tinyint(1) DEFAULT NULL,
  `created_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of menu_settings
-- ----------------------------
INSERT INTO `menu_settings` VALUES ('1', '首页', 'home             ', 'iconfont icon-home1', '0', '0', '0', '1', '0', '1', '2020-06-18 15:20:05', null);
INSERT INTO `menu_settings` VALUES ('2', '前端', 'web', 'iconfont icon-h5', '0', '0', '0', '2', '1', '1', '2020-06-18 15:27:11', null);
INSERT INTO `menu_settings` VALUES ('3', 'golang', 'go', 'iconfont icon-prog-golang', '0', '0', '0', '3', '1', '0', '2020-06-18 15:29:43', null);
INSERT INTO `menu_settings` VALUES ('4', '移动端', 'mobile', 'iconfont icon-mobile', '0', '0', '0', '4', '1', '1', '2020-06-18 15:32:15', null);
INSERT INTO `menu_settings` VALUES ('5', '区块链', 'block', 'iconfont icon-qukuailian', '0', '0', '0', '5', '0', '1', '2020-06-18 18:33:36', null);
INSERT INTO `menu_settings` VALUES ('6', '其他', 'other', 'iconfont icon-qita', '0', '0', '0', '6', '0', '0', '2020-06-18 18:34:03', null);

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of specials
-- ----------------------------

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
INSERT INTO `users` VALUES ('1', '123456', '1c6a47df3c59184b447411d3764d9e56', '2', '[::1]:57279', '2020-06-18 18:23:54', '2020-06-18 14:57:13', '2020-06-18 18:23:54', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiIxMjM0NTYiLCJsb2dpbl9pcCI6Ils6OjFdOjU3Mjc5IiwiZXhwIjoxNTkyNDc5NDMzLCJpYXQiOjE1OTI0NzU4MzN9.5VAsKZxKESSiTya-vONTVcBPLj-VpwV7hGMrJOHJf1g');
