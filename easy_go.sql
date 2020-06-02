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

 Date: 03/06/2020 00:12:04
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
  `delete` tinyint(1) DEFAULT NULL,
  `sort` int(11) DEFAULT NULL,
  `hot` tinyint(1) DEFAULT NULL,
  `created_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of article_types
-- ----------------------------
BEGIN;
INSERT INTO `article_types` VALUES (1, 'mysql', 'mysql', 4, 0, 0, 8, 0, '2020-06-03 00:06:23', NULL);
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
  `sort` int(11) DEFAULT NULL,
  `child_status` tinyint(1) DEFAULT NULL,
  `hot` tinyint(1) DEFAULT NULL,
  `created_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `delete` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of menu_settings
-- ----------------------------
BEGIN;
INSERT INTO `menu_settings` VALUES (1, '首页', '/home', 'iconfont icon-home1', 1, 2, 0, 0, '2020-04-13 11:26:17', NULL, 0);
INSERT INTO `menu_settings` VALUES (2, '前端', '/web', 'iconfont icon-h5', 1, 1, 1, 1, '2020-05-14 13:53:13', NULL, 0);
INSERT INTO `menu_settings` VALUES (3, 'GOLANG', '/go', 'iconfont icon-prog-golang', 1, 3, 1, 1, '2020-05-14 13:56:08', NULL, 0);
INSERT INTO `menu_settings` VALUES (4, '数据库', '/data_base', 'iconfont icon-data-base', 1, 4, 1, 0, '2020-05-18 18:35:36', NULL, 0);
INSERT INTO `menu_settings` VALUES (5, '区块链', '/qukuailian', 'iconfont icon-qukuailian', 1, 5, 1, 0, '2020-05-18 18:38:57', NULL, 0);
INSERT INTO `menu_settings` VALUES (6, '其它', '/other', 'iconfont icon-qita', 1, 6, 0, 0, '2020-06-02 23:26:37', NULL, 0);
INSERT INTO `menu_settings` VALUES (7, '资讯', '/news', 'iconfont icon-qita', 1, 7, 0, 0, '2020-06-02 23:39:29', NULL, 0);
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
INSERT INTO `users` VALUES (1, '123456', '1c6a47df3c59184b447411d3764d9e56', 2, '[::1]:61552', '2020-06-02 23:55:59', '2020-04-08 15:35:42', '2020-06-02 23:55:59', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiIxMjM0NTYiLCJsb2dpbl9pcCI6Ils6OjFdOjYxNTUyIiwiZXhwIjoxNTkxMTE2OTU5LCJpYXQiOjE1OTExMTMzNTl9.HgqMIV-Xh0EuIHy3G3cP-mMgisjpKHUIEU6IBbyrWZ0');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
