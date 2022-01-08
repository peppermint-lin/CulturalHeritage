/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : culturalheritage

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2021-09-13 11:59:01
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `answer`
-- ----------------------------
DROP TABLE IF EXISTS `answer`;
CREATE TABLE `answer` (
  `telephone` varchar(20) NOT NULL DEFAULT '',
  `HYMDhistoryQ1` int(2) DEFAULT NULL,
  `HYMDhistoryQ2` int(2) DEFAULT NULL,
  `HYMDhistoryQ3` int(2) DEFAULT NULL,
  `HYMDhistoryQ4` int(2) DEFAULT NULL,
  `HYMDhistoryQ5` int(2) DEFAULT NULL,
  `HYMDhistoryQ6` int(2) DEFAULT NULL,
  `HYMDhistoryQ7` int(2) DEFAULT NULL,
  `HYMDhistoryQ8` int(2) DEFAULT NULL,
  `HYMDhistoryQ9` int(2) DEFAULT NULL,
  `HYMDhistoryQ10` int(2) DEFAULT NULL,
  `HYMDhistoryQ11` int(2) DEFAULT NULL,
  `HYMDhistoryQ12` int(2) DEFAULT NULL,
  `HYMDcharacterQ1` int(2) DEFAULT NULL,
  `HYMDcharacterQ2` int(2) DEFAULT NULL,
  `HYMDcharacterQ3` int(2) DEFAULT NULL,
  `HYMDcharacterQ4` int(2) DEFAULT NULL,
  `HYMDcharacterQ5` int(2) DEFAULT NULL,
  `HYMDcharacterQ6` int(2) DEFAULT NULL,
  `HYMDcharacterQ7` int(2) DEFAULT NULL,
  `HYMDcharacterQ8` int(2) DEFAULT NULL,
  `HYMDcharacterQ9` int(2) DEFAULT NULL,
  `HYMDcharacterQ10` int(2) DEFAULT NULL,
  `HYMDmakeQ1` int(2) DEFAULT NULL,
  `HYMDmakeQ2` int(2) DEFAULT NULL,
  `HYMDmakeQ3` int(2) DEFAULT NULL,
  `HYMDmakeQ4` int(2) DEFAULT NULL,
  `HYMDmakeQ5` int(2) DEFAULT NULL,
  `HYMDmakeQ6` int(2) DEFAULT NULL,
  `HYMDmakeQ7` int(2) DEFAULT NULL,
  `XWKZhistoryQ1` int(2) DEFAULT NULL,
  `XWKZhistoryQ2` int(2) DEFAULT NULL,
  `XWKZhistoryQ3` int(2) DEFAULT NULL,
  `XWKZhistoryQ4` int(2) DEFAULT NULL,
  `XWKZhistoryQ5` int(2) DEFAULT NULL,
  `XWKZhistoryQ6` int(2) DEFAULT NULL,
  `XWKZhistoryQ7` int(2) DEFAULT NULL,
  `XWKZhistoryQ8` int(2) DEFAULT NULL,
  `XWKZhistoryQ9` int(2) DEFAULT NULL,
  `XWKZnowadaysQ1` int(2) DEFAULT NULL,
  `XWKZnowadaysQ2` int(2) DEFAULT NULL,
  `XWKZnowadaysQ3` int(2) DEFAULT NULL,
  `XWKZnowadaysQ4` int(2) DEFAULT NULL,
  `XWKZnowadaysQ5` int(2) DEFAULT NULL,
  `XWKZnowadaysQ6` int(2) DEFAULT NULL,
  `XWKZnowadaysQ7` int(2) DEFAULT NULL,
  `XWKZnowadaysQ8` int(2) DEFAULT NULL,
  `XWKZnowadaysQ9` int(2) DEFAULT NULL,
  `XWKZmakeQ1` int(2) DEFAULT NULL,
  `XWKZmakeQ2` int(2) DEFAULT NULL,
  `XWKZmakeQ3` int(2) DEFAULT NULL,
  `XWKZmakeQ4` int(2) DEFAULT NULL,
  `XWKZmakeQ5` int(2) DEFAULT NULL,
  `XWKZmakeQ6` int(2) DEFAULT NULL,
  `YDWhistoryQ1` int(2) DEFAULT NULL,
  `YDWhistoryQ2` int(2) DEFAULT NULL,
  `YDWhistoryQ3` int(2) DEFAULT NULL,
  `YDWhistoryQ4` int(2) DEFAULT NULL,
  `YDWhistoryQ5` int(2) DEFAULT NULL,
  `YDWhistoryQ6` int(2) DEFAULT NULL,
  `YDWhistoryQ7` int(2) DEFAULT NULL,
  `YDWhistoryQ8` int(2) DEFAULT NULL,
  `YDWnowadaysQ1` int(2) DEFAULT NULL,
  `YDWnowadaysQ2` int(2) DEFAULT NULL,
  `YDWnowadaysQ3` int(2) DEFAULT NULL,
  `YDWnowadaysQ4` int(2) DEFAULT NULL,
  `YDWnowadaysQ5` int(2) DEFAULT NULL,
  `YDWmakeQ1` int(2) DEFAULT NULL,
  `YDWmakeQ2` int(2) DEFAULT NULL,
  `YDWmakeQ3` int(2) DEFAULT NULL,
  `YDWmakeQ4` int(2) DEFAULT NULL,
  `YDWmakeQ5` int(2) DEFAULT NULL,
  PRIMARY KEY (`telephone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of answer
-- ----------------------------
INSERT INTO `answer` VALUES ('13588818190', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `answer` VALUES ('15356631520', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '4', '4', '2', '1', '2', '2', '1', '2', '2', '3', '2', '2', '2', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `telephone` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `header` varchar(20) DEFAULT NULL,
  `score` double(20,0) DEFAULT NULL,
  `adventureHYMD` double(20,2) DEFAULT NULL,
  `adventureXWKZ` double(20,2) DEFAULT NULL,
  `adventureYDW` double(20,2) DEFAULT NULL,
  `familiar` double(20,2) DEFAULT NULL,
  `manufactureHYMD` double(20,2) DEFAULT NULL,
  `manufactureXWKZ` double(20,2) DEFAULT NULL,
  `manufactureYDW` double(20,2) DEFAULT NULL,
  `testHYMDhistory` double(20,2) DEFAULT NULL,
  `testHYMDcharacter` double(20,2) DEFAULT NULL,
  `testHYMDmake` double(20,2) DEFAULT NULL,
  `testXWKZhistory` double(20,2) DEFAULT NULL,
  `testXWKZnowadays` double(20,2) DEFAULT NULL,
  `testXWKZmake` double(20,2) DEFAULT NULL,
  `testYDWhistory` double(20,2) DEFAULT NULL,
  `testYDWnowadays` double(20,2) DEFAULT NULL,
  `testYDWmake` double(20,2) DEFAULT NULL,
  PRIMARY KEY (`telephone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('13588818190', '松鼠', '123456', 'timg.jpg', '9', '33.33', '0.00', '0.00', '0.00', '0.00', '0.00', '0.00', '0.00', '0.00', '0.00', '0.00', '0.00', '0.00', '0.00', '0.00', '0.00');
INSERT INTO `user` VALUES ('15356631520', '冰淇淋', '123456', 'timg.jpg', '41', '0.00', '0.00', '0.00', '0.00', '4.00', '6.00', '0.00', '8.33', '10.00', '14.28', null, null, null, null, null, null);
