let spaceship = prompt("Olá piloto, qual o nome da nave?")
let initialVelocity = 0
let acceleration = 5
let newVelocity = ""

let menu = prompt("Menu de opções \nDigite o número da opção desejada: \n" + 1 + ". Acelerar a nave em 5km/s \n" + 2 + ". Desacelerar em 5km/s\n" + 3 + ". Imprimir dados de bordo\n" + 4 + ". Sair do programa")

function speedUp(newVelocity) {
    newVelocity = initialVelocity + acceleration
}

function slowDown(newVelocity) {
   if (newVelocity > 0) {
        newVelocity - acceleration
   }
}

function dataship(spaceship, newVelocity) {
    prompt("Nave: " + spaceship + "\nVelocidade atual: " + newVelocity)
}

function logout(velocity) {
    newVelocity +- acceleration;
    if (newVelocity==5) {
        newVelocity = initialVelocity
    }
}

switch (menu) {
    case 1:
        speedUp
        break;
    case 2:
        slowDown
        break;
    case 3:
        dataship
        break;
    case 4:
        logout
        break;
    default:
        alert("Opção não encontrada")
        break;
}