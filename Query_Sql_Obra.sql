create database proyecto_check_list;

use proyecto_check_list;

SET SQL_SAFE_UPDATES = 0;

alter table general auto_increment = 1;

#---------------------------------------

#ENTIDAD GENERAL =>

SELECT * FROM general;

SELECT * FROM general WHERE idGeneral = 1;

DELETE FROM general WHERE idGeneral = 1;

alter table general auto_increment = 1;

#Query para obtener el ultimo n° de idGeneral  =>
SELECT MAX(idGeneral) FROM general;

#Query para obtener el idGeneral por N° de Obra  =>
Select idGeneral from general where codigo = "PO577";

#---------------------------------------

#ENTIDAD VISITA =>

SELECT * FROM visita;

SELECT * FROM visita WHERE idVisita = 1;

DELETE FROM visita WHERE idVisita = 1;

alter table visita auto_increment = 1;

#Query para obtener por N° de Obra/codigo el mayor numero de Visita =>
Select max(v.nVisita) as UltimaVisita from general as g inner join visita as v on g.idGeneral = v.idGeneral where g.codigo = "P0234";

#---------------------------------------

#ENTIDAD MATERIAL =>

SELECT * FROM material;

SELECT * FROM material WHERE idMaterial = 1;

DELETE FROM material WHERE idMaterial = 1;

alter table material auto_increment = 1;

#---------------------------------------

#ENTIDAD PERSONA =>

SELECT * FROM persona;

SELECT * FROM persona WHERE idPersona = 1;

DELETE FROM persona WHERE idPersona = 1;

alter table persona auto_increment = 1;

#---------------------------------------

#ENTIDAD GREMIO =>

SELECT * FROM gremio;

SELECT * FROM gremio WHERE idGremio = 1;

DELETE FROM gremio WHERE idGremio = 1;

alter table gremio auto_increment = 1;

#---------------------------------------

#ENTIDAD HUMEDA =>

SELECT * FROM humeda;

SELECT * FROM humeda WHERE idHumeda = 1;

DELETE FROM humeda WHERE idHumeda = 1;

alter table humeda auto_increment = 1;

#---------------------------------------

#ENTIDAD SECO =>

SELECT * FROM seco;

SELECT * FROM seco WHERE idSeco = 1;

DELETE FROM seco WHERE idSeco = 1;

alter table seco auto_increment = 1;

#---------------------------------------

#ENTIDAD PANEL =>

SELECT * FROM panel;

SELECT * FROM panel WHERE idPanel = 1;

DELETE FROM panel WHERE idPanel = 1;

alter table panel auto_increment = 1;

#---------------------------------------

#ENTIDAD PANEL =>

SELECT * FROM panel;

SELECT * FROM panel WHERE idPanel = 1;

DELETE FROM panel WHERE idPanel = 1;

alter table panel auto_increment = 1;

#---------------------------------------

#ENTIDAD RED_AGUA =>

SELECT * FROM redagua;

SELECT * FROM redagua WHERE idAgua = 1;

DELETE FROM redagua WHERE idAgua = 1;

alter table redagua auto_increment = 1;

#---------------------------------------

#ENTIDAD RED_GAS =>

SELECT * FROM redgas;

SELECT * FROM redgas WHERE idGas = 1;

DELETE FROM redgas WHERE idGas = 1;

alter table redgas auto_increment = 1;

#---------------------------------------

#ENTIDAD RED_ELECTRICIDAD =>

SELECT * FROM redelectricidad;

SELECT * FROM redelectricidad WHERE idElectricidad = 1;

DELETE FROM redelectricidad WHERE idElectricidad = 1;

alter table redelectricidad auto_increment = 1;

#---------------------------------------

#ENTIDAD ABERTURAS =>

SELECT * FROM abertura;

SELECT * FROM abertura WHERE idAbertura = 1;

DELETE FROM abertura WHERE idAbertura = 1;

alter table abertura auto_increment = 1;

#---------------------------------------

#ENTIDAD CONLUSION =>

SELECT * FROM conclusion;

SELECT * FROM conclusion WHERE idConclusion = 1;

DELETE FROM conclusion WHERE idConclusion = 1;

alter table conclusion auto_increment = 1;

#Verificar si la entidad Conclusion tiene un registro relacionado al idGeneral =>
SELECT count(idGeneral) FROM conclusion where idGeneral = 6;
                                                                                                                                                     
                                                                                                                                                     