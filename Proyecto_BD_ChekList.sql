-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: proyecto_check_list
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
-- Table structure for table `abertura`
--

DROP TABLE IF EXISTS `abertura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `abertura` (
  `idAbertura` int NOT NULL AUTO_INCREMENT,
  `fechaInicial` date NOT NULL,
  `fechaFinal` date NOT NULL,
  `cantidad` int NOT NULL,
  `m2` decimal(4,2) NOT NULL,
  `nroPersona` int NOT NULL,
  `comentario` varchar(3000) NOT NULL,
  `fechaAlta` date NOT NULL,
  `fechaBaja` date NOT NULL,
  `estado` varchar(45) NOT NULL,
  `idVisita` int NOT NULL,
  PRIMARY KEY (`idAbertura`),
  KEY `idVisita_pk9_idx` (`idVisita`),
  CONSTRAINT `idVisita_pk9` FOREIGN KEY (`idVisita`) REFERENCES `visita` (`idVisita`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `abertura`
--

LOCK TABLES `abertura` WRITE;
/*!40000 ALTER TABLE `abertura` DISABLE KEYS */;
INSERT INTO `abertura` VALUES (1,'2022-08-05','2022-04-03',7,23.67,9,'Hola Mundo','2022-09-08','2022-07-07','inactivo',1);
/*!40000 ALTER TABLE `abertura` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `conclusion`
--

DROP TABLE IF EXISTS `conclusion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `conclusion` (
  `idConclusion` int NOT NULL AUTO_INCREMENT,
  `obraTerminada` varchar(45) NOT NULL,
  `avanceActual` decimal(4,2) NOT NULL,
  `avanceEsperado` decimal(4,2) NOT NULL,
  `fechaFinalizacion` date NOT NULL,
  `gradoSatisfaccion` int NOT NULL,
  `comentario` varchar(3000) NOT NULL,
  `fechaAlta` date NOT NULL,
  `fechaBaja` date NOT NULL,
  `estado` varchar(45) NOT NULL,
  `idGeneral` int NOT NULL,
  PRIMARY KEY (`idConclusion`),
  KEY `idGeneral_pk2_idx` (`idGeneral`),
  CONSTRAINT `idGeneral_pk2` FOREIGN KEY (`idGeneral`) REFERENCES `general` (`idGeneral`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conclusion`
--

LOCK TABLES `conclusion` WRITE;
/*!40000 ALTER TABLE `conclusion` DISABLE KEYS */;
INSERT INTO `conclusion` VALUES (1,'NO',40.00,80.00,'2022-03-04',7,'Muy satisfecho','2022-09-08','2022-07-07','inactivo',1);
/*!40000 ALTER TABLE `conclusion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `general`
--

DROP TABLE IF EXISTS `general`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `general` (
  `idGeneral` int NOT NULL AUTO_INCREMENT,
  `codigo` varchar(45) NOT NULL,
  `nombreCliente` varchar(45) NOT NULL,
  `apellidoCliente` varchar(45) NOT NULL,
  `dni` varchar(45) NOT NULL,
  `domicilio` varchar(45) NOT NULL,
  `usoEdificio` varchar(45) NOT NULL,
  `alturaEdificio` decimal(4,2) NOT NULL,
  `m2Cubierta` decimal(4,2) NOT NULL,
  `m2Muro` decimal(4,2) NOT NULL,
  `alcance` varchar(45) NOT NULL,
  `duracionObra` int NOT NULL,
  `comentario` varchar(3000) NOT NULL,
  `fechaAlta` date NOT NULL,
  `fechaBaja` date NOT NULL,
  `estado` varchar(45) NOT NULL,
  PRIMARY KEY (`idGeneral`),
  UNIQUE KEY `codigo_UNIQUE` (`codigo`),
  UNIQUE KEY `dni_UNIQUE` (`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `general`
--

LOCK TABLES `general` WRITE;
/*!40000 ALTER TABLE `general` DISABLE KEYS */;
INSERT INTO `general` VALUES (1,'P0564','Daniela','Juarez','4533222','Bandera de los Andes Guaymallen Mendoza','C',23.22,24.33,89.33,'EE',44,'ver obra','2022-09-07','1900-01-01','inactivo'),(2,'P0234','Oscar','Rodriguez','34232123','Colon 232 Ciudad Mendoza','NI',23.22,23.21,25.34,'IDC',150,'obra en proceso','2022-09-08','1900-01-01','inactivo');
/*!40000 ALTER TABLE `general` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gremio`
--

DROP TABLE IF EXISTS `gremio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gremio` (
  `idGremio` int NOT NULL AUTO_INCREMENT,
  `nombreGremio` varchar(45) NOT NULL,
  `nroPersonas` int NOT NULL,
  `horarioDesde` time NOT NULL,
  `horarioHasta` time NOT NULL,
  `fechaDesde` date NOT NULL,
  `fechaHasta` date NOT NULL,
  `nroArgentinos` int NOT NULL,
  `nombreContratista` varchar(45) NOT NULL,
  `apellidoContratista` varchar(45) NOT NULL,
  `fechaAlta` date NOT NULL,
  `fechaBaja` date NOT NULL,
  `estado` varchar(45) NOT NULL,
  `idPersona` int NOT NULL,
  PRIMARY KEY (`idGremio`),
  KEY `idPersona_pk_idx` (`idPersona`),
  CONSTRAINT `idPersona_pk` FOREIGN KEY (`idPersona`) REFERENCES `persona` (`idPersona`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gremio`
--

LOCK TABLES `gremio` WRITE;
/*!40000 ALTER TABLE `gremio` DISABLE KEYS */;
INSERT INTO `gremio` VALUES (1,'Gremio Persona',2,'12:34:23','15:30:00','2022-01-02','2022-03-08',3,'Daniel','Juarez','2022-09-08','2022-09-08','inactivo',1);
/*!40000 ALTER TABLE `gremio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `humeda`
--

DROP TABLE IF EXISTS `humeda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `humeda` (
  `idHumeda` int NOT NULL AUTO_INCREMENT,
  `fechaInicio` date NOT NULL,
  `fechaFinal` date NOT NULL,
  `m2Piso` varchar(45) NOT NULL,
  `pisoPerson` varchar(45) NOT NULL,
  `metros` varchar(45) NOT NULL,
  `metrosPerson` varchar(45) NOT NULL,
  `m2Muro` varchar(45) NOT NULL,
  `muroPerson` varchar(45) NOT NULL,
  `m2Cubierta` varchar(45) NOT NULL,
  `cubiertaPerson` varchar(45) NOT NULL,
  `metrosLineales` varchar(45) NOT NULL,
  `linealesPerson` varchar(45) NOT NULL,
  `diasCaidos` varchar(45) NOT NULL,
  `motivo` varchar(45) NOT NULL,
  `comentario` varchar(3000) NOT NULL,
  `fechaAlta` date NOT NULL,
  `fechaBaja` date NOT NULL,
  `estado` varchar(45) NOT NULL,
  `idVisita` int NOT NULL,
  PRIMARY KEY (`idHumeda`),
  KEY `idVisita_pk2_idx` (`idVisita`),
  CONSTRAINT `idVisita_pk3` FOREIGN KEY (`idVisita`) REFERENCES `visita` (`idVisita`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `humeda`
--

LOCK TABLES `humeda` WRITE;
/*!40000 ALTER TABLE `humeda` DISABLE KEYS */;
INSERT INTO `humeda` VALUES (1,'2022-02-11','2022-04-11','21','34','43','23','12','34','34','5','11','7','2','meteorito','Esperando que pase','2022-04-02','2022-09-08','inactivo',1);
/*!40000 ALTER TABLE `humeda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `material`
--

DROP TABLE IF EXISTS `material`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `material` (
  `idMaterial` int NOT NULL AUTO_INCREMENT,
  `estadoAlmacen` varchar(45) NOT NULL,
  `movMateriales` varchar(45) NOT NULL,
  `almacenSeguro` varchar(45) NOT NULL,
  `envasesVacio` varchar(45) NOT NULL,
  `materialSobran` varchar(45) NOT NULL,
  `estadoLimpieza` varchar(45) NOT NULL,
  `desechosOrgani` varchar(45) NOT NULL,
  `comentario` varchar(3000) NOT NULL,
  `fechaAlta` date NOT NULL,
  `fechaBaja` date NOT NULL,
  `estado` varchar(45) NOT NULL,
  `idVisita` int NOT NULL,
  PRIMARY KEY (`idMaterial`),
  KEY `idVisita_pk1_idx` (`idVisita`),
  CONSTRAINT `idVisita_pk1` FOREIGN KEY (`idVisita`) REFERENCES `visita` (`idVisita`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `material`
--

LOCK TABLES `material` WRITE;
/*!40000 ALTER TABLE `material` DISABLE KEYS */;
INSERT INTO `material` VALUES (1,'E','E','E','E','B','B','E','elementos y materiales','2022-08-10','1900-01-01','inactivo',1),(2,'E','E','R','MB','R','R','MB','Se detalla el material','1900-01-01','1900-01-01','inactivo',2);
/*!40000 ALTER TABLE `material` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `panel`
--

DROP TABLE IF EXISTS `panel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `panel` (
  `idPanel` int NOT NULL AUTO_INCREMENT,
  `selladores` varchar(300) NOT NULL,
  `izaje` varchar(300) NOT NULL,
  `tornillos` varchar(300) NOT NULL,
  `perfileria` varchar(300) NOT NULL,
  `panelesFrio` varchar(45) NOT NULL,
  `perfileriaFrio` varchar(45) NOT NULL,
  `espesor` decimal(4,2) NOT NULL,
  `resultado` varchar(300) NOT NULL,
  `comentario` varchar(3000) NOT NULL,
  `fechaAlta` date NOT NULL,
  `fechaBaja` date NOT NULL,
  `estado` varchar(45) NOT NULL,
  `idVisita` int NOT NULL,
  PRIMARY KEY (`idPanel`),
  KEY `idVisita_pk5_idx` (`idVisita`),
  CONSTRAINT `idVisita_pk5` FOREIGN KEY (`idVisita`) REFERENCES `visita` (`idVisita`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `panel`
--

LOCK TABLES `panel` WRITE;
/*!40000 ALTER TABLE `panel` DISABLE KEYS */;
INSERT INTO `panel` VALUES (1,'NO','Baja','Doble','tornillos','No','Si',25.60,'Excelente','Maravilla','2022-09-12','2022-07-07','inactivo',1);
/*!40000 ALTER TABLE `panel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `persona`
--

DROP TABLE IF EXISTS `persona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `persona` (
  `idPersona` int NOT NULL AUTO_INCREMENT,
  `personasTotal` int NOT NULL,
  `nGremios` int NOT NULL,
  `gremioEnfoque` varchar(45) NOT NULL,
  `vestimentaOk` varchar(45) NOT NULL,
  `calzadoOk` varchar(45) NOT NULL,
  `utilizanEpp` varchar(45) NOT NULL,
  `herramientasOk` varchar(45) NOT NULL,
  `seguridadOk` varchar(45) NOT NULL,
  `trabajoAltura` varchar(45) NOT NULL,
  `bañosOk` varchar(45) NOT NULL,
  `comerOk` varchar(45) NOT NULL,
  `edadJoven` int NOT NULL,
  `edadViejo` int NOT NULL,
  `rangoMin` int NOT NULL,
  `rangoMax` int NOT NULL,
  `comentario` varchar(3000) NOT NULL,
  `fechaAlta` date NOT NULL,
  `fechaBaja` date NOT NULL,
  `estado` varchar(45) NOT NULL,
  `idVisita` int NOT NULL,
  PRIMARY KEY (`idPersona`),
  KEY `idVisita_pk2_idx` (`idVisita`),
  CONSTRAINT `idVisita_pk2` FOREIGN KEY (`idVisita`) REFERENCES `visita` (`idVisita`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `persona`
--

LOCK TABLES `persona` WRITE;
/*!40000 ALTER TABLE `persona` DISABLE KEYS */;
INSERT INTO `persona` VALUES (1,4,1,'Maritimo SA','NO','NO','SI','NO','SI','NO','SI','NO',19,23,23,12,'Se presentan','2022-09-08','2022-09-08','inactivo',1),(2,6,1,'Puerto SA','NO','NO','NO','SI','SI','SI','SI','SI',24,34,36,39,'Se presenta 1 gremio','2022-09-08','1900-01-01','activo',2);
/*!40000 ALTER TABLE `persona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `redagua`
--

DROP TABLE IF EXISTS `redagua`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `redagua` (
  `idAgua` int NOT NULL AUTO_INCREMENT,
  `fechaInicio` date NOT NULL,
  `fechaFinal` date NOT NULL,
  `metrosLineales` decimal(4,2) NOT NULL,
  `nroPersonas` int NOT NULL,
  `comentario` varchar(3000) NOT NULL,
  `fechaAlta` date NOT NULL,
  `fechaBaja` date NOT NULL,
  `estado` varchar(45) NOT NULL,
  `idVisita` int NOT NULL,
  PRIMARY KEY (`idAgua`),
  KEY `idVisita_pk6_idx` (`idVisita`),
  CONSTRAINT `idVisita_pk6` FOREIGN KEY (`idVisita`) REFERENCES `visita` (`idVisita`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `redagua`
--

LOCK TABLES `redagua` WRITE;
/*!40000 ALTER TABLE `redagua` DISABLE KEYS */;
INSERT INTO `redagua` VALUES (1,'2022-01-02','2022-02-02',33.22,4,'Hola','2022-03-03','2022-07-07','inactivo',1);
/*!40000 ALTER TABLE `redagua` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `redelectricidad`
--

DROP TABLE IF EXISTS `redelectricidad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `redelectricidad` (
  `idElectricidad` int NOT NULL AUTO_INCREMENT,
  `fechaInicio` date NOT NULL,
  `fechaFinal` date NOT NULL,
  `metrosLineales` decimal(4,2) NOT NULL,
  `nroPersonas` int NOT NULL,
  `comentario` varchar(3000) NOT NULL,
  `fechaAlta` date NOT NULL,
  `fechaBaja` date NOT NULL,
  `estado` varchar(45) NOT NULL,
  `idVisita` int NOT NULL,
  PRIMARY KEY (`idElectricidad`),
  KEY `idVisita_pk8_idx` (`idVisita`),
  CONSTRAINT `idVisita_pk8` FOREIGN KEY (`idVisita`) REFERENCES `visita` (`idVisita`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `redelectricidad`
--

LOCK TABLES `redelectricidad` WRITE;
/*!40000 ALTER TABLE `redelectricidad` DISABLE KEYS */;
INSERT INTO `redelectricidad` VALUES (1,'2022-05-03','2022-03-03',45.22,4,'Hola','2022-09-08','2022-07-07','inactivo',1);
/*!40000 ALTER TABLE `redelectricidad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `redgas`
--

DROP TABLE IF EXISTS `redgas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `redgas` (
  `idGas` int NOT NULL AUTO_INCREMENT,
  `fechaInicio` date NOT NULL,
  `fechaFinal` date NOT NULL,
  `metrosLineales` decimal(4,2) NOT NULL,
  `nroPersonas` int NOT NULL,
  `comentario` varchar(3000) NOT NULL,
  `fechaAlta` date NOT NULL,
  `fechaBaja` date NOT NULL,
  `estado` varchar(45) NOT NULL,
  `idVisita` int NOT NULL,
  PRIMARY KEY (`idGas`),
  KEY `idVisita_pk7_idx` (`idVisita`),
  CONSTRAINT `idVisita_pk7` FOREIGN KEY (`idVisita`) REFERENCES `visita` (`idVisita`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `redgas`
--

LOCK TABLES `redgas` WRITE;
/*!40000 ALTER TABLE `redgas` DISABLE KEYS */;
INSERT INTO `redgas` VALUES (1,'2022-10-02','2022-02-04',54.22,5,'Hola','2022-09-08','2022-07-07','inactivo',1);
/*!40000 ALTER TABLE `redgas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seco`
--

DROP TABLE IF EXISTS `seco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seco` (
  `idSeco` int NOT NULL AUTO_INCREMENT,
  `fechaInicio` date NOT NULL,
  `fechaFinal` date NOT NULL,
  `mLineales` varchar(45) NOT NULL,
  `mPerson` varchar(45) NOT NULL,
  `m2Muro` varchar(45) NOT NULL,
  `muroPerson` varchar(45) NOT NULL,
  `m2Cubierta` varchar(45) NOT NULL,
  `cubiertaPerson` varchar(45) NOT NULL,
  `metrosLineales` varchar(45) NOT NULL,
  `linealesPerson` varchar(45) NOT NULL,
  `diasCaidos` varchar(45) NOT NULL,
  `motivo` varchar(45) NOT NULL,
  `materialVigas` varchar(2000) NOT NULL,
  `materialMuros` varchar(2000) NOT NULL,
  `materialCubiertas` varchar(2000) NOT NULL,
  `comentario` varchar(3000) NOT NULL,
  `fechaAlta` date NOT NULL,
  `fechaBaja` date NOT NULL,
  `estado` varchar(45) NOT NULL,
  `idVisita` int NOT NULL,
  PRIMARY KEY (`idSeco`),
  KEY `idVisita_pk4_idx` (`idVisita`),
  CONSTRAINT `idVisita_pk4` FOREIGN KEY (`idVisita`) REFERENCES `visita` (`idVisita`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seco`
--

LOCK TABLES `seco` WRITE;
/*!40000 ALTER TABLE `seco` DISABLE KEYS */;
INSERT INTO `seco` VALUES (1,'2022-02-11','2022-04-23','12','4','5','1','14','21','12','56','22','Fuego','Materiales Vigas','Materiales Muros','Materiales Cubiertas','Esperando que pase la lluvia','2022-09-08','2022-09-08','inactivo',1);
/*!40000 ALTER TABLE `seco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `visita`
--

DROP TABLE IF EXISTS `visita`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `visita` (
  `idVisita` int NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `nombreTecnico` varchar(45) NOT NULL,
  `apellidoTecnico` varchar(45) NOT NULL,
  `nVisita` int NOT NULL,
  `fechaAlta` date NOT NULL,
  `fechaBaja` date NOT NULL,
  `estado` varchar(45) NOT NULL,
  `idGeneral` int NOT NULL,
  PRIMARY KEY (`idVisita`),
  KEY `idGeneral_fk_idx` (`idGeneral`),
  CONSTRAINT `idGeneral_fk` FOREIGN KEY (`idGeneral`) REFERENCES `general` (`idGeneral`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visita`
--

LOCK TABLES `visita` WRITE;
/*!40000 ALTER TABLE `visita` DISABLE KEYS */;
INSERT INTO `visita` VALUES (1,'2022-09-13','Jorge','Diaz',2,'2022-09-22','1900-01-01','inactivo',2),(2,'2022-09-22','Enrique','Gutierrez',1,'1900-01-01','1900-01-01','activo',2);
/*!40000 ALTER TABLE `visita` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-08 17:55:06
