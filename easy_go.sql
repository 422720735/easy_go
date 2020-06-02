/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50727
Source Host           : localhost:3306
Source Database       : easy_go

Target Server Type    : MYSQL
Target Server Version : 50727
File Encoding         : 65001

Date: 2020-06-02 17:35:36
*/

SET FOREIGN_KEY_CHECKS=0;

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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of menu_settings
-- ----------------------------
INSERT INTO `menu_settings` VALUES ('1', '首页', '/home', 'iconfont icon-home1', '0', '1', '1', '0', '2020-04-13 11:26:17', null, '0');
INSERT INTO `menu_settings` VALUES ('2', '前端', '/web', 'iconfont icon-h5', '0', '2', '1', '1', '2020-05-14 13:53:13', null, '0');
INSERT INTO `menu_settings` VALUES ('3', 'GOLANG', '/go', 'iconfont icon-prog-golang', '0', '3', '1', '1', '2020-05-14 13:56:08', null, '0');
INSERT INTO `menu_settings` VALUES ('4', '数据库', '/data_base', 'iconfont icon-data-base', '0', '4', '1', '0', '2020-05-18 18:35:36', null, '0');
INSERT INTO `menu_settings` VALUES ('5', '区块链', '/qukuailian', 'iconfont icon-qukuailian', '0', '5', '1', '0', '2020-05-18 18:38:57', null, '0');

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
INSERT INTO `users` VALUES ('1', '123456', '1c6a47df3c59184b447411d3764d9e56', '2', '127.0.0.1:55593', '2020-06-02 17:19:53', '2020-04-08 15:35:42', '2020-06-02 17:19:53', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiIxMjM0NTYiLCJsb2dpbl9pcCI6IjEyNy4wLjAuMTo1NTU5MyIsImV4cCI6MTU5MTA5MzE5MiwiaWF0IjoxNTkxMDg5NTkyfQ.8JdpgosdOr-jtafjbjcLvHwmDgLhR8NhGVwk66D0vIw');
