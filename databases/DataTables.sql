CREATE DATABASE IF NOT EXISTS appweb;

CREATE TABLE IF NOT EXISTS cliente(
idCliente bigint NOT NULL AUTO_INCREMENT,
nombre varchar(100) DEFAULT NULL,
telefono bigint DEFAULT NULL,
Email varchar(100) DEFAULT NULL,
direccion varchar(100) DEFAULT NULL,
municipio varchar(100) DEFAULT NULL,
PRIMARY KEY (idCliente)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS producto (
idProducto bigint NOT NULL AUTO_INCREMENT,
nombreProducto varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT
NULL,
precio bigint DEFAULT NULL,
PRIMARY KEY (idProducto)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

 CREATE TABLE IF NOT EXISTS productores (
idProductor bigint NOT NULL,
nombre varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
poblacion varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
municipio varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
direccion varchar(100) DEFAULT NULL,
telefono bigint DEFAULT NULL,
e-mail varchar(100) DEFAULT NULL,
tipoProducto varchar(100) NOT NULL,
idProducto bigint NOT NULL,
PRIMARY KEY (idProductor),
KEY productores_FK (idProducto),
CONSTRAINT productores_FK FOREIGN KEY (idProducto) REFERENCES producto
(idProducto)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
