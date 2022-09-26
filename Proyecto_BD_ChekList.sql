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
  `tipoAbertura` varchar(45) NOT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `abertura`
--

LOCK TABLES `abertura` WRITE;
/*!40000 ALTER TABLE `abertura` DISABLE KEYS */;
INSERT INTO `abertura` VALUES (1,'2022-09-05','2022-09-03','Ventanas',3,45562.22,5,'campo prueba','2022-09-22','1900-01-01','activo',1),(2,'2022-08-05','2022-08-06','Portones',5,4521.25,8,'comentario2','2022-09-22','1900-01-01','activo',1),(3,'2022-06-05','2022-06-05','Puertas',-2,-2.00,6,'prueba 2','2022-09-23','1900-01-01','activo',2),(4,'2022-06-05','2022-05-03','Puertas',6,5654.22,5,'prueba 2','2022-09-23','1900-01-01','activo',2),(5,'2022-04-22','2022-04-23','Puertas',3,2546.33,4,'prueba 3','2022-09-26','1900-01-01','activo',3),(6,'2022-09-22','2022-09-25','Portones',-2,-2.00,-2,'prueba campo','2022-09-26','1900-01-01','activo',3);
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conclusion`
--

LOCK TABLES `conclusion` WRITE;
/*!40000 ALTER TABLE `conclusion` DISABLE KEYS */;
INSERT INTO `conclusion` VALUES (1,'Si',100.00,100.00,'2022-09-23',5,'campo prueba','2022-09-23','1900-01-01','activo',1);
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `general`
--

LOCK TABLES `general` WRITE;
/*!40000 ALTER TABLE `general` DISABLE KEYS */;
INSERT INTO `general` VALUES (1,'0001','Carrefour SA','20353212314','Juan B Justo','Residencial',2564.25,36524.22,36954.36,'Estructura Existente',69,'campo prueba 1','2022-09-22','1900-01-01','activo'),(2,'0002','Jorge Danielle','20352121248','25 de Mayo 653','Institucional',25645.35,56541.45,78954.25,'Inicia desde Cero',75,'campo prueba actualizacion 5','2022-09-26','1900-01-01','actualizado');
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
  `comentario` varchar(3000) NOT NULL,
  `fechaAlta` date NOT NULL,
  `fechaBaja` date NOT NULL,
  `estado` varchar(45) NOT NULL,
  `idPersona` int NOT NULL,
  PRIMARY KEY (`idGremio`),
  KEY `idPersona_pk_idx` (`idPersona`),
  CONSTRAINT `idPersona_pk` FOREIGN KEY (`idPersona`) REFERENCES `persona` (`idPersona`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gremio`
--

