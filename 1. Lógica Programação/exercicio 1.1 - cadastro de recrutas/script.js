/*Escreva um programa em javascript que permita salvar informações de um recruta. As informações a serem salvas são:

- o primeiro nome
- o sobrenome
- o campo de estudo
- o ano de nascimento

Depois o programa deve exibir o nome completo do recruta, seu campo de estudo e sua idade (apenas baseada no ano de nascimento).*/


let nome = prompt("Informe seu nome: ");
let sobrenome = prompt("Agora seu sobrenome: ");
let campo_estudo = prompt("Informe seu campo de estudo: ");
let ano_nascimento = parseFloat(prompt("Informe apenas o ano que nasceu: "));
// console.log(typeof(ano_nascimento));

let ano_atual = 2022;

let idade = ano_atual - ano_nascimento;
// console.log(idade)

confirm("Confirme seus dados:\nNome Completo: " + nome + " " + sobrenome+ "\nCampo de estudo: " + campo_estudo + "\nIdade: " + idade);

alert("Recruta cadastrado com sucesso")
