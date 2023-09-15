let form = document.querySelector("#form-cadastro");
const formvalid = document.getElementById('#form-cadastro');
let name = document.getElementById("#name");
const namevalid = document.querySelector('#name');
let endereco = document.getElementById("#endereco");
const enderecovalid = document.querySelector('#endereco');
let cep = document.getElementById("cep");
const cepvalid = document.querySelector('#cep');
let senha = document.getElementById("password");
const senhavalid = document.querySelector('#password');
let confirmsenha = document.getElementById("confirm-password");
const confirmsenhavalid = document.querySelector('#confirm-password');
let email = document.getElementById("#email");
const emailvalid = document.querySelector('#email');

formvalid.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Preencha novamente");
})
