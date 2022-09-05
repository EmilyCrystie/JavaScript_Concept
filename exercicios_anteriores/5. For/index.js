let spaceship = prompt("Olá, digite o nome da sua nave: ")
let character = prompt("Qual caracter deseja substituir?") 
let newCharacter = prompt("Por qual caracter deseja substituir o anterior?")
let newSpaceship = ""

for (let pos = 0; pos < spaceship.length; pos++) {  //pos = abreviação de position
    if(spaceship[pos] == character){
        newSpaceship += newCharacter
    } else {
        newSpaceship += spaceship[pos]
    } 
}

alert("O novo nome da nave é " + newSpaceship)