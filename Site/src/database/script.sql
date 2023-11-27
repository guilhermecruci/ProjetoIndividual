create database demolay;
use demolay;

create table idade (
idIdade int primary key auto_increment,
idade int);

insert into idade(idade) values 
(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9),
(10),
(11),
(12),
(13),
(14),
(15),
(16),
(17),
(18),
(19),
(20),
(21),
(22),
(23),
(24),
(25),
(26),
(27),
(28),
(29),
(30),
(31),
(32),
(33),
(34),
(35),
(36),
(37),
(38),
(39),
(40),
(41),
(42),
(43),
(44),
(45),
(46),
(47),
(48),
(49),
(50),
(51),
(52),
(53),
(54),
(55),
(56),
(57),
(58),
(59),
(60),
(61),
(62),
(63),
(64),
(65),
(66),
(67),
(68),
(69),
(70),
(71),
(72),
(73),
(74),
(75),
(76),
(77),
(78),
(79),
(80),
(81),
(82),
(83),
(84),
(85),
(86),
(87),
(88),
(89),
(90),
(91),
(92),
(93),
(94),
(95),
(96),
(97),
(98),
(99),
(100),
(101),
(102),
(103),
(104),
(105),
(106),
(107),
(108),
(109),
(110),
(111),
(112),
(113),
(114),
(115),
(116),
(117),
(118),
(119);
select * from idade;

create table paramento (
idParamento int primary key auto_increment,
capa int)auto_increment = 100;

insert into paramento values 
(null,0),
(null,1);
select * from paramento;

create table situacao (
idSituacao int primary key auto_increment,
tipo varchar(20) check(tipo in("ativo", "inativo")),
fkParamento int,
constraint fkParamento foreign key (fkParamento)
references paramento(idParamento))auto_increment = 1000;

insert into situacao(tipo, fkParamento) values
('inativo',1),
('ativo',2);
select * from situacao;

create table usuario (
idDemolay int primary key auto_increment,
nome varchar(90),
email varchar(65),
fkIdade int,
constraint fkIdade foreign key (fkIdade)
references idade(idIdade),
senha varchar(45),
fkSituacao int,
constraint fkSituacao foreign key (fkSituacao)
references situacao(idSituacao)
);
INSERT INTO usuario (nome, email, senha, fkIdade, fkSituacao) VALUES


create user 'UserDemolayMaster'@'localhost' identified by 'banana';

grant INSERT, DELETE, SELECT, UPDATE on demolay.usuario to 'UserDemolayMaster'@'localhost';
grant INSERT, DELETE, SELECT, UPDATE on demolay.cargo to 'UserDemolayMaster'@'localhost';
grant INSERT, DELETE, SELECT, UPDATE on demolay.pontuacao to 'UserDemolayMaster'@'localhost';

flush privileges;