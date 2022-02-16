// Variáveis

let nome = document.querySelector('#nome');
let sobrenome = document.querySelector('#sobrenome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let nomeOk = false;
let sobrenomeOK = false;
let emailOk = false;
let assuntoOk = false;

let contador = document.querySelector('#contador')
contador.innerHTML = "0 / 100"


//Nome
function valorNome() {

    if (nome.value.length >= 4) {
        nome.style.background = 'yellow';
        txtNome.innerHTML = 'Nome aceito!';
        nomeOk = true;
    } else {
        nome.style.background = 'red';
        txtNome.innerHTML = 'Insira 4 caracteres no minimo';
    }

}

//SobreNome
function valorSobrenome() {

    if (sobrenome.value.length >= 4) {
        sobrenome.style.background = 'yellow';
        txtSobrenome.innerHTML = 'Sobrenome aceito!';
        sobrenomeOk = true;
    } else {
        sobrenome.style.background = 'red';
        txtSobrenome.innerHTML = 'Sobrenome inválido - Insira 4 caracteres no minimo';
    }
}

//E-mail
function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        txtEmail.innerHTML = 'Email Aceito!'
    } else {
        txtEmail.innerHTML = 'Email Incorreto'
    }
}

//Assunto
function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto');

    contador.innerHTML = `${assunto.value.length} / 100`


    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML =
            'Texto é muito grande, digite no máximo 100 caracteres ❌';
        txtAssunto.style.color = '#732626';
        txtAssunto.style.display = 'block';
    } else {
        txtAssunto.style.display = 'none';
        assuntoOk = true;
    }
}

//Enviar

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Formulário enviado com sucesso!');
    } else {
        alert('Preencha o formulário');
    }
}

//Contador do Assunto

function count() {
    let contador = document.querySelector('#contador')
    contador.innerHTML = `${assunto.value.length} / 144`
}