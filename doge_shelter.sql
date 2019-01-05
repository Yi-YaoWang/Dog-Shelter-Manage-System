-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: Doge_shelter
-- ------------------------------------------------------
-- Server version	5.7.19-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


--
-- Table structure for table `doge`
--

DROP TABLE IF EXISTS `doge`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `doge` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `breed` varchar(45) NOT NULL,
  `gender` varchar(11) NOT NULL,
  `prov_date` varchar(45) DEFAULT NULL,
  `adop_date` varchar(45) DEFAULT NULL,
  `provider` varchar(45) NOT NULL,
  `adopter` varchar(45) DEFAULT NULL,
  `health_con` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doge`
--

LOCK TABLES `doge` WRITE;
/*!40000 ALTER TABLE `doge` DISABLE KEYS */;
INSERT INTO `doge` VALUES 
(3,'How','Chihuahua','male','2018-12-14',NULL,'stray',NULL,'Dying for its own stupidity.'),
(4,'Pikachu','Labrador','female','2018-06-15',NULL,'Andy',NULL,'Healthy.'),
(5,'Dick','Dachshund','female','2016-09-21','2018-12-24','stray','Joshson','One eye is losing.'),
(6,'Fred','Corgi','male','2017-10-18',NULL,'stary',NULL,'Losing one leg.'),
(9,'BuBu','Bulldog','male','2018-01-19','2018-07-04','stray','Jennifer','Healthy.'),
(10,'MiMi','Corgi','female','2017-08-20',NULL,'stary',NULL,'Healthy');
/*!40000 ALTER TABLE `doge` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `category` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`,`name`),
  KEY `foreign_user_idx` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES
(1,'Yi-Yao','CEO','404411190@gms.tku.edu.tw','gj94dl'),
(2,'Xie-Bo','manager','lukelovegame@gmail.com','789456123'),
(3,'Shih-feng','client','404411919@s04.tku.edu.tw','abcdefg123'),
(4,'Kai-jiun','editor','404411315@s04.tku.edu.tw','123456'),
(5,'kuan-wei','client','404411703@s04.tku.edu.tw','558712');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-16  0:35:57
