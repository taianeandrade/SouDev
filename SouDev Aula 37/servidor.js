const produtoRouter = require('./controllers/produto/router');
const categoriaRouter = require('./controllers/categoria/router');
const clienteRouter = require('./controllers/cliente/router');

const PORTA = 8000;

const express = require('express');

// iniciando uma aplicação com express
const app = express();

app.use(express.json())

// colocando express para usar o router de categoria
app.use(categoriaRouter);
app.use(produtoRouter);

app.use((req, res, next) => {
    res.status(404).send("Nenhuma rota encontrada");
})


app.listen(PORTA, () => {
    console.log ('tá ON');
});








