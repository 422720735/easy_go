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

 Date: 03/06/2020 23:53:05
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article_types
-- ----------------------------
DROP TABLE IF EXISTS `article_types`;
CREATE TABLE `article_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `article_name` varchar(255) DEFAULT NULL,
  `key_word` varchar(255) DEFAULT NULL,
  `menu_id` int(11) DEFAULT NULL,
  `visible` tinyint(1) DEFAULT NULL,
  `state` tinyint(1) DEFAULT NULL,
  `sort` int(11) DEFAULT NULL,
  `hot` tinyint(1) DEFAULT NULL,
  `created_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of article_types
-- ----------------------------
BEGIN;
INSERT INTO `article_types` VALUES (1, 'vue', 'vue', 2, 0, 0, 8, 0, '2020-06-03 19:31:32', NULL);
INSERT INTO `article_types` VALUES (2, 'react', 'react', 2, 0, 0, 8, 1, '2020-06-03 19:32:22', NULL);
INSERT INTO `article_types` VALUES (3, 'es6', 'es6', 2, 0, 0, 8, 1, '2020-06-03 19:33:31', NULL);
INSERT INTO `article_types` VALUES (4, 'beego', 'beego', 3, 0, 0, 8, 1, '2020-06-03 19:33:52', NULL);
INSERT INTO `article_types` VALUES (5, 'gin', 'gin', 3, 0, 0, 8, 0, '2020-06-03 19:34:05', NULL);
INSERT INTO `article_types` VALUES (6, 'mysql', 'mysql', 5, 0, 0, 8, 0, '2020-06-03 19:35:05', NULL);
INSERT INTO `article_types` VALUES (7, 'flutter', 'flutter', 4, 0, 0, 8, 0, '2020-06-03 19:35:37', NULL);
COMMIT;

-- ----------------------------
-- Table structure for articles
-- ----------------------------
DROP TABLE IF EXISTS `articles`;
CREATE TABLE `articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) DEFAULT NULL,
  `cover` varchar(255) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `tags` varchar(255) DEFAULT NULL,
  `view` int(11) DEFAULT NULL,
  `content` text,
  `recommend` int(11) DEFAULT NULL,
  `praise` int(11) DEFAULT NULL,
  `is_top` int(11) DEFAULT NULL,
  `hot` tinyint(1) DEFAULT NULL,
  `sort` int(11) DEFAULT NULL,
  `state` tinyint(1) DEFAULT NULL,
  `created_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
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
INSERT INTO `menu_settings` VALUES (1, '首页', '/home', 'iconfont icon-home1', 0, 0, 1, 0, 0, '2020-06-03 19:25:06', NULL);
INSERT INTO `menu_settings` VALUES (2, '前端', '/web', 'iconfont icon-h5', 0, 0, 2, 1, 1, '2020-06-03 19:26:28', NULL);
INSERT INTO `menu_settings` VALUES (3, 'golang', '/go', 'iconfont icon-prog-golang', 0, 0, 3, 1, 1, '2020-06-03 19:27:03', NULL);
INSERT INTO `menu_settings` VALUES (4, '移动端', 'mobile', 'iconfont icon-mobile', 0, 0, 4, 1, 1, '2020-06-03 19:27:49', NULL);
INSERT INTO `menu_settings` VALUES (5, '数据库', '/data_base', 'iconfont icon-data-base', 0, 0, 5, 1, 0, '2020-06-03 19:28:48', NULL);
INSERT INTO `menu_settings` VALUES (6, '区块链', '/block', 'iconfont icon-qukuailian', 0, 0, 6, 0, 0, '2020-06-03 19:30:08', NULL);
INSERT INTO `menu_settings` VALUES (7, '其他', '/other', 'iconfont icon-qita', 0, 0, 7, 0, 0, '2020-06-03 19:30:50', NULL);
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES (1, '123456', '1c6a47df3c59184b447411d3764d9e56', 2, '[::1]:54885', '2020-06-03 22:02:46', '2020-06-03 19:24:15', '2020-06-03 22:02:46', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiIxMjM0NTYiLCJsb2dpbl9pcCI6Ils6OjFdOjU0ODg1IiwiZXhwIjoxNTkxMTk2NTY1LCJpYXQiOjE1OTExOTI5NjV9.qBAAvuDQ-U5HgbqEI1BhPs_u4MDC9MVzTMRP_xwlyvs');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