LOCK TABLES `gremio` WRITE;
/*!40000 ALTER TABLE `gremio` DISABLE KEYS */;
INSERT INTO `gremio` VALUES (1,'Electricistas',3,'10:20:00','15:20:00','2022-09-05','2022-09-08',3,'Emilio','Figal','Lunes: 5hs, Martes: 4hs','2022-09-22','1900-01-01','activo',1),(2,'Obreros',2,'20:45:00','21:15:00','2022-09-05','2022-09-03',2,'Daniel','Gimenez','Martes: 4hs, Sabados: 5hs','2022-09-22','1900-01-01','activo',1),(3,'Electricistas',3,'10:20:00','15:30:00','2022-09-05','2022-09-06',2,'Maria','Martinez','prueba campo 2','2022-09-23','1900-01-01','activo',2),(4,'Obreros SA',3,'11:00:00','12:00:00','2022-09-11','2022-09-12',2,'Fabian','show','prueba campo 3','2022-09-23','1900-01-01','activo',2),(5,'Ganadero SA',2,'10:30:00','11:30:00','2022-09-25','2022-09-26',2,'Fabian','show','prueba3','2022-09-26','1900-01-01','activo',3),(6,'Prueba Gremio 3',3,'11:30:00','12:30:00','2022-09-25','2022-09-26',3,'Juan','Carvello','prueba3','2022-09-26','1900-01-01','activo',3);
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
  `m2Piso` decimal(8,2) NOT NULL,
  `pisoPerson` int NOT NULL,
  `metros` decimal(8,2) NOT NULL,
  `metrosPerson` int NOT NULL,
  `m2Muro` decimal(8,2) NOT NULL,
  `muroPerson` int NOT NULL,
  `m2Cubierta` decimal(8,2) NOT NULL,
  `cubiertaPerson` int NOT NULL,
  `metrosLineales` decimal(8,2) NOT NULL,
  `linealesPerson` int NOT NULL,
  `diasCaidos` int NOT NULL,
  `motivo` varchar(45) NOT NULL,
  `comentario` varchar(3000) NOT NULL,
  `fechaAlta` date NOT NULL,
  `fechaBaja` date NOT NULL,
  `estado` varchar(45) NOT NULL,
  `idVisita` int NOT NULL,
  PRIMARY KEY (`idHumeda`),
  KEY `idVisita_pk2_idx` (`idVisita`),
  CONSTRAINT `idVisita_pk3` FOREIGN KEY (`idVisita`) REFERENCES `visita` (`idVisita`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `humeda`
--

LOCK TABLES `humeda` WRITE;
/*!40000 ALTER TABLE `humeda` DISABLE KEYS */;
INSERT INTO `humeda` VALUES (1,'2022-09-05','2022-09-07',-2.00,-2,2565.22,-2,-2.00,5,4888.33,-2,8987.26,6,13,'Mal Tiempo','comentario 2','2022-09-22','1900-01-01','activo',1),(2,'2022-09-11','2022-09-12',68952.22,3,26.25,3,5236.22,3,6895.22,9,25642.22,5,8,'Mal Tiempo','prueba comentario 2','2022-09-23','1900-01-01','activo',2),(3,'2022-09-22','2022-09-23',25694.33,3,-1.00,-1,25456.22,3,25124.23,4,25452.66,5,9,'Mal Tiempo','campo prueba','2022-09-26','1900-01-01','activo',3);
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `material`
--

LOCK TABLES `material` WRITE;
/*!40000 ALTER TABLE `material` DISABLE KEYS */;
INSERT INTO `material` VALUES (1,'Regular','Muy Bueno','Muy Bueno','Malo','Muy Bueno','Muy Bueno','Otro','Desechos Orgánicos: sin especificar ','2022-09-22','1900-01-01','activo',1),(2,'Bueno','Excelente','Muy Bueno','Muy Bueno','Regular','Bueno','Muy Bueno','prueba 2','2022-09-23','1900-01-01','activo',2),(3,'Muy Bueno','Muy Bueno','Excelente','Excelente','Excelente','Muy Bueno','Muy Bueno','prueba campo ','2022-09-26','1900-01-01','actualizado',3);
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `panel`
--

LOCK TABLES `panel` WRITE;
/*!40000 ALTER TABLE `panel` DISABLE KEYS */;
INSERT INTO `panel` VALUES (1,'Si','Andamio','Tornillo autoperforante 14','Remachadora','Si','No',0.05,'Muy Bueno','comentario 1','2022-09-22','2022-09-22','activo',1),(2,'Si','Escalera','Hongos','Tornillo autoperforante wufer','Si','No',0.50,'Regular','prueba campo','2022-09-23','2022-09-23','activo',2),(3,'Si','Andamio','Hongos','Cinta adhesiva doble faz','No','Si',0.70,'Regular','prueba 3','2022-09-26','2022-09-26','activo',3);
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `persona`
--

LOCK TABLES `persona` WRITE;
/*!40000 ALTER TABLE `persona` DISABLE KEYS */;
INSERT INTO `persona` VALUES (1,3,3,'Obreros','Si','No','Si','No','Si','No','Si','Si',15,39,15,39,'comentario 1','2022-09-22','1900-01-01','activo',1),(2,5,2,'Obreros','Si','No','Si','No','Si','No','No','No',23,48,20,50,'prueba campo 2','2022-09-23','1900-01-01','activo',2),(3,4,2,'Materialistas','Si','No','No','Si','No','Si','Si','Si',18,35,17,40,'campo prueba','2022-09-26','1900-01-01','activo',3);
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `redagua`
--

LOCK TABLES `redagua` WRITE;
/*!40000 ALTER TABLE `redagua` DISABLE KEYS */;
INSERT INTO `redagua` VALUES (1,'2022-03-05','2022-09-07',25658.22,8,'campo prueba','2022-09-22','1900-01-01','activo',1),(2,'2022-05-03','2022-05-04',45.36,5,'prueba campo','2022-09-23','1900-01-01','activo',2),(3,'2022-09-23','2022-09-24',6956.32,8,'prueba 3','2022-09-26','1900-01-01','activo',3);
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `redelectricidad`
--

LOCK TABLES `redelectricidad` WRITE;
/*!40000 ALTER TABLE `redelectricidad` DISABLE KEYS */;
INSERT INTO `redelectricidad` VALUES (1,'0022-02-03','2022-02-05',2222.22,8,'prueba campos','2022-09-22','1900-01-01','activo',1),(2,'2022-06-05','2022-06-06',3659.33,8,'campo 3','2022-09-23','1900-01-01','activo',2),(3,'2022-09-22','2022-09-24',89.26,5,'prueba 3','2022-09-26','1900-01-01','activo',3);
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `redgas`
--

LOCK TABLES `redgas` WRITE;
/*!40000 ALTER TABLE `redgas` DISABLE KEYS */;
INSERT INTO `redgas` VALUES (1,'2022-05-02','2022-05-03',544666.22,9,'comentario de prueba','2022-09-22','1900-01-01','activo',1),(2,'2022-05-02','2022-05-03',89.26,8,'prueba campo2','2022-09-23','1900-01-01','activo',2),(3,'2022-09-22','2022-09-23',56987.25,8,'prueba 3','2022-09-26','1900-01-01','activo',3);
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
  `mLineales` decimal(8,2) NOT NULL,
  `mPerson` int NOT NULL,
  `m2Muro` decimal(8,2) NOT NULL,
  `muroPerson` int NOT NULL,
  `m2Cubierta` decimal(8,2) NOT NULL,
  `cubiertaPerson` int NOT NULL,
  `metrosLineales` decimal(8,2) NOT NULL,
  `linealesPerson` int NOT NULL,
  `diasCaidos` int NOT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seco`
--

LOCK TABLES `seco` WRITE;
/*!40000 ALTER TABLE `seco` DISABLE KEYS */;
INSERT INTO `seco` VALUES (1,'2022-05-03','2022-09-05',-2.00,-2,-1.00,5,5852.22,-2,52355.25,-2,3,'Mal Tiempo','tornillos','pegamento','clavos','otro dato','2022-09-22','1900-01-01','activo',1),(2,'2022-09-03','2022-09-04',2542.33,2,2546.33,5,25256.22,5,3659.22,5,9,'Mal Tiempo','prueba1','prueba2','prueba2','prueba campo','2022-09-23','1900-01-01','activo',2),(3,'2022-09-22','2022-09-23',56585.25,4,2541.66,5,1548.33,7,-2.00,-2,56,'Otro','tornillos','pegamento','clavos','prueba 3','2022-09-26','1900-01-01','activo',3);
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visita`
--

LOCK TABLES `visita` WRITE;
/*!40000 ALTER TABLE `visita` DISABLE KEYS */;
INSERT INTO `visita` VALUES (1,'2022-09-22','Maria','Martinez',1,'2022-09-22','1900-01-01','activo',1),(2,'2022-09-23','Penelope','Cruz',2,'2022-09-23','1900-01-01','activo',1),(3,'2022-09-25','Juan','Carvello',1,'2022-09-26','1900-01-01','actualizado',2);
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

-- Dump completed on 2022-09-26 17:14:24
