create database demolay;
use demolay;

create table usuario (
idDemolay int primary key auto_increment,
nome varchar(90),
email varchar(65),
cpf char(11),
senha varchar(45));

create table cargo (
idCargo int primary key auto_increment,
nomeCargo varchar(45),
pontuacaoMinima int,
pontuacaoMaxima int
)auto_increment = 100;

alter table usuario add column fkCargo int;
alter table usuario add constraint fkCargo
	foreign key (fkCargo)
    references usuario(idDemolay);
    
insert into  cargo(nomeCargo, pontuacaoMinima, pontuacaoMaxima) values 
	('Iniciatico','0','2'),
    ('Preceptores','3','5'),
    ('Diaconos','6','8'),
    ('Conselheiros','9','10');
    
-- select * from cargo where pontuacaoMinima < 5 and pontuacaoMaxima > 2;

create table pontuacao (
idPontuacao int primary key auto_increment,
pontuacao int,
fkUsuario int,
constraint fkUsuario foreign key (fkUsuario)
references usuario(idDemolay))auto_increment = 1000;

insert into usuario(nome, email, cpf, senha) values
('','','','');




create user 'UserDemolayMaster'@'localhost' identified by 'banana';

grant INSERT, DELETE, SELECT, UPDATE on demolay.usuario to 'UserDemolayMaster'@'localhost';
grant INSERT, DELETE, SELECT, UPDATE on demolay.cargo to 'UserDemolayMaster'@'localhost';
grant INSERT, DELETE, SELECT, UPDATE on demolay.pontuacao to 'UserDemolayMaster'@'localhost';

flush privileges;