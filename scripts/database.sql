create table if not exists users (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username varchar(100) unique NOT NULL,
    password varchar(100) NOT NULL,
    type enum('admin', 'entregador', 'empresa')
);

create table if not exists entregador(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_user int,
    nome varchar(100) NOT NULL,
    cpfCnpj varchar(20) NOT NULL,
    celular varchar(20),
    email varchar(100),
    idade tinyint,
    endereco varchar(100),
    numero varchar(10),
    complemento varchar(30),
    bairro varchar(50),
    veiculo enum('moto', 'bicicleta'),
    placa varchar(10),
    foreign key (id_user) references users(id)
);
