create table if not exists users (
    id integer auto_increment primary key,
    login varchar(100) unique not null,
    password varchar(100) not null,
    type enum('admin', 'entregador', 'empresa') not null
)