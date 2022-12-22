/* Escreve um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão).

Após calcular os resultados o programa deve exibi-los na tela. */

let numero1 = parseFloat(prompt("Insira o PRIMEIRO nº: "));
let numero2 = parseFloat(prompt("Insira o SEGUNDO nº: "));

let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let divisao = numero1 / numero2;
let multiplicacao = numero1 * numero2;

alert("Resultados \nSoma: " + soma +  
"\nSubtração: " + subtracao + 
"\nDivisão: " + divisao + 
"\nMultiplicação: " + multiplicacao)
