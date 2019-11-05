/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50716
 Source Host           : localhost:3306
 Source Schema         : myblog

 Target Server Type    : MySQL
 Target Server Version : 50716
 File Encoding         : 65001

 Date: 05/11/2019 09:22:59
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for blogs
-- ----------------------------
DROP TABLE IF EXISTS `blogs`;
CREATE TABLE `blogs`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `createtime` bigint(20) NOT NULL DEFAULT 0,
  `author` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of blogs
-- ----------------------------
INSERT INTO `blogs` VALUES (1, '标题A', '内容A', 1572311553545, 'zhangsan');
INSERT INTO `blogs` VALUES (2, '标题B', '内容B', 1572312691442, 'lisi');
INSERT INTO `blogs` VALUES (3, '标题C', '内容C', 1572316037933, 'lisi');
INSERT INTO `blogs` VALUES (4, '标题D', '内容D', 1572316171945, 'hanwu');
INSERT INTO `blogs` VALUES (5, '深入理解原型链', '什么是原型链，我没搞懂', 1572836504085, 'lisi');
INSERT INTO `blogs` VALUES (6, '<script>alert(document.cookie)</script>', '11123', 1572878812212, 'lisi');
INSERT INTO `blogs` VALUES (9, '123', '1233', 1572878900226, 'zhangsan');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `realname` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'zhangsan', 'cc508cd1c6b6cabfaa94852c311deb65', '张三');
INSERT INTO `users` VALUES (2, 'lisi', 'cc508cd1c6b6cabfaa94852c311deb65', '李四');
INSERT INTO `users` VALUES (3, 'hanwu', 'cc508cd1c6b6cabfaa94852c311deb65', '寒武');
INSERT INTO `users` VALUES (4, 'xuanwu', 'cc508cd1c6b6cabfaa94852c311deb65', '玄武');

SET FOREIGN_KEY_CHECKS = 1;
