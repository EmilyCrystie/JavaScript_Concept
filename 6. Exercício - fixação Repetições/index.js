let spaceship = prompt("Digite o nome da sua nave: ")
let invertedName = ""

for (let pos = spaceship.length - 1; pos >= 0; pos--) {
    if(spaceship[pos] == "e" || spaceship[pos] == "E"){
        break
    }
    invertedName += spaceship[pos]
}

alert("Nome original da nave: " + spaceship + "\nNome após ocultação: " + invertedName)
