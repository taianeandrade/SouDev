function alterarNome () {
    nome.classList.remove('is-invalid');

    if (nome.value.length > 2) {
        nome.classList.add('is-valid');
    }
}


function alterarEmail () {
    email.classList.remove('is-invalid');

    if (email.value.length > 2) {
        email.classList.add('is-valid');
    }
}

function alterarTelefone () {
    telefone.classList.remove('is-invalid');

    if (telefone.value.length > 2) {
        telefone.classList.add('is-valid');
    }
}


function alterarCidade () {
    cidade.classList.remove('is-invalid');

    if (cidade.value.length > 2) {
        cidade.classList.add('is-valid');
    }
}


function validar() {
    event.preventDefault();   /*faz com que o formulário não seja enviado*/


    if (document.getElementById('nome').value === '') {    /*vai no html e pega um elemento pelo id*/
        // if (nome.value === '')  {
            // alert("Epaaa, nome está inválido");
            // nome.style.borderColor = 'red';
            nome.classList.add('is-invalid');  
        // }
      
    }

    if (document.getElementById('email').value === '') {  
    //   alert("Epaaa, email está inválido");
        // email.style.borderColor = 'red';
          email.classList.add('is-invalid');
    }

    if (document.getElementById('telefone').value === '') {  
    //   alert("Epaaa, telefone está inválido");
        // telefone.style.borderColor = 'red';
          telefone.classList.add('is-invalid');
    }

    if (document.getElementById('cidade').value === '') { 
    //   alert("Epaaa, cidade está inválido");
        // cidade.style.borderColor = 'red';
          cidade.classList.add('is-invalid');
    }
}




