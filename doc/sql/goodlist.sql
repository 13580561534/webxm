/*
Navicat MySQL Data Transfer

Source Server         : h51902
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h51902

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-05-20 17:40:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodlist
-- ----------------------------
DROP TABLE IF EXISTS `goodlist`;
CREATE TABLE `goodlist` (
  `gid` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `shopname` varchar(255) DEFAULT NULL,
  `bigimg` varchar(255) DEFAULT NULL,
  `smallimg` varchar(255) NOT NULL,
  `midimg` varchar(255) NOT NULL,
  `sales` varchar(255) DEFAULT NULL,
  `news` varchar(255) DEFAULT NULL,
  `otherimg` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodlist
-- ----------------------------
INSERT INTO `goodlist` VALUES ('1', '新西兰进口 a2 Platinum 白金版婴幼儿奶粉 3段(1-3岁) 900g/罐', '226', '67', 'a2海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small1.jpg', 'mid1.jpg', '213', '1231', 'd224792f306bdac4m.jpg');
INSERT INTO `goodlist` VALUES ('2', '资生堂（Shiseido）水之印四效合一嫩白啫喱精华 补水保湿 晒后修复 200ml/瓶', '228', '82', '资生堂美海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small1.jpg', 'mid1.jpg&mid2.jpg&mid3.jpg&mid4.jpg', '2321', '3423', 'ed7f5ecf442f90e9.jpg');
INSERT INTO `goodlist` VALUES ('3', '美赞臣(MeadJohnson)安儿宝A+婴幼儿配方奶粉 香港版3段（1-3岁）900g 荷兰原罐进口', '338', '69', '美赞臣海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small1.jpg', 'd224792f306bdac4m.jpg&c8dd22b7c33ee5f5m.jpg&a7da6fd3a4bc8a9cm.jpg&e8a4093254fb9229.jpg', '2321', '3424', 'd224792f306bdac4m.jpg');
INSERT INTO `goodlist` VALUES ('4', '新西兰进口 澳洲爱他美(Aptamil) 白金版婴儿配方奶粉 1段（0-6月）900g/罐', '255', '59', 'Aptamil爱他美海外自营官方旗舰店', 'd224792f306bdac4m.jpg&ed7f5ecf442f90e9.jpg&5a252c8cNe0e4b1ea.jpg&5bf386d8N6b73798c.jpg', 'small1.jpg', 'mid1.jpg&mid2.jpg&mid3.jpg&mid4.jpg', '223', '4546', '5a252c8cNe0e4b1ea.jpg');
INSERT INTO `goodlist` VALUES ('5', '新西兰进口 a2 Platinum 白金版婴幼儿奶粉 3段(1-3岁) 901g/罐', '311', '49', 'a2海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small1.jpg', 'mid1.jpg', '454', '5456', 'big1.jpg');
INSERT INTO `goodlist` VALUES ('6', '英国爱他美（Aptamil）白金版 婴幼儿奶粉 3段（12个月以上）801g', '367', '39', 'Aptamil爱他美海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small1.jpg', 'small1.jpg&small2.jpg&small3.jpg&small4.jpg', '454', '5646', 'ed7f5ecf442f90e9.jpg');
INSERT INTO `goodlist` VALUES ('7', '美赞臣(MeadJohnson)安儿宝A+婴幼儿配方奶粉 香港版3段（1-3岁）901g 荷兰原罐进口', '423', '45', '美赞臣海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small3.jpg', 'mid3.jpg', '567', '6758', '5abcb9b6N0e4e02c5.jpg');
INSERT INTO `goodlist` VALUES ('8', '新西兰进口 澳洲爱他美(Aptamil) 白金版婴儿配方奶粉 1段（0-6月）901g/罐', '479', '23', 'Aptamil爱他美海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small4.jpg', 'mid4.jpg', '234', '4354', 'd224792f306bdac4m.jpg');
INSERT INTO `goodlist` VALUES ('9', '新西兰进口 a2 Platinum 白金版婴幼儿奶粉 3段(1-3岁) 901g/罐', '535', '45', 'a2海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small1.jpg', 'mid1.jpg', '673', '2344', '5abcb9b6N0e4e02c5.jpg');
INSERT INTO `goodlist` VALUES ('10', '英国爱他美（Aptamil）白金版 婴幼儿奶粉 3段（12个月以上）801g', '591', '56', 'Aptamil爱他美海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small2.jpg', 'mid2.jpg', '23', '6758', '5a252c8cNe0e4b1ea.jpg');
INSERT INTO `goodlist` VALUES ('11', '美赞臣(MeadJohnson)安儿宝A+婴幼儿配方奶粉 香港版3段（1-3岁）901g 荷兰原罐进口', '647', '67', '美赞臣海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small3.jpg', 'mid3.jpg', '45', '5456', 'big1.jpg');
INSERT INTO `goodlist` VALUES ('12', '新西兰进口 澳洲爱他美(Aptamil) 白金版婴儿配方奶粉 1段（0-6月）901g/罐', '338', '78', 'Aptamil爱他美海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small4.jpg', 'mid4.jpg', '455', '6456', 'ed7f5ecf442f90e9.jpg');
INSERT INTO `goodlist` VALUES ('13', '新西兰进口 a2 Platinum 白金版婴幼儿奶粉 3段(1-3岁) 902g/罐', '255', '45', '美赞臣海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small1.jpg', 'mid1.jpg', '875', '7869', 'd224792f306bdac4m.jpg');
INSERT INTO `goodlist` VALUES ('14', '英国爱他美（Aptamil）白金版 婴幼儿奶粉 3段（12个月以上）802g', '234', '48', 'Aptamil爱他美海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small2.jpg', 'mid2.jpg', '546', '5765', 'ed7f5ecf442f90e9.jpg');
INSERT INTO `goodlist` VALUES ('15', '美赞臣(MeadJohnson)安儿宝A+婴幼儿配方奶粉 香港版3段（1-3岁）902g 荷兰原罐进口', '266', '50', '美赞臣海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small3.jpg', 'mid3.jpg', '434', '3432', 'big1.jpg');
INSERT INTO `goodlist` VALUES ('16', '新西兰进口 澳洲爱他美(Aptamil) 白金版婴儿配方奶粉 1段（0-6月）902g/罐', '255', '52', 'Aptamil爱他美海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small4.jpg', 'mid4.jpg', '5433', '1256', '5abcb9b6N0e4e02c5.jpg');
INSERT INTO `goodlist` VALUES ('17', '新西兰进口 a2 Platinum 白金版婴幼儿奶粉 3段(1-3岁) 903g/罐', '344', '54', 'Aptamil爱他美海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small1.jpg', 'mid1.jpg', '567', '2134', '5a252c8cNe0e4b1ea.jpg');
INSERT INTO `goodlist` VALUES ('18', '英国爱他美（Aptamil）白金版 婴幼儿奶粉 3段（12个月以上）803g', '1039', '56', '美赞臣海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small2.jpg', 'mid2.jpg', '673', '6767', 'ed7f5ecf442f90e9.jpg');
INSERT INTO `goodlist` VALUES ('19', '美赞臣(MeadJohnson)安儿宝A+婴幼儿配方奶粉 香港版3段（1-3岁）903g 荷兰原罐进口', '566', '58', 'Aptamil爱他美海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small3.jpg', 'mid3.jpg', '777', '3437', 'd224792f306bdac4m.jpg');
INSERT INTO `goodlist` VALUES ('20', '新西兰进口 澳洲爱他美(Aptamil) 白金版婴儿配方奶粉 1段（0-6月）903g/罐', '778', '60', '美赞臣海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small4.jpg', 'mid4.jpg', '435', '6789', '5a057287Nd316a88c.jpg');
INSERT INTO `goodlist` VALUES ('21', '新西兰进口 a2 Platinum 白金版婴幼儿奶粉 3段(1-3岁) 903g/罐', '334', '62', 'Aptamil爱他美海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small1.jpg', 'mid1.jpg', '354', '4352', 'big1.jpg');
INSERT INTO `goodlist` VALUES ('22', '英国爱他美（Aptamil）白金版 婴幼儿奶粉 3段（12个月以上）803g', '888', '64', 'Aptamil爱他美海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small2.jpg', 'mid2.jpg', '435', '2342', 'd224792f306bdac4m.jpg');
INSERT INTO `goodlist` VALUES ('23', '美赞臣(MeadJohnson)安儿宝A+婴幼儿配方奶粉 香港版3段（1-3岁）903g 荷兰原罐进口', '1442', '66', '美赞臣海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small3.jpg', 'mid3.jpg', '756', '3546', 'big1.jpg');
INSERT INTO `goodlist` VALUES ('24', '新西兰进口 澳洲爱他美(Aptamil) 白金版婴儿配方奶粉 1段（0-6月）903g/罐', '1996', '68', 'Aptamil爱他美海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small4.jpg', 'mid4.jpg', '456', '2432', 'ed7f5ecf442f90e9.jpg');
INSERT INTO `goodlist` VALUES ('25', '新西兰进口 a2 Platinum 白金版婴幼儿奶粉 3段(1-3岁) 904g/罐', '123', '70', '美赞臣海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small1.jpg', 'mid1.jpg', '345', '4324', '5bf386d8N6b73798c.jpg');
INSERT INTO `goodlist` VALUES ('26', '英国爱他美（Aptamil）白金版 婴幼儿奶粉 3段（12个月以上）804g', '156', '72', 'Aptamil爱他美海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small2.jpg', 'mid2.jpg', '568', '5466', '5a057287Nd316a88c.jpg');
INSERT INTO `goodlist` VALUES ('27', '美赞臣(MeadJohnson)安儿宝A+婴幼儿配方奶粉 香港版3段（1-3岁）904g 荷兰原罐进口', '189', '74', 'Aptamil爱他美海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small3.jpg', 'mid3.jpg', '785', '3242', '5bf386d8N6b73798c.jpg');
INSERT INTO `goodlist` VALUES ('28', '新西兰进口 澳洲爱他美(Aptamil) 白金版婴儿配方奶粉 1段（0-6月）904g/罐', '222', '76', '美赞臣海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small4.jpg', 'mid4.jpg', '345', '3246', 'big1.jpg');
INSERT INTO `goodlist` VALUES ('29', '新西兰进口 a2 Platinum 白金版婴幼儿奶粉 3段(1-3岁) 904g/罐', '255', '78', 'Aptamil爱他美海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small1.jpg', 'mid1.jpg', '465', '4356', '5a057287Nd316a88c.jpg');
INSERT INTO `goodlist` VALUES ('30', '英国爱他美（Aptamil）白金版 婴幼儿奶粉 3段（12个月以上）804g', '288', '80', '美赞臣海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small2.jpg', 'mid2.jpg', '675', '7567', '5bf386d8N6b73798c.jpg');
INSERT INTO `goodlist` VALUES ('31', '美赞臣(MeadJohnson)安儿宝A+婴幼儿配方奶粉 香港版3段（1-3岁）904g 荷兰原罐进口', '321', '82', 'Aptamil爱他美海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small3.jpg', 'mid3.jpg', '766', '3547', '5a057287Nd316a88c.jpg');
INSERT INTO `goodlist` VALUES ('32', '新西兰进口 澳洲爱他美(Aptamil) 白金版婴儿配方奶粉 1段（0-6月）904g/罐', '354', '84', 'Aptamil爱他美海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small4.jpg', 'mid4.jpg', '970', '4324', 'ed7f5ecf442f90e9.jpg');
INSERT INTO `goodlist` VALUES ('33', '新西兰进口 a2 Platinum 白金版婴幼儿奶粉 3段(1-3岁) 903g/罐', '344', '86', '美赞臣海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small1.jpg', 'mid1.jpg', '345', '3453', 'big1.jpg');
INSERT INTO `goodlist` VALUES ('34', '英国爱他美（Aptamil）白金版 婴幼儿奶粉 3段（12个月以上）803g', '234', '88', 'Aptamil爱他美海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small2.jpg', 'mid2.jpg', '852', '1235', 'd224792f306bdac4m.jpg');
INSERT INTO `goodlist` VALUES ('35', '美赞臣(MeadJohnson)安儿宝A+婴幼儿配方奶粉 香港版3段（1-3岁）903g 荷兰原罐进口', '124', '90', '美赞臣海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small3.jpg', 'mid3.jpg', '434', '3130', '5a057287Nd316a88c.jpg');
INSERT INTO `goodlist` VALUES ('36', '新西兰进口 澳洲爱他美(Aptamil) 白金版婴儿配方奶粉 1段（0-6月）903g/罐', '233', '92', 'Aptamil爱他美海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small4.jpg', 'mid4.jpg', '345', '3479', '5a252c8cNe0e4b1ea.jpg');
INSERT INTO `goodlist` VALUES ('37', '新西兰进口 a2 Platinum 白金版婴幼儿奶粉 3段(1-3岁) 904g/罐', '345', '94', 'Aptamil爱他美海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small1.jpg', 'mid1.jpg', '567', '9876', 'big1.jpg');
INSERT INTO `goodlist` VALUES ('38', '英国爱他美（Aptamil）白金版 婴幼儿奶粉 3段（12个月以上）804g', '457', '96', '美赞臣海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small2.jpg', 'mid2.jpg', '873', '8656', 'd224792f306bdac4m.jpg');
INSERT INTO `goodlist` VALUES ('39', '美赞臣(MeadJohnson)安儿宝A+婴幼儿配方奶粉 香港版3段（1-3岁）904g 荷兰原罐进口', '569', '98', 'Aptamil爱他美海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small3.jpg', 'mid3.jpg', '453', '5679', 'ed7f5ecf442f90e9.jpg');
INSERT INTO `goodlist` VALUES ('40', '新西兰进口 澳洲爱他美(Aptamil) 白金版婴儿配方奶粉 1段（0-6月）904g/罐', '332', '100', '美赞臣海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small4.jpg', 'mid4.jpg', '234', '5758', '5bf386d8N6b73798c.jpg');
INSERT INTO `goodlist` VALUES ('41', '新西兰进口 a2 Platinum 白金版婴幼儿奶粉 3段(1-3岁) 904g/罐', '134', '102', 'Aptamil爱他美海外自营官方旗舰店', 'big1.jpg&big2.jpg&big3.jpg&big4.jpg', 'small1.jpg', 'mid1.jpg', '832', '5675', '5a057287Nd316a88c.jpg');
SET FOREIGN_KEY_CHECKS=1;
