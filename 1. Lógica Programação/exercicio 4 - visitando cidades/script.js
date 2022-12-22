/*
Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou.
*/

const turista = prompt("Informe seu nome: ")

let cidades = ""
let contagem = 0

let verificar_visitas = prompt(turista + ", você já visitou alguma cidade? (sim/não)")

while (verificar_visitas == "sim"){
    let cidade = prompt("Qual o nome da cidade visitada?")
    
    cidades += " - " + cidade + "\n"
    contagem++
    verificar_visitas = prompt("Você já visitou alguma outra cidade? (sim/não)")
}

alert("Turista: " + turista +
"\nQtd. de cidades visitadas: " + contagem +
"\nCidades: \n" + cidades)