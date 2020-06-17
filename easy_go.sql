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

 Date: 18/06/2020 00:42:02
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of article_types
-- ----------------------------
BEGIN;
INSERT INTO `article_types` VALUES (1, 'vue', 'vue', 2, 1, 0, 8, 0, '2020-06-18 00:18:24', NULL);
INSERT INTO `article_types` VALUES (2, 'react', 'react', 2, 1, 0, 8, 0, '2020-06-18 00:18:34', NULL);
INSERT INTO `article_types` VALUES (3, 'beego', 'beego', 3, 1, 0, 8, 0, '2020-06-18 00:18:50', NULL);
INSERT INTO `article_types` VALUES (4, 'gin', 'gin', 3, 1, 0, 8, 0, '2020-06-18 00:19:00', NULL);
INSERT INTO `article_types` VALUES (5, 'mysql', 'mysql', 5, 1, 0, 8, 0, '2020-06-18 00:19:17', NULL);
INSERT INTO `article_types` VALUES (6, 'flutter', 'flutter', 4, 1, 0, 8, 0, '2020-06-18 00:19:47', NULL);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
BEGIN;
INSERT INTO `menu_settings` VALUES (1, '首页', '/home', 'iconfont icon-home1', 1, 0, 1, 0, 0, '2020-06-03 19:25:06', '2020-06-16 13:57:25');
INSERT INTO `menu_settings` VALUES (2, '前端', '/web', 'iconfont icon-h5', 1, 0, 2, 1, 1, '2020-06-03 19:26:28', '2020-06-16 13:57:25');
INSERT INTO `menu_settings` VALUES (3, 'golang', '/go', 'iconfont icon-prog-golang', 1, 0, 3, 1, 1, '2020-06-03 19:27:03', NULL);
INSERT INTO `menu_settings` VALUES (4, '移动端', 'mobile', 'iconfont icon-mobile', 1, 0, 4, 1, 1, '2020-06-03 19:27:49', '2020-06-16 14:02:31');
INSERT INTO `menu_settings` VALUES (5, '数据库', '/data_base', 'iconfont icon-data-base', 1, 0, 5, 1, 0, '2020-06-03 19:28:48', NULL);
INSERT INTO `menu_settings` VALUES (6, '区块链', '/block', 'iconfont icon-qukuailian', 1, 0, 6, 0, 0, '2020-06-03 19:30:08', '2020-06-16 14:00:29');
INSERT INTO `menu_settings` VALUES (7, '其他', '/other', 'iconfont icon-qita', 1, 0, 7, 0, 0, '2020-06-03 19:30:50', NULL);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
BEGIN;
INSERT INTO `users` VALUES (1, '123456', '1c6a47df3c59184b447411d3764d9e56', 2, '[::1]:50837', '2020-06-18 00:23:17', '2020-06-03 19:24:15', '2020-06-18 00:23:17', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiIxMjM0NTYiLCJsb2dpbl9pcCI6Ils6OjFdOjUwODM3IiwiZXhwIjoxNTkyNDE0NTk2LCJpYXQiOjE1OTI0MTA5OTZ9.LpdFsmZ-tvQRiQk905lgr9Y9yBwjsffOOFDkPY1wKwM');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
