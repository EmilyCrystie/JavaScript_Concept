
let warpCount = 0
let spaceFold = ""

let spaceship = prompt("Olá, iniciamos a decolagem, ajustando rota de vôo, por favor,\nDigite o nome da sua espaço-nave: ")

spaceFold = prompt("Deseja entrar em dobra espacial?\n1-Sim \n2-Não")

while(spaceFold == "1"){
    warpCount += 1
    spaceFold = prompt("Deseja realizar a próxima dobra?\n1-Sim \n2-Não")
}

alert("Nave: " + spaceship + "\nQuantidade de dobras: " + warpCount)