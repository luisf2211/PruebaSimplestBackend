-- MySQL dump 10.13  Distrib 8.0.41, for Linux (aarch64)
--
-- Host: localhost    Database: simplestguru
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(100) NOT NULL,
  `quantity` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `isActive` tinyint(1) DEFAULT '1',
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `description` (`description`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Avenas',5,'2025-04-02 21:56:17','2025-04-03 05:00:31',0,1),(2,'Papite',3,'2025-04-03 00:12:36','2025-04-03 04:37:34',0,1),(5,'Doritos',5,'2025-04-03 01:09:20','2025-04-03 03:33:16',0,1),(6,'Doritosss',5,'2025-04-03 01:09:31','2025-04-03 04:37:25',0,1),(8,'Leche',5,'2025-04-03 01:10:39','2025-04-03 03:55:35',0,1),(10,'Leches',5,'2025-04-03 01:11:10','2025-04-03 03:55:35',0,1),(12,'Avena',5,'2025-04-03 01:11:44','2025-04-03 03:55:34',0,1),(13,'test',1221312,'2025-04-03 03:46:03','2025-04-03 03:55:34',0,NULL),(15,'testdwdq',1221312,'2025-04-03 03:47:29','2025-04-03 03:55:33',0,NULL),(16,'prueba',123123,'2025-04-03 03:47:53','2025-04-03 03:55:33',0,NULL),(17,'prueba2',12312,'2025-04-03 03:48:27','2025-04-03 03:55:33',0,NULL),(18,'asdsad',213123,'2025-04-03 03:48:31','2025-04-03 03:55:32',0,NULL),(26,'test13123122',12312,'2025-04-03 03:52:33','2025-04-03 03:55:32',0,NULL),(28,'test13123122dw',12312,'2025-04-03 03:52:51','2025-04-03 03:55:31',0,NULL),(36,'teasdpoad',123123123,'2025-04-03 03:55:27','2025-04-03 03:55:31',0,NULL),(37,'marko',123,'2025-04-03 03:55:39','2025-04-03 04:37:24',0,NULL),(38,'maximo',12,'2025-04-03 04:35:32','2025-04-03 04:36:29',0,NULL),(39,'Pizza',123,'2025-04-03 04:37:39','2025-04-03 05:00:30',0,NULL),(40,'Pringles de queso',25,'2025-04-03 04:59:42','2025-04-03 05:00:33',0,NULL),(41,'Jugo de naranja',20,'2025-04-03 05:00:49','2025-04-03 05:00:49',1,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `isActive` tinyint(1) DEFAULT '1',
  `user_role` int DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `user_role` (`user_role`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`user_role`) REFERENCES `users_roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'luis felipe reyes baez','lreyes@test.com','$2b$10$EvSZOB6VJAIe7dFoS5M07eUlYzyFkjjC9k.XvmCWwQU.MLOHogkPq','2025-04-02 21:47:26','2025-04-02 23:31:22',0,1),(2,'luis','lreyesss@test.com','$2b$10$EvSZOB6VJAIe7dFoS5M07eUlYzyFkjjC9k.XvmCWwQU.MLOHogkPq','2025-04-02 23:25:38','2025-04-02 23:31:22',1,1),(3,'luis','lreyessss@test.com','$2b$10$EvSZOB6VJAIe7dFoS5M07eUlYzyFkjjC9k.XvmCWwQU.MLOHogkPq','2025-04-02 23:28:47','2025-04-02 23:28:47',1,1),(4,'luis','lreyesssss@test.com','$2b$10$9XnXCFzejp68idyJZa/qlOyVuAqP7Q8lr5ZFgXeybmGi0dvyFmLze','2025-04-02 23:30:13','2025-04-02 23:30:13',1,1),(5,'luis','lreyessssss@test.com','$2b$10$ABUTC3cEg2XfiNYvOnUR5OyI10XM1LdBmtb0n3cF0B7S62BC4oIMu','2025-04-02 23:30:35','2025-04-02 23:30:35',1,1),(6,'maximo garcia','maximo@test.com','$2b$10$5NG85lCXNCBRAq4tVx/j1u0RLvOp3h2ihiEaQKqQjrdiYzsXRQZKy','2025-04-02 23:33:04','2025-04-02 23:33:04',1,1),(7,'maximo garcia','maximo22@test.com','$2b$10$zgE6CMekpkrj3UQSGWDi/.pvenLolM3moUfSWV2pYrBf3yRH.CzEy','2025-04-02 23:33:22','2025-04-02 23:33:22',1,1),(8,'luis','lreyes@test','$2b$10$6rGOHFvDWDYNA6U8/bf/B.rbLdn7NCPz3FcKRAwPFLT03I9iqJ1mG','2025-04-03 00:06:13','2025-04-03 00:06:13',1,1),(9,'test','test','$2b$10$2l5jhalWgEJx02Tyt9AsDuth8Uf6sou7OsxglrN/7VoeLRjTY6HUe','2025-04-03 02:32:17','2025-04-03 02:32:17',1,1),(10,'test','test2','$2b$10$LCn7gK8F9hQc5b/4Z4jY8.i/h0KRJjW0zXUeNkBB0uX7onlVWFVg.','2025-04-03 02:36:50','2025-04-03 02:36:50',1,1),(11,'test','test21','$2b$10$cJwgk3HGh.pUHkpMfBCFhulB0vtL6FjCuAIW3BulxaeQZ8DNynSBi','2025-04-03 02:37:06','2025-04-03 02:37:06',1,1),(12,'test','test21sa','$2b$10$5E5BgeL2xc9ADYPybfIIqefxdLLyKVHZ10lmi/CLigTTtEORDyGVu','2025-04-03 02:37:33','2025-04-03 02:37:33',1,1),(13,'test','test21saa','$2b$10$ryWYOsjkFsGmPR.hjDI3AuPB9OuJxKnfYLY2ItRUEFmHB8w7qRPJq','2025-04-03 02:38:09','2025-04-03 02:38:09',1,1),(14,'test','test21saaa','$2b$10$MYpbuGgSHpPYKc1AN1UHxe/GezvB8Z2GtXX60zpFM0fYA7j6BacSm','2025-04-03 02:39:07','2025-04-03 02:39:07',1,1),(15,'test','test21saaaas','$2b$10$jW0vsCyzBsr2Nu.2.AfAZOUVuijtuv8P1mv460QNpGkLf/8/8EcGq','2025-04-03 02:39:45','2025-04-03 02:39:45',1,1),(16,'test','test21saaaasas','$2b$10$hFQ20VqzDEPv3pLvslKlWOpK3wPiPbcb9g6HePuS5TBDevWrxjzhy','2025-04-03 02:40:36','2025-04-03 02:40:36',1,1),(17,'test','test21saaaasasa','$2b$10$Gw4v3YcKdtBtE1hUN.mCyOAT5wTyKEa.an3B56Ua23Qq9rGytQnsy','2025-04-03 02:41:27','2025-04-03 02:41:27',1,1),(18,'asd','myluife1@gmail.com','$2b$10$4U.LcpsT4u6a8oOxmgb1ve9ts4PR2x0IpOjrBOGTxHqwzBEYNZPCi','2025-04-03 02:43:02','2025-04-03 02:43:02',1,1),(19,'tet','test@asdasd','$2b$10$e/Cm9JaK6aZAzgQ.49gYbecdFN5F./2ZghqUGMEEMSCxsDzjBoW22','2025-04-03 02:47:14','2025-04-03 02:47:14',1,1),(20,'steven','steven','$2b$10$kEuNrZvQMly7M5Bf2qEWjeiXx/09sOSmLKbWclPwx4YyxtDhLPJRG','2025-04-03 02:52:32','2025-04-03 02:52:32',1,1),(21,'luis','luisito@gmail.com','$2b$10$v7miYDQxjummMcEf5.labe6ISy1DbVw42o5FWNEJVeXQtjw.AZWqS','2025-04-03 04:59:13','2025-04-03 04:59:13',1,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_roles`
--

DROP TABLE IF EXISTS `users_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role` varchar(100) NOT NULL DEFAULT 'user',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_roles`
--

LOCK TABLES `users_roles` WRITE;
/*!40000 ALTER TABLE `users_roles` DISABLE KEYS */;
INSERT INTO `users_roles` VALUES (1,'admin'),(2,'user');
/*!40000 ALTER TABLE `users_roles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-03  5:14:54
