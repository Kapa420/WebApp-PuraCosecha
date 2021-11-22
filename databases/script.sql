CREATE database if NOT EXISTS appweb1;

CREATE TABLE if NOT EXISTS cliente
(
    id_cliente BIGINT AUTO_INCREMENT
        PRIMARY KEY,
    nombre     VARCHAR(50)  NOT NULL,
    apellido   VARCHAR(50)  NOT NULL,
    direccion  VARCHAR(100) NULL,
    telefono   BIGINT       NOT NULL,
    email      VARCHAR(100) NOT NULL,
    password   VARCHAR(50)  NOT NULL
);

CREATE TABLE if NOT EXISTS factura
(
    id_factura BIGINT AUTO_INCREMENT
        PRIMARY KEY,
    id_cliente BIGINT NOT NULL,
    fecha      DATE   NOT NULL,
    CONSTRAINT factura_cliente_id_cliente_fk
        FOREIGN KEY (id_cliente) REFERENCES cliente (id_cliente)
);

CREATE TABLE if NOT EXISTS productor
(
    id_productor BIGINT AUTO_INCREMENT
        PRIMARY KEY,
    nombre       VARCHAR(50)  NOT NULL,
    apellido     VARCHAR(100) NULL,
    poblacion    VARCHAR(100) NULL,
    direccion    VARCHAR(100) NULL,
    telefono     BIGINT       NOT NULL,
    email        VARCHAR(100) NULL,
    password     VARCHAR(200) NULL
);

CREATE TABLE if NOT EXISTS producto
(
    id_producto        BIGINT AUTO_INCREMENT,
    nombre_producto    VARCHAR(50) NOT NULL,
    categoria_producto VARCHAR(50) NULL,
    precio             INT         NOT NULL,
    id_productor       BIGINT      NULL,
    CONSTRAINT producto_id_producto_uindex
        unique (id_producto),
    CONSTRAINT producto_productor_id_productor_fk
        FOREIGN KEY (id_productor) REFERENCES productor (id_productor)
);

alter TABLE producto
    add PRIMARY KEY (id_producto);

CREATE TABLE if NOT EXISTS detalle
(
    id_detalle  BIGINT AUTO_INCREMENT
        PRIMARY KEY,
    id_producto BIGINT NOT NULL,
    id_factura  BIGINT NOT NULL,
    cantidad    int    NOT NULL,
    CONSTRAINT detalle_factura_id_factura_fk
        FOREIGN KEY (id_factura) REFERENCES factura (id_factura),
    CONSTRAINT detalle_producto_id_producto_fk
        FOREIGN KEY (id_producto) REFERENCES producto (id_producto)
);
