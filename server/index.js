const express = require('express');
const conn = require('./db/conn');
const cors = require('cors');

const server = express();
const port = 5000;

server.use(cors());

server.use(
    express.urlencoded({
        extended: true
    })
);

server.use(express.json());


server.post('/usuario/criar', (req, res) => {
    const name = req.body.nameUser;
    const email = req.body.emailUser;
    const password = req.body.passwordUser;

    const sql = `INSERT INTO usuarios (nome_usu, email_usu, password_usu) VALUES (?, ?, ?)`;
    const data = [name, email, password];

    conn.query(sql, data, (err) => {
        if(err) {
            console.log(err)
            res.status(500).json({message: err.sqlMessage}).end()
            return
        }
        res.status(200).json({message: "Cadastro realizado com sucesso"}).end()
    })
})

server.get('/', (req, res) => {
    res.write(`AOBA`)
    res.end()
});

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});