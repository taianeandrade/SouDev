const express = require('express');
const produto = require('./produtos'); // buscar e cadastrar


// criando um router para gerenciar os endpoints de categoria
const app = express.Router();

app.get('/produtos', (req, res) => {
    res.send(produtos.buscar());
});

app.post('/produtos', (req, res) => {
    res.send(produtos.cadastrar());
});

module.exports = app;