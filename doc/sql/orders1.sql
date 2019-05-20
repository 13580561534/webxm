/*
Navicat MySQL Data Transfer

Source Server         : h51902
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h51902

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-05-20 17:41:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for orders1
-- ----------------------------
DROP TABLE IF EXISTS `orders1`;
CREATE TABLE `orders1` (
  `oid` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `gid` int(11) DEFAULT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `comment` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `shopname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `bigimg` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `smallimg` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `midimg` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `sales` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `buy` int(11) DEFAULT NULL,
  `rest` int(11) DEFAULT NULL,
  `otherimg` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`oid`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of orders1
-- ----------------------------
INSERT INTO `orders1` VALUES ('21', '39', '美赞臣(MeadJohnson)安儿宝A+婴幼儿配方奶粉 香港版3段（1-3岁）904g 荷兰原罐进口', '569', null, null, null, 'small3.jpg', null, null, '3', '12', null);
INSERT INTO `orders1` VALUES ('20', '19', '美赞臣(MeadJohnson)安儿宝A+婴幼儿配方奶粉 香港版3段（1-3岁）903g 荷兰原罐进口', '566', null, null, null, 'small3.jpg', null, null, '1', '12', null);
INSERT INTO `orders1` VALUES ('22', '1', '新西兰进口 a2 Platinum 白金版婴幼儿奶粉 3段(1-3岁) 900g/罐', '226', null, null, null, 'small1.jpg', null, null, '2', '12', null);
INSERT INTO `orders1` VALUES ('23', '37', '新西兰进口 a2 Platinum 白金版婴幼儿奶粉 3段(1-3岁) 904g/罐', '345', null, null, null, 'small1.jpg', null, null, '2', '12', null);
SET FOREIGN_KEY_CHECKS=1;
