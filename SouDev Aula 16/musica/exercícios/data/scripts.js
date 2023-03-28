let produtos = [];

function adicionarItem(){
    produtos.push(item.value);
    localStorage.setItem("produtos", JSON.stringify(produtos));
    listarItems();

    // alert("Adicionou");
}

function listarItems(){
    let items = JSON.parse(localStorage.getItem("produtos"));
    lista.innerHTML = " ";
    if(items && items.length > 0){
    for(let i = 0; i < produtos.length; i++){
        lista.innerHTML += `<li class="list-group-item">${produtos[i]}</li>`;
    }
        
       }
}

