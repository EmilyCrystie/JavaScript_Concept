let namePilot = prompt("Informe seu nome")
let initialVelocity = 0

let atualVelocity = prompt("A que velocidade gostaria de chegar?")
let confirmVelocity = confirm(atualVelocity + " km/s" + "\nEsta é a velocidade que deseja?")
if(confirmVelocity){
    initialVelocity = atualVelocity
}

if (atualVelocity < 0){
    alert("Nave está parada. Considere partir e aumentar a velocidade.")
} else if (atualVelocity < 40){
    alert("Você está devagar. podemos aumentar mais.")
} else if ((atualVelocity >= 40) && (atualVelocity <= 80)){
    alert("Parece uma boa velocidade para manter.")
} else if ((atualVelocity >= 80) && (atualVelocity <= 100)){
    alert("Velocidade alta. Considere diminuir.")
} else if (atualVelocity >= 100){
    alert("Velocidade perigosa. Controle automático forçado")
} 

alert(namePilot + ", nossa velocidade atual é de " + atualVelocity + " km/s.")