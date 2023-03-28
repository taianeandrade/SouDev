// document.write("<h1>Olá mundo</h1>"); /*o javascript pode escrever html*/
// document.write("<p>meu paragrafo</p>");
// document.write('<button class= "btn btn-primary">meu botão</button>'); /*o javascript pode escrever css*/
// alert("Minha mensagem");

// let button = document.querySelector("button");
// button.addEventListener("mouseleave", function(){
//     alert("Volte aqui");
// })

// NOSSO PRIMEIRO CHATBOX

// alert("Oi sumida");

// let resposta = prompt();

// if(resposta == "oi"){
//     alert("Eita como ela é fria");
// }

// alert("Tudo bem?");

// let resposta2 = prompt();

// if(resposta2 == "tudo"){
//     alert("Tá muito ocupada né?");
// }else{
//     alert("tá fazendo o quê?");
//     let resposta3 = prompt();
//     if(resposta3 == "nada"){
//         alert("Bora sair?");
//         let resposta4 = prompt();
//         if(resposta4 == "bora"){
//             alert("pra onde?")
//         }
//     }
// }


// NOSSO CHATBOX

let conversas = document.querySelector(".conversas");
let botao = document.querySelector(".btn");
let resposta = document.querySelector("#respostas");

conversas.innerHTML = "<div>Olá seja bem-vinda, em que posso lhe ajudar?</div>";

setTimeout(() => {
    conversas.innerHTML += "<div>1. Finaceiro<br>2. Acadêmico<br>3. Comercial</div>";
}, 2000);

botao.addEventListener("click", () => {
     switch(resposta.value){
        case "1":
            conversas.innerHTML += "<div>Entendi, você escolheu Financeiro</div>";
            break;

         case "2":
             conversas.innerHTML += "<div>Entendi, você escolheu Acadêmico</div>";
                break;

                case "3":
            conversas.innerHTML += "<div>Entendi, você escolheu Comercial</div>";
            break;
     }
});

