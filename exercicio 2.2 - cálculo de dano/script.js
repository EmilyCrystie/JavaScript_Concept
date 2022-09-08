/*
Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:

- Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
- Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
- Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.
*/


let name_character1 = prompt("Insira o nome do personagem de ATAQUE: ");
let attack_power = parseFloat(prompt("Insira seu poder de ATAQUE: "));

let name_character2 = prompt("Insira o nome do personagem de DEFESA: ");
let life = parseFloat(prompt("Qual a qtd. de pontos vida: "));
let defensive_power = parseFloat(prompt("Insira seu poder de DEFESA: "));
let shield = prompt("Este personagem possui escudo? (Informe o nº 1 para SIM ou 0 para NÃO")

let harm = "";

if (attack_power > defensive_power && shield == 0){
    harm = parseFloat(attack_power - defensive_power);
} else if(attack_power > defensive_power && shield == 1) {
    harm = (attack_power - defensive_power)/2;
} else {
    harm = 0;
}

let result = life - harm;

alert("Qtd. de dano: " + harm +
"\n\nDados " +
"\nPersonagem 1: " + name_character1 + " / Ataque: " + attack_power +
"\nPersonagem 2: " + name_character2 + " / Vida: " + result + " / Defesa: " + defensive_power + " / Escudo: " + shield)