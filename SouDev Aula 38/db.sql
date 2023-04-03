-- Para listar os bancos de dados --
SHOW DATABASES:

-- Para criar um banco de dados --
CREATE DATABASE nome_do_banco; -- db_escola_soudiva; --

-- Para excluir um banco --
DROP DATABASE nome_do_banco;

-- Para selecionar/entrar no banco de dados --
USE nome_do_banco;

-- TABELAS --

-- Para mostrar as tabelas do banco --
SHOW TABLES;

-- Criar uma tabela --
CREATE TABLE tb_curso (
   id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY, -- a primary key é única, é como se fosse o CPF da tabela --
   nome VARCHAR(50) NOT NULL,
   carga_horaria INT(4) NOT NULL,
   descricao VARCHAR(255)
);

-- Detalhar a estrutura de uma tabela --
DESC nome_da_tabela;

-- Para alterar tabela --
ALTERAR TABLE nome_da_tabela;

-- Para excluir uma tabela --
DROP TABLE nome_da_tabela;

-- Tabela de Disciplina --
CREATE TABLE tb_disciplina (
   id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY, 
   nome VARCHAR(30) NOT NULL,
   carga_horaria INT(4) NOT NULL,
   descricao VARCHAR(255)
);
