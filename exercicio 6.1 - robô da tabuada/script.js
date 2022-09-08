/*
Escreva um programa em javascript que seja capaz de calcular a tabuada de um determinado número (de 1 a 10). O programa deve começar pedindo o número a ser usado nos cálculos e então salvar todos os resultados de multiplicações de 1 a 20 usando o número informado dentro de uma variável do tipo string. Depois o programa deve exibir esses resultados e finalizar.
*/

//solictar nº
//criar variavel string para resultados
    //multiplicações de 1 a 10
//exibir resultados
//finalizar

let numero = prompt("Informe um nº para cálculo de sua tabuada: ")

let resultado = ""

for (let i = 1; i <= 10; i++) {
    resultado += numero + " x " + i + " = " + (numero * i) + "\n"
}

alert("Tabuada de " + numero + "\n\n" + resultado)