/*
Navicat MySQL Data Transfer

Source Server         : h51902
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h51902

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-05-20 17:41:24
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('4', 'liu1', 'abc777', '23451873722');
INSERT INTO `user` VALUES ('5', 'liu1', 'abc777', '23451873722');
INSERT INTO `user` VALUES ('8', 'linlin', '1563573', '15638768741');
INSERT INTO `user` VALUES ('9', 'linlin', '1563573', '1563876874');
INSERT INTO `user` VALUES ('10', 'linlin', '1563573', '1563876874');
INSERT INTO `user` VALUES ('11', 'linlin', '1563573', '1563876874');
SET FOREIGN_KEY_CHECKS=1;
