CREATE DATABASE  IF NOT EXISTS `codetravel_restapic` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `codetravel_restapic`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: codetravel_restapic
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `agendamento`
--

DROP TABLE IF EXISTS `agendamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `agendamento` (
  `id` int NOT NULL AUTO_INCREMENT,
  `origem` varchar(20) NOT NULL,
  `destino` varchar(20) NOT NULL,
  `data_ida` varchar(16) DEFAULT NULL,
  `data_volta` varchar(16) DEFAULT NULL,
  `qtd_adulto` varchar(2) DEFAULT NULL,
  `qtd_crianca` varchar(2) DEFAULT NULL,
  `classe` varchar(20) NOT NULL,
  `fk_Passagem_cod_bilhete` int DEFAULT NULL,
  `fk_Cliente_id_cliente` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_Agendamento_2` (`fk_Passagem_cod_bilhete`),
  KEY `FK_Agendamento_3` (`fk_Cliente_id_cliente`),
  CONSTRAINT `FK_Agendamento_2` FOREIGN KEY (`fk_Passagem_cod_bilhete`) REFERENCES `passagem` (`cod_bilhete`) ON DELETE CASCADE,
  CONSTRAINT `FK_Agendamento_3` FOREIGN KEY (`fk_Cliente_id_cliente`) REFERENCES `cliente` (`id_cliente`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agendamento`
--

LOCK TABLES `agendamento` WRITE;
/*!40000 ALTER TABLE `agendamento` DISABLE KEYS */;
INSERT INTO `agendamento` VALUES (6,'Holanda','Noruega','2022-11-02','2022-11-12','2','2','Primeira Classe',NULL,NULL),(7,'Dinamarca','Polonia','2022-10-24','2022-10-29','2','3','Primeira Classe',NULL,NULL),(10,'Valinor','Mordor','2022-11-01','2022-11-05','2','0','Classe Executiva',NULL,NULL),(11,'Mother Russia','Ucraine','2022-10-31','2022-11-01','1','2','Classe Econômica',NULL,NULL),(12,'Singapura','Veneza','2022-10-31','2022-10-31','1','1','Primeira Classe',NULL,NULL),(14,'Belgica','Islandia','2022-10-30','2022-10-31','2','4','Classe Econômica',NULL,NULL),(15,'Japão','China','2022-11-01','2022-11-05','1','1','Primeira Classe',NULL,NULL);
/*!40000 ALTER TABLE `agendamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente` (
  `id_cliente` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(40) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `telefone` varchar(14) NOT NULL,
  `cep` varchar(8) DEFAULT NULL,
  `rua` varchar(50) DEFAULT NULL,
  `numero` varchar(5) DEFAULT NULL,
  `bairro` varchar(40) DEFAULT NULL,
  `cidade` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id_cliente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `passagem`
--

DROP TABLE IF EXISTS `passagem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `passagem` (
  `cod_bilhete` int NOT NULL AUTO_INCREMENT,
  `data_pg` date DEFAULT NULL,
  `tipo_pg` varchar(15) NOT NULL,
  `valor_pg` decimal(10,2) NOT NULL,
  PRIMARY KEY (`cod_bilhete`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `passagem`
--

LOCK TABLES `passagem` WRITE;
/*!40000 ALTER TABLE `passagem` DISABLE KEYS */;
/*!40000 ALTER TABLE `passagem` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-01 16:52:04
