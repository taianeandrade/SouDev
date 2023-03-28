//importando o arquivo teste.js

// const {x, y} = require('./teste');
// const  a = require('./teste');

// x();
// y();
// a.x();
// a.y();

// console.log ("Ola mundo");



const produto = require('./controllers/produtos');
const categoria = require('./controllers/categorias');
const cliente = require('./controllers/cliente');

//importando diretamente do node
const http = require ('http');

const PORTA = 8000;
const ENDERECO = 'localhost';


//essa função vai ser sempre executada quando alguma requisição for feita ao servidor
function recepcao (req, res) {
    // console.log("chegou aqui...");
    let resposta = "Página não encontrada";

switch(req.url) {
    case "/clientes":
        resposta = cliente.buscar();
    break;

    case "/produtos":
        resposta = produtos.buscar();
        break;

    case "/categorias":
        resposta = categorias.buscar();
        break;
}

    // if (req.url === "/clientes") {
    //     resposta = cliente.buscar();
    // } else if (req.url === '/produtos') {
    //     resposta = produto.buscar();
    // }

    // res.end('pronto deu certo');
    res.end(resposta);
}


//criando o servidor e colocando ele pra escutar as requisições
http.createServer(recepcao).listen(PORTA, ENDERECO, () => {
    console.log('A veia tá ON...');
});


// console.log(produto.buscar());
// console.log(categoria.buscar());


