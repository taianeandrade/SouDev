const express = require('express');
const categorias = require('./categorias'); // buscar e cadastrar


// criando um router para gerenciar os endpoints de categoria
const app = express.Router();

app.get('/categorias', (req, res) => {
    res.send(categorias.buscar());
});

app.get('/categorias/:id', (req, res) => {
    res.send(categorias.buscarUm(req.params.id));
});

app.post('/categorias', (req, res) => {
    res.send(categorias.cadastrar(req.body));
});

app.patch('/categorias/:id', (req, res) => {
    res.send(categorias.editar(req.params.id, req.body));
});

app.delete('/categorias/:id', (req, res) => {
    res.send(categorias.deletar(req.params.id));
});

// exportando todas as rotas criadas aqui
module.exports = app;
