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
  `m2` decimal(8,2) NOT NULL,
  `nroPersona` int NOT NULL,
  `comentario` varchar(3000) NOT NULL,
  `fechaAlta` date NOT NULL,
  `fechaBaja` date NOT NULL,
  `estado` varchar(45) NOT NULL,
  `idVisita` int NOT NULL,
  PRIMARY KEY (`idAbertura`),
  KEY `idVisita_pk9_idx` (`idVisita`),
  CONSTRAINT `idVisita_pk9` FOREIGN KEY (`idVisita`) REFERENCES `visita` (`idVisita`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `abertura`
--

LOCK TABLES `abertura` WRITE;
/*!40000 ALTER TABLE `abertura` DISABLE KEYS */;
INSERT INTO `abertura` VALUES (1,'2022-09-08','2022-09-10',8,25698.33,8,'campo 1','2022-09-19','1900-01-01','activo',1),(2,'2022-09-08','2022-09-15',8,2535.22,9,'prueba campo','2022-09-19','1900-01-01','activo',4);
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
  `avanceActual` decimal(8,2) NOT NULL,
  `avanceEsperado` decimal(8,2) NOT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conclusion`
--

LOCK TABLES `conclusion` WRITE;
/*!40000 ALTER TABLE `conclusion` DISABLE KEYS */;
INSERT INTO `conclusion` VALUES (1,'Si',80.00,90.00,'2022-08-10',8,'campo 1','2022-09-19','1900-01-01','activo',1),(2,'Si',58.00,100.00,'2022-09-06',10,'prueba campo','2022-09-19','1900-01-01','activo',3);
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
  `alturaEdificio` decimal(8,2) NOT NULL,
  `m2Cubierta` decimal(8,2) NOT NULL,
  `m2Muro` decimal(8,2) NOT NULL,
  `alcance` varchar(45) NOT NULL,
  `duracionObra` int NOT NULL,
  `comentario` varchar(3000) NOT NULL,
  `fechaAlta` date NOT NULL,
  `fechaBaja` date NOT NULL,
  `estado` varchar(45) NOT NULL,
  PRIMARY KEY (`idGeneral`),
  UNIQUE KEY `codigo_UNIQUE` (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `general`
--

LOCK TABLES `general` WRITE;
/*!40000 ALTER TABLE `general` DISABLE KEYS */;
INSERT INTO `general` VALUES (1,'PO7892','Maria','Martinez','25898214','Juan B Justo','Nave Industrial',6895.22,69587.25,789652.52,'Inicia desde Cero',89,'comentario 1','2022-09-19','1900-01-01','activo'),(2,'PO7893','Daniel','Gimenez','25898214','25 de Mayo 542','Nave Industrial',5854.23,5689.23,5879.25,'Ampliacion',89,'prueba campo 1','2022-09-19','1900-01-01','activo'),(3,'PO2365','Diana','Solana','36954785','manantiales 234','Residencial',5654.25,2545.36,1254.25,'Inicia desde Cero',58,'prueba campo','2022-09-19','1900-01-01','activo');
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gremio`
--

LOCK TABLES `gremio` WRITE;
/*!40000 ALTER TABLE `gremio` DISABLE KEYS */;
INSERT INTO `gremio` VALUES (1,'Ganadero SA',3,'10:20:00','13:45:00','2022-09-19','2022-09-02',4,'Juan','Vildoza','2022-09-19','1900-01-01','activo',1),(2,'Sanidad SA',3,'10:20:00','13:20:00','2022-09-19','2022-09-20',2,'Emilio','Diaz','2022-09-19','1900-01-01','activo',2);
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `humeda`
--

LOCK TABLES `humeda` WRITE;
/*!40000 ALTER TABLE `humeda` DISABLE KEYS */;
INSERT INTO `humeda` VALUES (1,'2022-09-19','2022-09-25','68952.22','3','58985,33','5','58974,36','5','58954,33','9','259874,33','9','9','Mal Tiempo','comentario 1','2022-09-19','1900-01-01','activo',1),(2,'2022-09-05','2022-09-10','25689.22','5','2587.33','5','5874.26','8','2354.22','5','36','8','5','Otro','Otro: mal tiempo','2022-09-19','1900-01-01','activo',4);
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
INSERT INTO `material` VALUES (1,'Regular','Bueno','Regular','Muy Bueno','Muy Bueno','Excelente','Excelente','comentario 1','2022-09-19','1900-01-01','activo',1),(2,'Regular','Regular','Regular','Bueno','Bueno','Bueno','Regular','campo prueba','2022-09-19','1900-01-01','activo',4);
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
  `espesor` decimal(8,2) NOT NULL,
  `resultado` varchar(300) NOT NULL,
  `comentario` varchar(3000) NOT NULL,
  `fechaAlta` date NOT NULL,
  `fechaBaja` date NOT NULL,
  `estado` varchar(45) NOT NULL,
  `idVisita` int NOT NULL,
  PRIMARY KEY (`idPanel`),
  KEY `idVisita_pk5_idx` (`idVisita`),
  CONSTRAINT `idVisita_pk5` FOREIGN KEY (`idVisita`) REFERENCES `visita` (`idVisita`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `panel`
--

LOCK TABLES `panel` WRITE;
/*!40000 ALTER TABLE `panel` DISABLE KEYS */;
INSERT INTO `panel` VALUES (1,'no','izajes aumentados','tornillos rosca','pegamento','Si','No',5888.20,'muy bueno','comentario 1','2022-09-19','2022-09-19','activo',1),(2,'si','izajes paralelos','afilados','clavos','Si','No',45.00,'bueno','prueba campo','2022-09-19','2022-09-19','activo',4);
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
INSERT INTO `persona` VALUES (1,5,2,'Obreros','Si','No','Si','Si','No','Si','No','No',18,45,17,47,'comentario 1','2022-09-19','1900-01-01','activo',1),(2,5,1,'Obreros','Si','Si','Si','No','No','No','No','No',22,45,18,49,'comentario 1\n','2022-09-19','1900-01-01','activo',4);
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
  `metrosLineales` decimal(8,2) NOT NULL,
  `nroPersonas` int NOT NULL,
  `comentario` varchar(3000) NOT NULL,
  `fechaAlta` date NOT NULL,
  `fechaBaja` date NOT NULL,
  `estado` varchar(45) NOT NULL,
  `idVisita` int NOT NULL,
  PRIMARY KEY (`idAgua`),
  KEY `idVisita_pk6_idx` (`idVisita`),
  CONSTRAINT `idVisita_pk6` FOREIGN KEY (`idVisita`) REFERENCES `visita` (`idVisita`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `redagua`
--

LOCK TABLES `redagua` WRITE;
/*!40000 ALTER TABLE `redagua` DISABLE KEYS */;
INSERT INTO `redagua` VALUES (1,'2022-09-05','2022-09-08',56898.22,9,'comentario 1','2022-09-19','1900-01-01','activo',1),(2,'2022-09-05','2022-09-08',2543.88,8,'prueba campo','2022-09-19','1900-01-01','activo',4);
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
  `metrosLineales` decimal(8,2) NOT NULL,
  `nroPersonas` int NOT NULL,
  `comentario` varchar(3000) NOT NULL,
  `fechaAlta` date NOT NULL,
  `fechaBaja` date NOT NULL,
  `estado` varchar(45) NOT NULL,
  `idVisita` int NOT NULL,
  PRIMARY KEY (`idElectricidad`),
  KEY `idVisita_pk8_idx` (`idVisita`),
  CONSTRAINT `idVisita_pk8` FOREIGN KEY (`idVisita`) REFERENCES `visita` (`idVisita`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `redelectricidad`
--

LOCK TABLES `redelectricidad` WRITE;
/*!40000 ALTER TABLE `redelectricidad` DISABLE KEYS */;
INSERT INTO `redelectricidad` VALUES (1,'2022-09-05','2022-09-09',52122.88,3,'campo 1','2022-09-19','1900-01-01','activo',1),(2,'2022-09-07','2022-02-05',6556.25,9,'prueba campo','2022-09-19','1900-01-01','activo',4);
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
  `metrosLineales` decimal(8,2) NOT NULL,
  `nroPersonas` int NOT NULL,
  `comentario` varchar(3000) NOT NULL,
  `fechaAlta` date NOT NULL,
  `fechaBaja` date NOT NULL,
  `estado` varchar(45) NOT NULL,
  `idVisita` int NOT NULL,
  PRIMARY KEY (`idGas`),
  KEY `idVisita_pk7_idx` (`idVisita`),
  CONSTRAINT `idVisita_pk7` FOREIGN KEY (`idVisita`) REFERENCES `visita` (`idVisita`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `redgas`
--

LOCK TABLES `redgas` WRITE;
/*!40000 ALTER TABLE `redgas` DISABLE KEYS */;
INSERT INTO `redgas` VALUES (1,'2022-09-05','2022-12-07',289874.33,8,'campo 1','2022-09-19','1900-01-01','activo',1),(2,'2022-09-05','2022-09-07',254.26,7,'prueba campo','2022-09-19','1900-01-01','activo',4);
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seco`
--

LOCK TABLES `seco` WRITE;
/*!40000 ALTER TABLE `seco` DISABLE KEYS */;
INSERT INTO `seco` VALUES (1,'2022-09-02','2022-02-15','56585.25','5','5689.25','8','25369.25','8','56987.25','9987.25','10','Mal Tiempo','tornillos','pegamento','clavos','comentario 2','2022-09-19','1900-01-01','activo',1),(2,'2022-09-02','2022-09-05','5648.22','5','5689.36','8','4578.22','9','2543.88','6','15','Mal Tiempo','tornillos','pegamento','clavos','campo 1','2022-09-19','1900-01-01','activo',4);
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visita`
--

LOCK TABLES `visita` WRITE;
/*!40000 ALTER TABLE `visita` DISABLE KEYS */;
INSERT INTO `visita` VALUES (1,'2022-09-19','Emilio','Figal',1,'2022-09-19','1900-01-01','activo',1),(2,'2022-09-19','Penelope','Cruz',1,'2022-09-19','1900-01-01','activo',2),(3,'2022-09-19','Juan','Lopez',2,'2022-09-19','1900-01-01','activo',2),(4,'2022-09-19','Juan','Valdez',1,'2022-09-19','1900-01-01','activo',3);
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

-- Dump completed on 2022-09-19 14:54:53
