/*
Navicat MySQL Data Transfer

Source Server         : 192.168.125.13
Source Server Version : 50722
Source Host           : 192.168.125.13:3309
Source Database       : data_flow_database_prod

Target Server Type    : MYSQL
Target Server Version : 50722
File Encoding         : 65001

Date: 2020-03-18 12:22:08
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for advertising
-- ----------------------------
DROP TABLE IF EXISTS `advertising`;
CREATE TABLE `advertising` (
  `id` bigint(100) NOT NULL,
  `img` varchar(255) DEFAULT NULL COMMENT '图片地址',
  `img_name` varchar(255) DEFAULT NULL COMMENT '图片名称',
  `link_url` varchar(255) DEFAULT NULL COMMENT ' 跳转连接',
  `tag` varchar(255) DEFAULT NULL COMMENT '埋点标签',
  `create_by` bigint(100) DEFAULT NULL COMMENT '创建人ID',
  `update_by` bigint(100) DEFAULT NULL COMMENT '修改人',
  `status` int(2) DEFAULT '2' COMMENT '状态 1.已发布 2.未发布',
  `order_number` bigint(100) DEFAULT '0' COMMENT '排序号',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for assessment_agency
-- ----------------------------
DROP TABLE IF EXISTS `assessment_agency`;
CREATE TABLE `assessment_agency` (
  `id` bigint(100) NOT NULL,
  `name` varchar(255) DEFAULT NULL COMMENT '企业名称',
  `abbreviation` varchar(255) DEFAULT NULL COMMENT '企业简称',
  `legal_person` varchar(255) DEFAULT NULL COMMENT '企业法人',
  `registration_time` timestamp NULL DEFAULT NULL COMMENT '注册时间',
  `registered_capital` decimal(10,2) DEFAULT NULL COMMENT '注册资本\n\n',
  `organization_code` varchar(255) DEFAULT NULL COMMENT '组织结构代码/统一社会信用代码',
  `email` varchar(255) DEFAULT NULL COMMENT '电子邮箱',
  `employees_number` bigint(20) DEFAULT NULL COMMENT '员工人数',
  `contacts_one` varchar(255) DEFAULT NULL COMMENT '企业联系人1',
  `contacts_one_position` varchar(255) DEFAULT NULL COMMENT '企业联系人1职务',
  `contacts_one_phone` varchar(255) DEFAULT NULL COMMENT '企业联系人1手机',
  `contacts_two` varchar(255) DEFAULT NULL COMMENT '企业联系人2',
  `contacts_two_position` varchar(255) DEFAULT NULL COMMENT '企业联系人2职务',
  `contacts_two_phone` varchar(255) DEFAULT NULL COMMENT '企业联系人2手机',
  `registered_address` varchar(255) DEFAULT NULL COMMENT '企业注册地址',
  `business_address` varchar(255) DEFAULT NULL COMMENT '企业通信地址',
  `enterprises_intro` varchar(255) DEFAULT NULL COMMENT '企业及高管介绍',
  `bank_account_num` varchar(20) DEFAULT NULL COMMENT '对公账户银行卡号码',
  `transfer_time` timestamp NULL DEFAULT NULL COMMENT '转账时间',
  `business_img` varchar(255) DEFAULT NULL COMMENT '企业营业执照',
  `auth_status` int(2) DEFAULT NULL COMMENT '认证状态 0.已邀请 1.待认证 2.已认证 3.认证失败',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `reg_address_province` bigint(255) DEFAULT NULL COMMENT '企业注册 省',
  `reg_address_city` bigint(255) DEFAULT NULL COMMENT '企业注册 市',
  `reg_address_area` bigint(255) DEFAULT NULL COMMENT '企业注册 区',
  `comm_address_province` bigint(255) DEFAULT NULL COMMENT '企业通信 省',
  `comm_address_city` bigint(255) DEFAULT NULL COMMENT '企业通信 市',
  `comm_address_area` bigint(255) DEFAULT NULL COMMENT '企业通信 区',
  `nature` bigint(255) DEFAULT NULL COMMENT '企业性质',
  `type` bigint(255) DEFAULT NULL COMMENT '企业类型',
  `industry` bigint(255) DEFAULT NULL COMMENT '行业',
  `bank_public` varchar(255) DEFAULT NULL COMMENT '对公账户开户银行',
  `worker_number` int(50) DEFAULT NULL COMMENT ' 员工人数',
  `show_status` int(2) DEFAULT '1' COMMENT '1显示 0隐藏',
  `invite_agency_id` bigint(100) DEFAULT NULL COMMENT '邀请对象id',
  `invite_agency_type` int(2) DEFAULT NULL COMMENT '邀请对象类型',
  `certification_time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Table structure for assessment_agency_audit_history
-- ----------------------------
DROP TABLE IF EXISTS `assessment_agency_audit_history`;
CREATE TABLE `assessment_agency_audit_history` (
  `id` bigint(20) NOT NULL,
  `assessment_agency_id` bigint(20) NOT NULL COMMENT '评估机构Id',
  `auth_status` int(2) DEFAULT NULL COMMENT '平台审核状态',
  `create_time` timestamp NULL DEFAULT NULL COMMENT '创建时间',
  `auth_message` varchar(255) DEFAULT NULL COMMENT '平台审核信息',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for assessment_employee
-- ----------------------------
DROP TABLE IF EXISTS `assessment_employee`;
CREATE TABLE `assessment_employee` (
  `id` bigint(100) NOT NULL,
  `date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(255) DEFAULT NULL COMMENT '评估师姓名',
  `working_years` int(11) DEFAULT NULL COMMENT '从业年限',
  `assessment_id` bigint(100) DEFAULT NULL COMMENT '评估机构ID',
  `show_status` int(2) DEFAULT '1' COMMENT '显示或隐藏 1显示 2隐藏',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Table structure for baas_history
-- ----------------------------
DROP TABLE IF EXISTS `baas_history`;
CREATE TABLE `baas_history` (
  `id` bigint(20) NOT NULL,
  `contract_identity` varchar(255) DEFAULT NULL,
  `state_key` varchar(255) DEFAULT NULL COMMENT '状态key',
  `state_data` longtext COMMENT '状态数据',
  `block_number` int(11) DEFAULT NULL COMMENT '区块号',
  `block_hash` varchar(255) DEFAULT NULL COMMENT '区块hash',
  `transaction_hash` varchar(255) DEFAULT NULL COMMENT '交易hash',
  `transaction_number` int(11) DEFAULT NULL COMMENT '交易序号',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for baas_history_temp
-- ----------------------------
DROP TABLE IF EXISTS `baas_history_temp`;
CREATE TABLE `baas_history_temp` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `contract_identity` varchar(255) DEFAULT NULL,
  `state_key` varchar(255) DEFAULT NULL COMMENT '状态key',
  `state_data` longtext COMMENT '状态数据',
  `transaction_hash` varchar(255) DEFAULT NULL COMMENT '交易hash',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1240106300495368194 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for bank
-- ----------------------------
DROP TABLE IF EXISTS `bank`;
CREATE TABLE `bank` (
  `id` bigint(100) NOT NULL,
  `name` varchar(255) DEFAULT NULL COMMENT '企业简称',
  `full_name` varchar(255) DEFAULT NULL COMMENT '企业全称',
  `contract1` varchar(255) DEFAULT NULL COMMENT '企业联系人1',
  `contract1_job` varchar(255) DEFAULT NULL COMMENT '企业联系人1职务',
  `contract1_phone` varchar(255) DEFAULT NULL COMMENT '企业联系人1手机号',
  `contract2` varchar(255) DEFAULT NULL COMMENT '企业联系人2',
  `contract2_job` varchar(255) DEFAULT NULL COMMENT '企业联系人2职务',
  `contract2_phone` varchar(255) DEFAULT NULL COMMENT '企业联系人2手机号',
  `address_province_id` bigint(100) DEFAULT NULL COMMENT '省id',
  `address_city_id` bigint(100) DEFAULT NULL COMMENT '市id',
  `address_county_id` bigint(100) DEFAULT NULL COMMENT '区id',
  `detail_address` varchar(255) DEFAULT NULL COMMENT '企业详细地址',
  `type` int(2) DEFAULT NULL COMMENT '类型',
  `nature` int(2) DEFAULT NULL COMMENT '性质',
  `auth_status` int(2) DEFAULT NULL COMMENT '认证状态',
  `show_status` int(2) DEFAULT NULL COMMENT '显示状态',
  `sign_time` timestamp NULL DEFAULT NULL COMMENT '合同签订时间',
  `sign_end_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '合同截止时间',
  `attachment` varchar(255) DEFAULT NULL COMMENT '合同附件',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `certification_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '认证时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Table structure for bank_assessment
-- ----------------------------
DROP TABLE IF EXISTS `bank_assessment`;
CREATE TABLE `bank_assessment` (
  `id` bigint(100) NOT NULL AUTO_INCREMENT,
  `assessment_id` bigint(100) DEFAULT NULL COMMENT '评估机构id',
  `bank_id` bigint(100) DEFAULT NULL COMMENT '银行id',
  `sign_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '合同签订时间',
  `sign_end_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '合同到期时间',
  `ratio` varchar(255) DEFAULT NULL COMMENT '合同费率',
  `attachment` varchar(255) DEFAULT NULL COMMENT '合同附件',
  `status` int(2) DEFAULT NULL COMMENT '状态',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `refuse_reason` varchar(255) DEFAULT NULL COMMENT '拒绝原因',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1239846079839604738 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Table structure for bank_audit_history
-- ----------------------------
DROP TABLE IF EXISTS `bank_audit_history`;
CREATE TABLE `bank_audit_history` (
  `id` bigint(20) NOT NULL,
  `bank_id` bigint(20) NOT NULL COMMENT '银行Id',
  `auth_status` int(2) DEFAULT NULL COMMENT '平台审核状态',
  `create_time` timestamp NULL DEFAULT NULL COMMENT '创建时间',
  `auth_message` varchar(255) DEFAULT NULL COMMENT '平台审核信息',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for bank_customer
-- ----------------------------
DROP TABLE IF EXISTS `bank_customer`;
CREATE TABLE `bank_customer` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `enterprise_id` bigint(100) DEFAULT NULL COMMENT '企业id',
  `bank_id` bigint(100) DEFAULT NULL COMMENT '银行id',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1214442248784080898 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Table structure for bank_user
-- ----------------------------
DROP TABLE IF EXISTS `bank_user`;
CREATE TABLE `bank_user` (
  `id` bigint(100) NOT NULL COMMENT '主键',
  `bank_id` bigint(100) DEFAULT NULL COMMENT '银行ID',
  `user_id` bigint(100) DEFAULT NULL COMMENT '用户ID',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for case_index
-- ----------------------------
DROP TABLE IF EXISTS `case_index`;
CREATE TABLE `case_index` (
  `id` bigint(100) NOT NULL COMMENT '主键',
  `enterprise_id` bigint(100) DEFAULT NULL COMMENT '企业ID',
  `create_by` bigint(100) DEFAULT NULL COMMENT '创建人ID',
  `update_by` bigint(100) DEFAULT NULL COMMENT '修改人ID',
  `status` int(2) DEFAULT '2' COMMENT '状态 1.已发布 2.未发布',
  `order_number` bigint(100) DEFAULT '0' COMMENT '排序号',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `enterprise_name` varchar(255) DEFAULT NULL COMMENT '企业名称',
  `capital` varchar(255) DEFAULT NULL COMMENT '资本',
  `worker_number` varchar(255) DEFAULT NULL COMMENT '员工人数',
  `product_name` varchar(255) DEFAULT NULL COMMENT '金融产品名称',
  `finance_use_name` varchar(255) DEFAULT NULL COMMENT '融资用途名称',
  `bank_name` varchar(255) DEFAULT NULL COMMENT '所属资金方',
  `lending_money` decimal(10,2) DEFAULT NULL COMMENT '放款金额',
  `update_content_time` timestamp NULL DEFAULT NULL COMMENT '内容更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for chain
-- ----------------------------
DROP TABLE IF EXISTS `chain`;
CREATE TABLE `chain` (
  `id` bigint(100) NOT NULL COMMENT '主键',
  `project_id` bigint(100) DEFAULT NULL COMMENT '项目id',
  `chain_method_list` longtext COMMENT '评估链方法集合',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Table structure for collaborate
-- ----------------------------
DROP TABLE IF EXISTS `collaborate`;
CREATE TABLE `collaborate` (
  `id` bigint(100) NOT NULL,
  `img` varchar(255) DEFAULT NULL COMMENT '图片',
  `name` varchar(255) DEFAULT NULL COMMENT '名称',
  `type` int(2) DEFAULT NULL COMMENT '类型 1.资金方 2.服务机构',
  `create_by` bigint(100) DEFAULT NULL COMMENT '创建人ID',
  `update_by` bigint(100) DEFAULT NULL COMMENT '修改人',
  `order_number` bigint(100) DEFAULT '0' COMMENT '排序号',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for concurrent_login
-- ----------------------------
DROP TABLE IF EXISTS `concurrent_login`;
CREATE TABLE `concurrent_login` (
  `id` varchar(255) NOT NULL,
  `client_id` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `refresh_expire_time` datetime DEFAULT NULL,
  `refresh_token` varchar(1000) DEFAULT NULL,
  `token` varchar(1000) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for enterprise
-- ----------------------------
DROP TABLE IF EXISTS `enterprise`;
CREATE TABLE `enterprise` (
  `id` bigint(100) NOT NULL COMMENT '主键Id',
  `user_id` bigint(100) DEFAULT NULL COMMENT '用户Id',
  `name` varchar(255) DEFAULT NULL COMMENT '企业名称',
  `nature` bigint(255) DEFAULT NULL COMMENT '企业性质',
  `type` bigint(255) DEFAULT NULL COMMENT '企业类型',
  `industry` bigint(255) DEFAULT NULL COMMENT '行业',
  `worker_number` bigint(100) DEFAULT NULL COMMENT ' 员工人数',
  `reg_time` timestamp NULL DEFAULT NULL COMMENT '注册时间',
  `capital` varchar(255) DEFAULT NULL COMMENT '注册资本',
  `code` varchar(255) DEFAULT NULL COMMENT '组织结构代码',
  `email` varchar(255) DEFAULT NULL COMMENT '电子邮箱',
  `corporate_contact` varchar(255) DEFAULT NULL COMMENT '企业联系人',
  `position` varchar(255) DEFAULT NULL COMMENT '企业联系人职务',
  `office_phone` varchar(255) DEFAULT NULL COMMENT '企业联系人办公电话',
  `mobile_phone` varchar(255) DEFAULT NULL COMMENT '企业联系人手机',
  `legal_represe` varchar(255) DEFAULT NULL COMMENT '法人代表',
  `reg_address` varchar(255) DEFAULT NULL COMMENT '企业注册地址',
  `reg_address_province` bigint(255) DEFAULT NULL COMMENT '企业注册 省',
  `reg_address_city` bigint(255) DEFAULT NULL COMMENT '企业注册 市',
  `reg_address_area` bigint(255) DEFAULT NULL COMMENT '企业注册 区',
  `comm_address` varchar(255) DEFAULT NULL COMMENT '企业通信地址',
  `comm_address_province` bigint(255) DEFAULT NULL COMMENT '企业通信 省',
  `comm_address_city` bigint(255) DEFAULT NULL COMMENT '企业通信 市',
  `comm_address_area` bigint(255) DEFAULT NULL COMMENT '企业通信 区',
  `short_name` varchar(255) DEFAULT NULL COMMENT '企业简称',
  `corporate_contact2` varchar(255) DEFAULT NULL COMMENT '企业联系人2',
  `position2` varchar(255) DEFAULT NULL COMMENT '企业联系人2职务',
  `office_phone2` varchar(255) DEFAULT NULL COMMENT '企业联系人2办公电话',
  `mobile_phone2` varchar(255) DEFAULT NULL COMMENT '企业联系人2手机',
  `executives_desc` blob COMMENT '企业高管介绍',
  `credentials_type` bigint(255) DEFAULT NULL COMMENT '法人证件类型',
  `credentials_code` varchar(255) DEFAULT NULL COMMENT '法人证件号码',
  `bank_public` varchar(255) DEFAULT NULL COMMENT '对公账户开户银行',
  `bank_number` varchar(255) DEFAULT NULL COMMENT '对公账户银行卡号码',
  `transfer_time` timestamp NULL DEFAULT NULL COMMENT '转账时间',
  `id_card_front_img` varchar(255) DEFAULT NULL COMMENT '法人身份证国徽面',
  `id_card_bank_img` varchar(255) DEFAULT NULL COMMENT '法人身份证头像面',
  `business_img` varchar(255) DEFAULT NULL COMMENT '企业营业执照 附件',
  `authentication` int(2) DEFAULT '1' COMMENT '认证状态 0.已邀请 1.待认证 2.已认证 3.认证失败 4.正在认证中',
  `ctrl_show` int(1) DEFAULT '1' COMMENT '1显示 0隐藏',
  `create_user_id` bigint(100) DEFAULT NULL COMMENT '创建用户',
  `update_user_id` bigint(100) DEFAULT NULL COMMENT '更新用户',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `uk_idx_name` (`name`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC COMMENT='企业表';

-- ----------------------------
-- Table structure for enterprise_audit_history
-- ----------------------------
DROP TABLE IF EXISTS `enterprise_audit_history`;
CREATE TABLE `enterprise_audit_history` (
  `id` bigint(20) NOT NULL,
  `enterprise_id` bigint(20) NOT NULL COMMENT '企业Id',
  `authentication` int(2) DEFAULT NULL COMMENT '平台审核状态',
  `create_time` timestamp NULL DEFAULT NULL COMMENT '创建时间',
  `authentication_message` varchar(255) DEFAULT NULL COMMENT '平台审核信息',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for evaluation_history
-- ----------------------------
DROP TABLE IF EXISTS `evaluation_history`;
CREATE TABLE `evaluation_history` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `evaluation_agency_id` bigint(20) DEFAULT NULL COMMENT '评价机构id',
  `evaluated_institution_id` bigint(20) DEFAULT NULL COMMENT '被评价机构id',
  `evaluation_instructions` varchar(255) DEFAULT NULL COMMENT '评价说明',
  `evaluation_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '评价时间',
  `evaluation_score` varchar(255) DEFAULT NULL COMMENT '评价分数',
  `evaluation_item_id` bigint(20) DEFAULT NULL COMMENT '评价项目id',
  `evaluation_account_id` bigint(20) DEFAULT NULL COMMENT '评价账号id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='评价历史表';

-- ----------------------------
-- Table structure for feedback
-- ----------------------------
DROP TABLE IF EXISTS `feedback`;
CREATE TABLE `feedback` (
  `id` bigint(100) NOT NULL COMMENT '主键',
  `type` int(2) DEFAULT NULL COMMENT '类型 1.业务流程问题 2.系统功能问题 3.账号密码问题 4.优化和建议',
  `mobile` varchar(255) DEFAULT NULL COMMENT '联系手机',
  `content` longtext COMMENT '反馈内容',
  `create_by` bigint(100) DEFAULT NULL COMMENT '创建者用户ID',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for financial_product
-- ----------------------------
DROP TABLE IF EXISTS `financial_product`;
CREATE TABLE `financial_product` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `quota` decimal(10,0) DEFAULT NULL COMMENT '贷款额度上限',
  `name` varchar(255) DEFAULT NULL COMMENT '产品名称',
  `status` int(2) DEFAULT NULL COMMENT '产品状态',
  `examine_status` int(2) DEFAULT NULL COMMENT '平台审核状态 0为不通过，1为通过，2为待审核',
  `organ_list` varchar(255) DEFAULT NULL COMMENT '受理机构id集合，用英文逗号隔开',
  `rate` varchar(255) DEFAULT NULL COMMENT '利率范围描述',
  `bank_id` bigint(100) DEFAULT NULL COMMENT '银行id',
  `flow_id` bigint(20) DEFAULT NULL COMMENT '流程id',
  `enterprise_register_address` varchar(255) DEFAULT NULL COMMENT '企业注册地',
  `reg_address_province_id` bigint(100) DEFAULT NULL COMMENT '企业注册 省id',
  `reg_address_city_id` bigint(100) DEFAULT NULL COMMENT '企业注册 市id',
  `reg_address_area_id` bigint(100) DEFAULT NULL COMMENT '企业注册 区id',
  `enterprise_found_time` varchar(255) DEFAULT NULL COMMENT '企业成立年限',
  `enterprise_nature` varchar(255) DEFAULT NULL COMMENT '企业性质',
  `enterprise_industry` varchar(255) DEFAULT NULL COMMENT '企业所属行业',
  `enterprise_register_capital_floor` decimal(10,0) DEFAULT NULL COMMENT '企业注册资本下限',
  `enterprise_employee_count` varchar(255) DEFAULT NULL COMMENT '企业员工人数',
  `other_condition` varchar(255) DEFAULT NULL COMMENT '其他办理条件',
  `deadline` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '申请截止日期',
  `time_limit_begin` int(2) DEFAULT NULL COMMENT '还款时间下限',
  `time_limit_end` int(2) DEFAULT NULL COMMENT '还款时间上限',
  `description` varchar(255) DEFAULT NULL COMMENT '产品简介',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `organization` varchar(255) DEFAULT NULL COMMENT '受理机构',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1239814886117085186 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Table structure for financial_product_audit_history
-- ----------------------------
DROP TABLE IF EXISTS `financial_product_audit_history`;
CREATE TABLE `financial_product_audit_history` (
  `id` bigint(20) NOT NULL,
  `financial_product_id` bigint(20) NOT NULL COMMENT '金融产品Id',
  `examine_status` int(2) DEFAULT NULL COMMENT '平台审核状态',
  `create_time` timestamp NULL DEFAULT NULL COMMENT '创建时间',
  `examine_message` varchar(255) DEFAULT NULL COMMENT '金融产品审核信息',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for flow
-- ----------------------------
DROP TABLE IF EXISTS `flow`;
CREATE TABLE `flow` (
  `id` bigint(100) NOT NULL COMMENT '主键',
  `name` varchar(255) DEFAULT NULL COMMENT '链名',
  `image` varchar(255) DEFAULT NULL COMMENT '图片路径',
  `description` varchar(255) DEFAULT NULL COMMENT '描述',
  `examine_status` int(2) DEFAULT NULL COMMENT '平台审核状态',
  `organization_list` varchar(255) DEFAULT NULL COMMENT '参与方角色配置',
  `member_count` int(2) DEFAULT NULL COMMENT '参与方数量',
  `node_count` int(2) DEFAULT NULL COMMENT '节点数量',
  `chain_method_list` longtext COMMENT '评估链方法集合',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Table structure for index_product
-- ----------------------------
DROP TABLE IF EXISTS `index_product`;
CREATE TABLE `index_product` (
  `id` bigint(100) NOT NULL,
  `product_id` bigint(100) DEFAULT NULL COMMENT '金融产品ID',
  `money_side` varchar(255) DEFAULT NULL COMMENT '所属资金方',
  `link_url` varchar(255) DEFAULT NULL COMMENT '跳转连接',
  `tag` varchar(255) DEFAULT NULL COMMENT '埋点标签',
  `create_by` bigint(100) DEFAULT NULL COMMENT '创建人ID',
  `update_by` bigint(100) DEFAULT NULL COMMENT '修改人',
  `status` int(2) DEFAULT '2' COMMENT '状态 1.已发布 2.未发布',
  `order_number` bigint(100) DEFAULT '0' COMMENT '排序号',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for intellectual_assessment
-- ----------------------------
DROP TABLE IF EXISTS `intellectual_assessment`;
CREATE TABLE `intellectual_assessment` (
  `id` bigint(100) NOT NULL COMMENT '主键iD',
  `intellectual_bank_id` bigint(100) DEFAULT NULL COMMENT '知识产权-银行关联 ID',
  `first_assessment_time` timestamp NULL DEFAULT NULL COMMENT '初评时间',
  `first_assessment_suggest` int(2) DEFAULT NULL COMMENT '初评的是否建议质押 1是 2否',
  `first_assessment_money` decimal(10,2) DEFAULT NULL COMMENT '初评估值',
  `second_assessment_time` timestamp NULL DEFAULT NULL COMMENT '复评时间',
  `second_assessment_suggest` int(2) DEFAULT NULL COMMENT '复评的是否建议质押 1是 2否',
  `second_assessment_money` decimal(10,2) DEFAULT NULL COMMENT '复评估值',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `first_assessment_report` varchar(255) DEFAULT NULL COMMENT '初评报告存储地址',
  `second_assessment_report` varchar(255) DEFAULT NULL COMMENT '复评报告存储地址',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `idx_intellctual_bank_id` (`intellectual_bank_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Table structure for intellectual_bank
-- ----------------------------
DROP TABLE IF EXISTS `intellectual_bank`;
CREATE TABLE `intellectual_bank` (
  `id` bigint(100) NOT NULL COMMENT '主键',
  `project_id` bigint(100) DEFAULT NULL COMMENT '项目ID',
  `bank_id` bigint(100) DEFAULT NULL COMMENT '银行ID',
  `intellectual_id` bigint(100) DEFAULT NULL COMMENT '知识产权ID',
  `bank_confirm` int(2) DEFAULT '0' COMMENT '银行确认知识产权 1 确认 0 未确认',
  `pledge` int(2) DEFAULT '0' COMMENT '质押状态 1.质押中 0.未质押',
  `deploy_time` timestamp NULL DEFAULT NULL COMMENT '发布项目时间 （申请银行产品时间）',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `idex_project_id` (`project_id`) USING BTREE,
  KEY `idx_bank_id` (`bank_id`) USING BTREE,
  KEY `idx_intellctual_id` (`intellectual_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Table structure for intellectual_property
-- ----------------------------
DROP TABLE IF EXISTS `intellectual_property`;
CREATE TABLE `intellectual_property` (
  `id` bigint(100) NOT NULL COMMENT '主键Id',
  `enterprise_id` bigint(100) DEFAULT NULL COMMENT '企业ID',
  `name` varchar(255) DEFAULT NULL COMMENT '知识产权名称',
  `code` varchar(255) DEFAULT NULL COMMENT '知识产权编号',
  `subject` varchar(255) DEFAULT NULL COMMENT '知识产权主体',
  `type` bigint(2) DEFAULT NULL COMMENT '知识产权类型',
  `file` varchar(255) DEFAULT NULL COMMENT '知识产权文件存储路径',
  `apply_time` timestamp NULL DEFAULT NULL COMMENT '申请日期',
  `remaining_year` varchar(255) DEFAULT NULL COMMENT '剩余年限',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `status` int(2) DEFAULT '1' COMMENT '知识产权状态 1 未认证 2 已认证 3 质押中',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC COMMENT='知识产权';

-- ----------------------------
-- Table structure for intellectual_property_center
-- ----------------------------
DROP TABLE IF EXISTS `intellectual_property_center`;
CREATE TABLE `intellectual_property_center` (
  `id` bigint(100) NOT NULL,
  `name` varchar(255) DEFAULT NULL COMMENT '企业全称',
  `abbreviation` varchar(255) DEFAULT NULL COMMENT '企业简称',
  `contacts_one` varchar(255) DEFAULT NULL COMMENT '企业联系人1',
  `contacts_one_position` varchar(255) DEFAULT NULL COMMENT '企业联系人1职务',
  `contacts_one_phone` varchar(255) DEFAULT NULL COMMENT '企业联系人1手机',
  `contacts_two` varchar(255) DEFAULT NULL COMMENT '企业联系人2',
  `contacts_two_position` varchar(255) DEFAULT NULL COMMENT '企业联系人2职务',
  `contacts_two_phone` varchar(255) DEFAULT NULL COMMENT '企业联系人2手机',
  `business_address` varchar(255) DEFAULT NULL COMMENT '企业通信地址',
  `contract_signing_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '合作合同签订时间',
  `contract_end_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '合作合同截止日期',
  `contract_file` varchar(255) DEFAULT NULL COMMENT '合同附件',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `comm_address_province` bigint(255) DEFAULT NULL COMMENT '企业通信 省',
  `comm_address_city` bigint(255) DEFAULT NULL COMMENT '企业通信 市',
  `comm_address_area` bigint(255) DEFAULT NULL COMMENT '企业通信 区',
  `auth_status` int(2) DEFAULT NULL COMMENT '认证状态 0.已邀请 1.待认证 2.已认证 3.认证失败',
  `nature` bigint(255) DEFAULT NULL COMMENT '企业性质',
  `type` bigint(255) DEFAULT NULL COMMENT '企业类型',
  `certification_time` timestamp NULL DEFAULT NULL COMMENT '认证时间',
  `show_status` int(2) DEFAULT '1' COMMENT '1显示 0隐藏',
  `invite_agency_id` bigint(100) DEFAULT NULL COMMENT '邀请对象id',
  `invite_agency_type` int(2) DEFAULT NULL COMMENT '邀请对象类型',
  `organization_type` int(2) DEFAULT NULL COMMENT '机构类型  5.知产局 6.知产中心',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for intellectual_property_center_audit_history
-- ----------------------------
DROP TABLE IF EXISTS `intellectual_property_center_audit_history`;
CREATE TABLE `intellectual_property_center_audit_history` (
  `id` bigint(20) NOT NULL,
  `intellectual_property_center_id` bigint(20) NOT NULL COMMENT '知识产权局或知识产权中心Id',
  `auth_status` int(2) DEFAULT NULL COMMENT '平台审核状态',
  `create_time` timestamp NULL DEFAULT NULL COMMENT '创建时间',
  `auth_message` varchar(255) DEFAULT NULL COMMENT '知识产品局或知识产品中心审核信息',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for menu
-- ----------------------------
DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu` (
  `id` bigint(100) NOT NULL COMMENT 'ID',
  `i_frame` int(2) DEFAULT '0' COMMENT '是否外链   0否 1是',
  `name` varchar(255) DEFAULT NULL COMMENT '菜单名称',
  `component` varchar(255) DEFAULT NULL COMMENT '组件',
  `pid` bigint(20) DEFAULT '0' COMMENT '上级菜单ID',
  `sort` bigint(20) DEFAULT '0' COMMENT '排序',
  `icon` varchar(255) DEFAULT NULL COMMENT '图标',
  `path` varchar(255) DEFAULT NULL COMMENT '链接地址',
  `cache` int(2) DEFAULT '0' COMMENT '缓存',
  `hidden` int(2) DEFAULT '1' COMMENT '是否隐藏  1.隐藏  2.显示',
  `component_name` varchar(20) DEFAULT '-' COMMENT '组件名称',
  `permission` varchar(255) DEFAULT NULL COMMENT '权限',
  `type` int(2) DEFAULT '1' COMMENT '类型  1.菜单 2.按钮 ',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `organization_type` int(2) DEFAULT NULL,
  `status` int(2) DEFAULT '1' COMMENT '机构状态 1.启用 2.不启用',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `FKqcf9gem97gqa5qjm4d3elcqt5` (`pid`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='系统菜单';

-- ----------------------------
-- Table structure for message
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message` (
  `id` bigint(100) NOT NULL COMMENT '主键',
  `code` varchar(255) DEFAULT NULL COMMENT '消息编号',
  `send_user_id` bigint(100) DEFAULT NULL COMMENT '发送者用户ID',
  `accept_user_id` bigint(100) DEFAULT NULL COMMENT '接收者用户Id',
  `template_id` bigint(100) DEFAULT NULL COMMENT '消息关联的模板ID',
  `pop_window_content` varchar(255) DEFAULT NULL COMMENT '弹窗提示内容',
  `content` varchar(255) DEFAULT NULL COMMENT '消息内容',
  `related_data` varchar(255) DEFAULT NULL COMMENT '关联数据',
  `type` int(2) DEFAULT NULL COMMENT '消息类型1.融资流程 2.合作流程 3.认证流程 4.注册流程 5.首次登录流程 6.账号实名',
  `msg_status` int(2) DEFAULT '0' COMMENT '消息状态 （0-未处理 1-已处理)',
  `link_url` varchar(255) DEFAULT NULL COMMENT '链接地址',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for message_apply_auth
-- ----------------------------
DROP TABLE IF EXISTS `message_apply_auth`;
CREATE TABLE `message_apply_auth` (
  `id` bigint(20) NOT NULL,
  `agency_id` bigint(20) NOT NULL COMMENT '机构Id',
  `apply_user_id` bigint(20) NOT NULL COMMENT '申请人ID',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for msg_template
-- ----------------------------
DROP TABLE IF EXISTS `msg_template`;
CREATE TABLE `msg_template` (
  `id` bigint(100) NOT NULL COMMENT '主键ID',
  `code` varchar(255) DEFAULT NULL COMMENT '模板编号',
  `name` varchar(255) DEFAULT NULL COMMENT '模板名称',
  `scene` varchar(255) DEFAULT NULL COMMENT '场景',
  `content` varchar(255) DEFAULT NULL COMMENT '模板内容',
  `pop_window_content` varchar(255) DEFAULT NULL COMMENT '弹窗提示内容',
  `msg_type` int(2) DEFAULT NULL COMMENT '模板类型 1.融资流程 2.合作流程 3.认证流程 4.注册流程 5.首次登录流程 6.账号实名',
  `accept_user_type` varchar(255) DEFAULT NULL COMMENT '推送对象类型',
  `link_url` varchar(255) DEFAULT NULL COMMENT '链接地址',
  `status` int(2) DEFAULT '1' COMMENT '状态 0.停用中 1.启用中',
  `sys_use` int(2) DEFAULT '0' COMMENT '系统使用中 0未使用 1使用中',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for oauth_client_details
-- ----------------------------
DROP TABLE IF EXISTS `oauth_client_details`;
CREATE TABLE `oauth_client_details` (
  `client_id` varchar(256) NOT NULL,
  `resource_ids` varchar(256) DEFAULT NULL,
  `client_secret` varchar(256) DEFAULT NULL,
  `scope` varchar(256) DEFAULT NULL,
  `authorized_grant_types` varchar(256) DEFAULT NULL,
  `web_server_redirect_uri` varchar(256) DEFAULT NULL,
  `authorities` varchar(256) DEFAULT NULL,
  `access_token_validity` int(11) DEFAULT NULL,
  `refresh_token_validity` int(11) DEFAULT NULL,
  `additional_information` varchar(4096) DEFAULT NULL,
  `autoapprove` varchar(256) DEFAULT NULL,
  `login_mapping` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`client_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for oauth_code
-- ----------------------------
DROP TABLE IF EXISTS `oauth_code`;
CREATE TABLE `oauth_code` (
  `code` varchar(256) DEFAULT NULL,
  `authentication` blob
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for operate_log
-- ----------------------------
DROP TABLE IF EXISTS `operate_log`;
CREATE TABLE `operate_log` (
  `id` bigint(100) NOT NULL,
  `ip` varchar(255) DEFAULT NULL COMMENT 'IP地址',
  `type` int(2) DEFAULT NULL COMMENT '记录类型 1.登录记录 2.密码修改记录 3.手机号修改记录 4.手机号认证记录 5.其他记录',
  `username` varchar(255) DEFAULT NULL COMMENT '登录名',
  `login_result` int(2) DEFAULT NULL COMMENT '登录结果 1.成功 2.失败',
  `login_time` timestamp NULL DEFAULT NULL COMMENT '登录时间',
  `password_type` int(2) DEFAULT NULL COMMENT '密码修改类型 1.密码修改 2.忘记密码 3.密码重置',
  `password_auth_type` int(2) DEFAULT NULL COMMENT '密码修改鉴权方式 1.银行卡鉴权 2.人脸',
  `password_result` int(2) DEFAULT NULL COMMENT '密码修改结果 1.成功 2.失败',
  `password_time` timestamp NULL DEFAULT NULL COMMENT '密码修改操作时间',
  `old_mobile` varchar(255) DEFAULT NULL COMMENT '原手机号',
  `new_mobile` varchar(255) DEFAULT NULL COMMENT '新手机号',
  `mobile_type` varchar(255) DEFAULT NULL COMMENT '手机号修改记录 鉴权方式 1.原手机号OTP 2.银行卡 3.管理员—宋小宝',
  `mobile_result` int(2) DEFAULT NULL COMMENT '手机修改结果 1.成功 2.失败',
  `mobile_time` timestamp NULL DEFAULT NULL COMMENT '手机号修改操作时间',
  `auth_mobile` varchar(255) DEFAULT NULL COMMENT '手机号认证手机',
  `auth_mobile_type` int(2) DEFAULT NULL COMMENT '手机号认证环节 1.注册 2.修改手机号 3.银行卡鉴权 4.首次登录 5.忘记密码',
  `auth_mobile_result` int(2) DEFAULT NULL COMMENT '手机号认证操作结果 1.成功 2.失败 3.未校验',
  `auth_mobile_time` timestamp NULL DEFAULT NULL COMMENT '手机号认证时间',
  `other_op_type` int(2) DEFAULT NULL COMMENT '操作类型 1.注册 2.实名认证',
  `other_auth_type` int(2) DEFAULT NULL COMMENT '鉴权方式 1.银行卡',
  `other_result` int(2) DEFAULT NULL COMMENT '操作结果 1.成功 2.失败',
  `other_time` timestamp NULL DEFAULT NULL COMMENT '其他记录操作时间',
  `operate_user_id` bigint(20) DEFAULT NULL COMMENT '操作用户',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for operation
-- ----------------------------
DROP TABLE IF EXISTS `operation`;
CREATE TABLE `operation` (
  `id` bigint(100) NOT NULL COMMENT '主键',
  `user_id` bigint(100) DEFAULT NULL COMMENT '用户id',
  `username` varchar(255) DEFAULT NULL COMMENT '用户名',
  `assess_status` int(2) DEFAULT '1' COMMENT '操作状态',
  `project_status` int(2) DEFAULT '1' COMMENT '项目状态',
  `project_id` bigint(100) DEFAULT NULL COMMENT '项目id',
  `enterprise_id` bigint(100) DEFAULT NULL COMMENT '企业id',
  `intellectual_property_id_list` longtext COMMENT '知识产权id集合',
  `bank_id` bigint(100) DEFAULT NULL COMMENT '银行id',
  `financial_product_id` bigint(100) DEFAULT NULL COMMENT '金融产品id',
  `third_id` bigint(100) DEFAULT NULL COMMENT '三方机构id',
  `args` longtext COMMENT '参数json字符串',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `operation_description` varchar(255) DEFAULT NULL COMMENT '操作描述，根据业务人为设定',
  `node_name` varchar(255) DEFAULT NULL COMMENT '评估节点名称',
  `node_method` varchar(255) DEFAULT NULL COMMENT '当前节点关键字',
  `move_method` varchar(255) DEFAULT NULL COMMENT '跳转到的节点关键字',
  `organization_type` int(2) DEFAULT NULL COMMENT '组织类型',
  `block_chain_payload_id` varchar(255) DEFAULT NULL COMMENT '上传区块链的回馈id',
  `block_hash` varchar(255) DEFAULT NULL COMMENT '区块hash',
  `block_height` int(11) DEFAULT NULL COMMENT '区块高度',
  `block_timestamp` bigint(100) DEFAULT NULL COMMENT '区块时间戳',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Table structure for organization
-- ----------------------------
DROP TABLE IF EXISTS `organization`;
CREATE TABLE `organization` (
  `id` bigint(100) NOT NULL COMMENT 'ID',
  `name` varchar(255) DEFAULT NULL COMMENT '名称',
  `pid` bigint(20) DEFAULT '0' COMMENT '上级部门',
  `status` int(2) DEFAULT '1' COMMENT '机构状态 1.启用 2.不启用',
  `abbreviation` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '企业简称',
  `contacts_one` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '企业联系人1',
  `contacts_one_phone` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '企业联系人1手机',
  `contacts_two` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '企业联系人2',
  `contacts_two_phone` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '企业联系人2手机',
  `address` varchar(255) DEFAULT NULL COMMENT '机构地址',
  `detailed_address` varchar(255) DEFAULT NULL COMMENT '机构详细地址',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `organization_type` int(2) DEFAULT NULL COMMENT '机构类型  1.企业 2.银行 3.评估 4.平台 5.知产局 6.知产中心',
  `level` int(255) DEFAULT NULL COMMENT '组织机构类型（当前组织的级别）',
  `agency_id` bigint(100) DEFAULT NULL,
  `address_province` bigint(255) DEFAULT NULL COMMENT '组织 省',
  `address_city` bigint(255) DEFAULT NULL COMMENT '组织 市',
  `address_area` bigint(255) DEFAULT NULL COMMENT '组织 区',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='部门';

-- ----------------------------
-- Table structure for payback
-- ----------------------------
DROP TABLE IF EXISTS `payback`;
CREATE TABLE `payback` (
  `id` bigint(100) NOT NULL COMMENT '主键',
  `project_id` bigint(100) NOT NULL COMMENT '项目id',
  `period` int(2) NOT NULL DEFAULT '1' COMMENT '还款期数',
  `deadline` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '应还日期',
  `money_need` decimal(10,2) NOT NULL COMMENT '应还金额',
  `repay_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '实际还款日期',
  `money_payback` decimal(10,2) DEFAULT NULL COMMENT '实还金额',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `status` int(2) DEFAULT '1' COMMENT '状态',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Table structure for persistent_logins
-- ----------------------------
DROP TABLE IF EXISTS `persistent_logins`;
CREATE TABLE `persistent_logins` (
  `username` varchar(64) NOT NULL,
  `series` varchar(64) NOT NULL,
  `token` varchar(64) NOT NULL,
  `last_used` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`series`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for platform_news
-- ----------------------------
DROP TABLE IF EXISTS `platform_news`;
CREATE TABLE `platform_news` (
  `id` bigint(100) NOT NULL COMMENT '主键ID',
  `index_img` varchar(255) DEFAULT NULL COMMENT '封面图片',
  `title` varchar(255) DEFAULT NULL COMMENT '标题',
  `content` longtext COMMENT '内容',
  `type` int(2) DEFAULT '1' COMMENT '资讯类型  1.新闻资讯  2.政策法规',
  `create_by` bigint(100) DEFAULT NULL COMMENT '创建用户ID',
  `update_by` bigint(100) DEFAULT NULL COMMENT '修改人',
  `count_read` bigint(100) DEFAULT '0' COMMENT '浏览数',
  `content_status` int(2) DEFAULT '2' COMMENT '内容状态 1.启动 2.未启动',
  `status` int(2) DEFAULT NULL COMMENT '配置状态 1.已发布 2.未发布',
  `tag` varchar(255) DEFAULT NULL COMMENT '埋点标签',
  `order_number` bigint(100) DEFAULT '0' COMMENT '排序号',
  `top` int(10) DEFAULT NULL COMMENT '置顶',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `update_content_time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Table structure for project
-- ----------------------------
DROP TABLE IF EXISTS `project`;
CREATE TABLE `project` (
  `id` bigint(100) NOT NULL COMMENT '主键',
  `enterprise_id` bigint(100) NOT NULL COMMENT '所属企业ID',
  `bank_id` bigint(100) DEFAULT NULL COMMENT '银行Id',
  `product_id` bigint(100) DEFAULT NULL COMMENT '银行产品Id',
  `assessment_agency_id` bigint(100) DEFAULT NULL COMMENT '评估机构ID',
  `bank_accept_agency_id` bigint(100) DEFAULT NULL COMMENT '具体金融产品受理机构ID',
  `intellectual_property_center_id` bigint(100) DEFAULT NULL COMMENT '知识产权中心ID',
  `intellectual_property_office_id` bigint(100) DEFAULT NULL COMMENT '知识产权局ID',
  `code` varchar(255) DEFAULT NULL COMMENT '项目编号',
  `finance_use_name` varchar(255) DEFAULT NULL COMMENT '融资用途名称',
  `rate_range` varchar(255) DEFAULT NULL COMMENT '接受利率范围',
  `target_amount` decimal(10,2) DEFAULT NULL COMMENT '融资需求额度（万元）',
  `finance_contact` varchar(255) DEFAULT NULL COMMENT '财务联系人',
  `finance_position` varchar(255) DEFAULT NULL COMMENT '财务联系人职务',
  `finance_mobile_phone` varchar(255) DEFAULT NULL COMMENT '财务联系人手机',
  `financing_contact` varchar(255) DEFAULT NULL COMMENT '融资联系人',
  `financing_position` varchar(255) DEFAULT NULL COMMENT '融资联系人职务',
  `financing_mobile_phone` varchar(255) DEFAULT NULL COMMENT '融资联系人手机',
  `total_assets3` decimal(10,2) DEFAULT NULL COMMENT '前三年总资产额 万',
  `total_negative3` decimal(10,2) DEFAULT NULL COMMENT '前三年总负 万',
  `operating_income3` decimal(10,2) DEFAULT NULL COMMENT '前三年营业收入 万',
  `cash_flow3` decimal(10,2) DEFAULT NULL COMMENT '前三年现金净流量单位：万元',
  `tax_paid3` decimal(10,2) DEFAULT NULL COMMENT '前三年上缴税金 单位：万元',
  `profit3` decimal(10,2) DEFAULT NULL COMMENT '前三年企业利润 单位：万元',
  `total_assets2` decimal(10,2) DEFAULT NULL COMMENT '前两年总资产额',
  `total_negative2` decimal(10,2) DEFAULT NULL COMMENT '前两年总负',
  `operating_income2` decimal(10,2) DEFAULT NULL COMMENT '前两年营业收入',
  `cash_flow2` decimal(10,2) DEFAULT NULL COMMENT '前两年现金净流量 单位：万元',
  `tax_paid2` decimal(10,2) DEFAULT NULL COMMENT '前两年上缴税金 单位：万元',
  `profit2` decimal(10,2) DEFAULT NULL COMMENT '前两年企业利润 单位：万元',
  `total_assets1` decimal(10,2) DEFAULT NULL COMMENT '前一年总资产额',
  `total_negative1` decimal(10,2) DEFAULT NULL COMMENT '前一年总负',
  `operating_income1` decimal(10,2) DEFAULT NULL COMMENT ' 前一年营业收入',
  `cash_flow1` decimal(10,2) DEFAULT NULL COMMENT '前一年现金净流量 单位：万元',
  `tax_paid1` decimal(10,2) DEFAULT NULL COMMENT '前一年上缴税金 单位：万元',
  `profit1` decimal(10,2) DEFAULT NULL COMMENT '前一年企业利润 单位：万元',
  `total_assets` decimal(10,2) DEFAULT NULL COMMENT '上个季度总资产额',
  `total_negative` decimal(10,2) DEFAULT NULL COMMENT '上个季度总负',
  `operating_income` decimal(10,2) DEFAULT NULL COMMENT '上个季度营业收入',
  `cash_flow` decimal(10,2) DEFAULT NULL COMMENT '上个季度现金净流量 单位：万元',
  `tax_paid` decimal(10,2) DEFAULT NULL COMMENT '上个季度上缴税金 单位：万元',
  `profit` decimal(10,2) DEFAULT NULL COMMENT '上个季度企业利润 单位：万元',
  `science_ratio` varchar(255) DEFAULT NULL COMMENT '企业科研成本在总成本占比',
  `total_ratio` varchar(255) DEFAULT NULL COMMENT '占企业销售收入总额比例',
  `enterprise_debt` varchar(1000) DEFAULT NULL COMMENT '企业负债情况',
  `product_name` varchar(255) DEFAULT NULL COMMENT '主要产品或技术名称',
  `project_stage` varchar(255) DEFAULT NULL COMMENT '项目阶段',
  `use_funds` varchar(255) DEFAULT NULL COMMENT '资金用途',
  `patent` varchar(255) DEFAULT NULL COMMENT ' 发明专利',
  `model_patents` varchar(255) DEFAULT NULL COMMENT '实用新型专利',
  `design_patent` varchar(255) DEFAULT NULL COMMENT '外观设计专利',
  `trademark_rights` varchar(255) DEFAULT NULL COMMENT '商标权',
  `copyright` varchar(255) DEFAULT NULL COMMENT '著作权',
  `layout_design` varchar(255) DEFAULT NULL COMMENT '集成电路布图设计',
  `indication` varchar(255) DEFAULT NULL COMMENT '地理标志',
  `month_all_salary1` decimal(10,2) DEFAULT NULL COMMENT '月工资总额 上一月',
  `month_all_electric_charge1` decimal(10,2) DEFAULT NULL COMMENT '月电费总额 上一月',
  `month_all_water_charge1` decimal(10,2) DEFAULT NULL COMMENT '月水费总额 上一月',
  `month_all_salary2` decimal(10,2) DEFAULT NULL COMMENT '月工资总额 上两月',
  `month_all_electric_charge2` decimal(10,2) DEFAULT NULL COMMENT '月电费总额 上两月',
  `month_all_water_charge2` decimal(10,2) DEFAULT NULL COMMENT '月水费总额 上两月',
  `month_all_salary3` decimal(10,2) DEFAULT NULL COMMENT '月工资总额 上三月',
  `month_all_electric_charge3` decimal(10,2) DEFAULT NULL COMMENT '月电费总额 上三月',
  `month_all_water_charge3` decimal(10,2) DEFAULT NULL COMMENT '月水费总额 上三月',
  `month_all_salary4` decimal(10,2) DEFAULT NULL COMMENT '月工资总额 上四月',
  `month_all_electric_charge4` decimal(10,2) DEFAULT NULL COMMENT '月电费总额 上四月',
  `month_all_water_charge4` decimal(10,0) DEFAULT NULL COMMENT '月水费总额 上四月',
  `month_all_salary5` decimal(10,2) DEFAULT NULL COMMENT '月工资总额 上五月',
  `month_all_electric_charge5` decimal(10,2) DEFAULT NULL COMMENT '月电费总额 上五月',
  `month_all_water_charge5` decimal(10,2) DEFAULT NULL COMMENT '月水费总额 上五月',
  `month_all_salary6` decimal(10,2) DEFAULT NULL COMMENT '月工资总额 上六月',
  `month_all_electric_charge6` decimal(10,2) DEFAULT NULL COMMENT '月电费总额 上六月',
  `month_all_water_charge6` decimal(10,2) DEFAULT NULL COMMENT '月水费总额 上六月',
  `status` int(2) DEFAULT '1' COMMENT '状态 1待申请',
  `apply_user_id` bigint(20) DEFAULT NULL COMMENT '申请人ID',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `idx_enterprise_id` (`enterprise_id`) USING BTREE,
  KEY `idx_bank_id` (`bank_id`) USING BTREE,
  KEY `idx_product_id` (`product_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC COMMENT='项目';

-- ----------------------------
-- Table structure for project_snapshot
-- ----------------------------
DROP TABLE IF EXISTS `project_snapshot`;
CREATE TABLE `project_snapshot` (
  `id` bigint(100) NOT NULL COMMENT '主键',
  `project_id` bigint(100) DEFAULT NULL COMMENT '项目ID',
  `enterprise_id` bigint(100) DEFAULT NULL COMMENT '所属企业ID',
  `bank_id` bigint(100) DEFAULT NULL COMMENT '银行Id',
  `product_id` bigint(100) DEFAULT NULL COMMENT '银行产品Id',
  `assessment_agency_id` bigint(100) DEFAULT NULL COMMENT '评估机构ID',
  `bank_accept_agency_id` bigint(100) DEFAULT NULL COMMENT '具体金融产品受理机构ID',
  `intellectual_property_center_id` bigint(100) DEFAULT NULL COMMENT '知识产权中心ID',
  `intellectual_property_office_id` bigint(100) DEFAULT NULL COMMENT '知识产权局ID',
  `finance_use_name` varchar(255) DEFAULT NULL COMMENT '融资用途名称',
  `project_page_json` text COMMENT '项目分页数据JSON',
  `project_detail_json` text COMMENT '项目详情数据JSON',
  `status` int(2) DEFAULT NULL COMMENT '项目状态',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for region
-- ----------------------------
DROP TABLE IF EXISTS `region`;
CREATE TABLE `region` (
  `id` int(11) NOT NULL COMMENT '区域主键',
  `name` varchar(40) DEFAULT NULL COMMENT '区域名称',
  `pid` int(11) DEFAULT NULL COMMENT '区域上级标识',
  `sname` varchar(40) DEFAULT NULL COMMENT '地名简称',
  `level` int(11) DEFAULT NULL COMMENT '区域等级',
  `citycode` varchar(20) DEFAULT NULL COMMENT '区域编码',
  `yzcode` varchar(20) DEFAULT NULL COMMENT '邮政编码',
  `mername` varchar(100) DEFAULT NULL COMMENT '组合名称',
  `Lng` float DEFAULT NULL,
  `Lat` float DEFAULT NULL,
  `pinyin` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` bigint(100) NOT NULL COMMENT 'ID',
  `name` varchar(255) NOT NULL COMMENT '名称',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `data_scope` varchar(255) DEFAULT NULL COMMENT '数据权限',
  `level` int(2) DEFAULT NULL COMMENT '角色级别(1为管理员，其他为普通)',
  `permission` varchar(255) DEFAULT NULL COMMENT '功能权限',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `organization_type` int(2) DEFAULT NULL,
  `status` int(2) NOT NULL DEFAULT '1' COMMENT '角色状态 1.启用 2.不启用',
  `organization_list` varchar(255) DEFAULT NULL COMMENT '融资用途时选择的组织id集合，用英文逗号隔开',
  `user_list` varchar(255) DEFAULT NULL COMMENT '用户id集合，用英文逗号隔开',
  `agency_id` bigint(100) DEFAULT NULL COMMENT '对应机构id',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='角色表';

-- ----------------------------
-- Table structure for roles_menus
-- ----------------------------
DROP TABLE IF EXISTS `roles_menus`;
CREATE TABLE `roles_menus` (
  `id` bigint(100) NOT NULL,
  `menu_id` bigint(100) DEFAULT NULL COMMENT '菜单ID',
  `role_id` bigint(100) DEFAULT NULL COMMENT '角色ID',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `FKcngg2qadojhi3a651a5adkvbq` (`role_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='角色菜单关联';

-- ----------------------------
-- Table structure for SPRING_SESSION
-- ----------------------------
DROP TABLE IF EXISTS `SPRING_SESSION`;
CREATE TABLE `SPRING_SESSION` (
  `PRIMARY_ID` char(36) NOT NULL,
  `SESSION_ID` char(36) NOT NULL,
  `CREATION_TIME` bigint(20) NOT NULL,
  `LAST_ACCESS_TIME` bigint(20) NOT NULL,
  `MAX_INACTIVE_INTERVAL` int(11) NOT NULL,
  `EXPIRY_TIME` bigint(20) NOT NULL,
  `PRINCIPAL_NAME` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`PRIMARY_ID`) USING BTREE,
  UNIQUE KEY `SPRING_SESSION_IX1` (`SESSION_ID`) USING BTREE,
  KEY `SPRING_SESSION_IX2` (`EXPIRY_TIME`) USING BTREE,
  KEY `SPRING_SESSION_IX3` (`PRINCIPAL_NAME`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for SPRING_SESSION_ATTRIBUTES
-- ----------------------------
DROP TABLE IF EXISTS `SPRING_SESSION_ATTRIBUTES`;
CREATE TABLE `SPRING_SESSION_ATTRIBUTES` (
  `SESSION_PRIMARY_ID` char(36) NOT NULL,
  `ATTRIBUTE_NAME` varchar(200) NOT NULL,
  `ATTRIBUTE_BYTES` blob NOT NULL,
  PRIMARY KEY (`SESSION_PRIMARY_ID`,`ATTRIBUTE_NAME`) USING BTREE,
  KEY `SPRING_SESSION_ATTRIBUTES_IX1` (`SESSION_PRIMARY_ID`) USING BTREE,
  CONSTRAINT `SPRING_SESSION_ATTRIBUTES_FK` FOREIGN KEY (`SESSION_PRIMARY_ID`) REFERENCES `SPRING_SESSION` (`PRIMARY_ID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for sys_dict
-- ----------------------------
DROP TABLE IF EXISTS `sys_dict`;
CREATE TABLE `sys_dict` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `type_code_id` bigint(20) DEFAULT NULL COMMENT '类型ID',
  `name` varchar(255) DEFAULT NULL COMMENT '字典名(前端展示名称)',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `idx_type_code_id` (`type_code_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Table structure for sys_dict_type
-- ----------------------------
DROP TABLE IF EXISTS `sys_dict_type`;
CREATE TABLE `sys_dict_type` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `desc` varchar(255) DEFAULT NULL COMMENT '类型描述',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Table structure for t_social_user_conn
-- ----------------------------
DROP TABLE IF EXISTS `t_social_user_conn`;
CREATE TABLE `t_social_user_conn` (
  `id` varchar(32) NOT NULL,
  `user_id` varchar(32) DEFAULT NULL,
  `provider_id` varchar(32) DEFAULT NULL COMMENT '如 qq,weixin',
  `provider_user_id` varchar(50) DEFAULT NULL COMMENT 'openid',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for template_variable
-- ----------------------------
DROP TABLE IF EXISTS `template_variable`;
CREATE TABLE `template_variable` (
  `id` bigint(100) NOT NULL COMMENT '主键',
  `key` varchar(255) DEFAULT NULL COMMENT '变量KEY',
  `name` varchar(255) DEFAULT NULL COMMENT '变量名称(前端展示中文名)',
  `value` varchar(255) DEFAULT NULL COMMENT '变量值',
  `template_id` bigint(100) DEFAULT NULL COMMENT '所属模板ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` bigint(100) NOT NULL COMMENT '主键ID',
  `code` varchar(255) DEFAULT NULL COMMENT '编号',
  `image` varchar(255) DEFAULT NULL COMMENT '用户头像',
  `name` varchar(255) DEFAULT NULL COMMENT '账号名称',
  `real_name` varchar(255) DEFAULT NULL COMMENT '真实姓名',
  `username` varchar(255) DEFAULT NULL COMMENT '登录账号',
  `mobile` varchar(255) DEFAULT NULL COMMENT '手机号',
  `id_card` varchar(255) DEFAULT NULL COMMENT '用户身份证',
  `bank_card` varchar(255) DEFAULT NULL COMMENT '银行卡号',
  `bank_mobile` varchar(255) DEFAULT NULL COMMENT '银行卡预留手机号',
  `password` varchar(255) DEFAULT NULL COMMENT '密码',
  `organization_id` bigint(100) DEFAULT NULL COMMENT '所属机构ID',
  `organization_type` varchar(255) DEFAULT NULL COMMENT '所属机构类型',
  `auth_status` int(2) DEFAULT '1' COMMENT '认证状态 1.未认证 2.已认证',
  `auth_mobile` int(2) DEFAULT '1' COMMENT '手机认证状态1未认证 2已认证',
  `status` int(2) DEFAULT '1' COMMENT '当前状态 1.启用中 2.停用中',
  `source` int(2) DEFAULT NULL COMMENT '添加来源 1.邀请 2.各个管理端的账号添加 3注册',
  `current_login_time` timestamp NULL DEFAULT NULL COMMENT '最近一次登录时间',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `create_by` bigint(100) DEFAULT NULL COMMENT '创建者用户ID',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `uk_username` (`username`) USING BTREE,
  UNIQUE KEY `uk_mobile` (`mobile`) USING BTREE,
  UNIQUE KEY `uk_id_card` (`id_card`) USING BTREE,
  KEY `idx_organization_id` (`organization_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Table structure for users_roles
-- ----------------------------
DROP TABLE IF EXISTS `users_roles`;
CREATE TABLE `users_roles` (
  `user_id` bigint(100) DEFAULT NULL COMMENT '用户ID',
  `role_id` bigint(100) DEFAULT NULL COMMENT '角色ID',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `id` bigint(100) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `FKq4eq273l04bpu4efj0jd0jb98` (`role_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1239842139609894913 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='用户角色关联';
