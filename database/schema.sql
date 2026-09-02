create database todolist
use todolist;

create table tasks (
id int auto_increment primary key,
titulo varchar(255) not null ,
descricao text,
status enum('pendente', 'concluida') default 'pendente',
created_at timestamp default current_timestamp
);