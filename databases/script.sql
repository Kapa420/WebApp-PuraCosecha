create table if not exists cliente
(
    id_cliente bigint auto_increment
        primary key,
    nombre     varchar(50)  not null,
    apellido   varchar(50)  not null,
    direccion  varchar(100) null,
    telefono   bigint       not null,
    email      varchar(100) not null,
    password   varchar(50)  not null
);

create table if not exists factura
(
    id_factura bigint auto_increment
        primary key,
    id_cliente bigint not null,
    fecha      date   not null,
    constraint factura_cliente_id_cliente_fk
        foreign key (id_cliente) references cliente (id_cliente)
);

create table if not exists productor
(
    id_productor bigint auto_increment
        primary key,
    nombre       varchar(50)  not null,
    apellido     varchar(100) null,
    poblacion    varchar(100) null,
    direccion    varchar(100) null,
    telefono     bigint       not null,
    email        varchar(100) null,
    password     varchar(200) null
);

create table if not exists producto
(
    id_producto        bigint auto_increment,
    nombre_producto    varchar(50) not null,
    categoria_producto varchar(50) null,
    precio             int         not null,
    id_productor       bigint      null,
    constraint producto_id_producto_uindex
        unique (id_producto),
    constraint producto_productor_id_productor_fk
        foreign key (id_productor) references productor (id_productor)
);

alter table producto
    add primary key (id_producto);

create table if not exists detalle
(
    id_detalle  bigint auto_increment
        primary key,
    id_producto bigint not null,
    id_factura  bigint not null,
    cantidad    int    not null,
    constraint detalle_factura_id_factura_fk
        foreign key (id_factura) references factura (id_factura),
    constraint detalle_producto_id_producto_fk
        foreign key (id_producto) references producto (id_producto)
);


