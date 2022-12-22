/*
Escreva um programa em javascript que seja capaz de identificar se uma palavra é um palíndromo. Um palíndromo é uma palavra que lida de trás para frente possui as mesmas letras na mesma ordem. O programa deve iniciar pedindo que seja informada uma palavra e então deve exibir uma mensagem dizendo se aquela palavra é ou não um palíndromo. Caso não seja um palíndromo, o programa deve mostrar a palavra lida da esquerda para direita e da direita para esquerda.
*/

//solicitar palavra
//informar se é palíndromo
    //sim: 
    //não: 
        //palavra da esquerda p/ direta e vice versa

let palavra = prompt("Informe uma palavra: ")
let palavra_invertida = ""

for (let i = palavra.length - 1; i >= 0; i--){
    palavra_invertida += palavra[i]
}

if (palavra === palavra_invertida){
    alert("A palavra " + palavra + " é um palíndromo")
} else {
    alert("Esta palavra não um palíndromo\n" + 
    "Palavra informada: " + palavra + 
    "\nPalavra invertida: " + palavra_invertida)
}