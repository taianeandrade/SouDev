// import listar from "./listar.js";
// import listar from "./cadastro.js";
// import listar from "./relatorio.js";

function alterarConteudo (x) {
    // if (x === 'listar') {
    //     alert(listar());
    // } else if (x === 'cadastro') {
    //     alert(cadastro());
    // } else if (x === 'relatorio') {
    //     alert(relatorio());
    // }


    //vai atualizar a DIV "conteudo" com o retorno da função
    conteudo.innerHTML = window[x]();

    // alert(window[x]()); //esse comando aqui substitui aquela ruma de if e else lá de cima
}


