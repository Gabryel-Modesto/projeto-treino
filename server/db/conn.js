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