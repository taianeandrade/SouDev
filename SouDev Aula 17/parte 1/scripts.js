let produtos = [];
function adicionarItem(){
    let produto = {
        nome: nome.value,
        preco: preco.value,
        qtd: qtd.value
    };
    produtos.push(produto);
    localStorage.setItem("produtos", JSON.stringify(produtos));
    listarItems();

    // alert("Adicionou");
}

function listarItems(){
    let items = JSON.parse(localStorage.getItem("produtos"));
    lista.innerHTML = " ";
    if(items && items.length > 0){
    for(let i = 0; i < produtos.length; i++){
        lista.innerHTML += `<li class="list-group-item d-flex">
        <div class= "w-50">${items[i].nome}</div>
        <div class= "w-50">${items[i].qtd}</div>
        <div class= "w-50">${items[i].preco}</div>
        </li>`;
    }
        
       }
}

