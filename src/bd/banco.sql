CREATE DATABASE EsporteConecta ;

USE EsporteConecta ;

	 

CREATE TABLE Usuarios  

( 

id_usuario int auto_increment not null, 

nome varchar(250) not null, 

data_nasc date not null, 

esporte_fav varchar(100) not null, 

tipo_sanguineo varchar(10) not null, 

logradouro varchar(200) not null, 

numero int not null, 

cep varchar(9) not null, 

complemento varchar(100), 

bairro varchar(100) not null, 

cidade varchar(100) ,

email varchar(100) not null, 

senha varchar(100) not null, 

PRIMARY KEY (id_usuario) 

) ;

CREATE TABLE  Locais ( 

id_locais int auto_increment not null, 

endereco varchar(250) not null, 

numero int not null, 

cidade varchar(250) not null, 

estado char(2) not null, 

tipo_estabelecimento varchar(100) not null,  

PRIMARY KEY(id_locais) 

 

) ;

 

CREATE TABLE Eventos ( 
id_evento int auto_increment not null, 
nome_evento varchar (250) not null, 
qtd_usuarios int not null, 
esporte varchar(200) not null, 
horario datetime not null,
id_locais int, 
id_usuario int,  
CONSTRAINT fk_locais FOREIGN KEY (id_locais) REFERENCES Locais (id_locais),
CONSTRAINT fk_usuarios FOREIGN KEY (id_usuario) REFERENCES Usuarios (id_usuario),
PRIMARY KEY (id_evento) 
) 