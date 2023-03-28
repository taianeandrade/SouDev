if (localStorage.getItem("darkmode") === "true") {
    dark.checked = true; //marcando o input/switch

    alterarCores();
}

function alterarCores() {
   if (dark.checked) {
      document.body.classList.add('bg-dark');
      document.body.classList.add('text-white');
      //document.getElementById('tabela').classList.add('table-dark');
      tabela.classList.add('table-dark');
   } else {
      document.body.classList.remove('bg-dark');
      document.body.classList.remove('text-white');
      tabela.classList.remove('table-dark');

   }
}


function ativarDarkmode() {
    if (dark.checked) {
        //salva no localStorage
        localStorage.setItem("darkmode", true); 
    } else {
        localStorage.setItem("darkmode", false);
    }
    
    alterarCores();
}

















