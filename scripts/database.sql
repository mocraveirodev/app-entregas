create table if not exists users (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username varchar(100) unique NOT NULL,
    password varchar(100) NOT NULL,
    type enum('admin', 'entregador', 'empresa')
)
