/*
    Escreva um programa em js que permita inserir o nome e a velocidade de dois veículos 
    e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais, se for o caso)
*/

let car_name1 = prompt("Inseri o nome do veículo 1: ");
let car_speed1 = parseFloat(prompt("Insira sua velocidade: "));

let car_name2 = prompt("Inseri o nome do veículo 2: ");
let car_speed2 = parseFloat(prompt("Insira sua velocidade: "));

let details = ("Veículo 1: " + car_name1 + 
"\nVelocidade: " + car_speed1 + "km/h" +
"\n\nVeículo 2: " + car_name2 +
"\nVelocidade: " + car_speed2 + "km/h")


if (car_speed1 > car_speed2){
    alert("O veículo " + car_name1 + " é mais rápido que o " + car_name2 + "\n\nDados dos veículos \n" + details);
} else if (car_speed2 > car_speed1){
    alert("O veículo " + car_name2 + " é mais rápido que o " + car_name1 + "\n\nDados dos veículos \n" + details);
} else {
    alert("Os veículos possuem a mesma velocidade: " + car_speed1 + "\n\nDados dos veículos \n" + details);
}