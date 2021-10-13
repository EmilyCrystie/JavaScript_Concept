let spaceship = prompt("Olá piloto, qual o nome da nave?")
let initialVelocity = 0
let acceleration = 5
let newVelocity = ""

let menu = prompt("Menu de opções \nDigite o número da opção desejada: \n" + 1 + ". Acelerar a nave em 5km/s \n" + 2 + ". Desacelerar em 5km/s\n" + 3 + ". Imprimir dados de bordo\n" + 4 + ". Sair do programa")
confirm("Deu certo?")

function speedUp (newVelocity) {
    newVelocity = initialVelocity + acceleration
}

function slowDown(newVelocity) {
   if (initialVelocity=0) {
       
   }
    newVelocity - acceleration
}



