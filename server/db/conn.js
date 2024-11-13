const mysql = require('mysql2');

//Configurando a conexão do banco de dados
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1937',
    database: 'teste',
    connectionLimit: 10
});

conn.connect((err) => {
    if(err) {
        console.log(err)
    } else {
        console.log("Conectado")
    }
});

module.exports = conn;

/*
SELECT * FROM users;

CREATE DATABASE teste;
USE  teste;

CREATE TABLE usuarios(
	id_usu INT PRIMARY KEY AUTO_INCREMENT,
    nome_usu VARCHAR(100) NOT NULL,
    email_usu VARCHAR(100) NOT NULL,
    password_usu VARCHAR(100) NOT NULL
);

CREATE TABLE categoria(
	id_cat INT PRIMARY KEY AUTO_INCREMENT UNIQUE,
    nome_cat VARCHAR(100) NOT NULL
);

CREATE TABLE produto (
	id_protudo INT PRIMARY KEY AUTO_INCREMENT,
    nome_produto VARCHAR(100) NOT NULL,
    preco_produto DECIMAL(7,2),
    cat_id INT,
    FOREIGN KEY (cat_id) REFERENCES categoria(id_cat)
);

CREATE VIEW cat_produto AS
SELECT 
	c.nome_cat,
	p.nome_produto
FROM
produto p
INNER JOIN 
categoria c ON p.cat_id = c.id_cat;

SELECT * FROM cat_produto;

SELECT * FROM usuarios;


*/