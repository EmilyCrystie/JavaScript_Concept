// mapeamento de velocidade

/* espaçonave: nome, tipo, velocidade máx. ok
        prompt para nome, tipo, velocidade máx. ok
    
    1. velocidade inicial = 0
    2. pergunta: acelerar ou parar
        parar: exibir nome da nave, tipo, velocidade q estava
        acelerar: prompt para velocidade a ser aumentada (velocidade atual + esse prompt)
    3. verificação de velocidade
        x > veloc. máx.: alert velocidade atual e a velocidade permitida
*/

let spaceship = {
    velocity: 0,
    speedUp: function(acceleration) {
        this.velocity += acceleration
    }
}

function registerSpaceship() {
    spaceship.name = prompt("Informe o nome da nave")
    spaceship.type = prompt("Informe o tipo da nave")
    spaceship.maxVelocity = Number(prompt("Informe a VELOCIDADE MÁXIMA da nave (km/s)"))
}

function acelerate() {
    let acceleration = Number(prompt("Quanto você quer acelerar? (km/s)"))
    spaceship.speedUp(acceleration)
    if(spaceship.velocity > spaceship.maxVelocity) {
        alert(  "VELOCIDADE MÁXIMA ULTRAPASSADA!" +
                "\nVelocidade da Nave: " + spaceship.velocity + "km/s" +
                "\nVelocidade máxima da Nave: " + spaceship.maxVelocity + "km/s")
    }
}

function stop() {
    alert(  "Nome: " + spaceship.name + "\nTipo: " + spaceship.type + "\nVelocidade da nave: "
            + spaceship.velocity + "\nMáxima da Nave: " + spaceship.maxVelocity)
    spaceship.velocity = 0
}

function showMenu() {
    let chosenOption
    do {
        chosenOption = prompt("Você deseja:\n1- Acelerar\n2- Parar")
        switch(chosenOption) {
            case "1":
                acelerate()
                break
            case "2":
                stop()
                break
            default:
                alert("Opção inválida")
        }
    } while(chosenOption != "2")
}

registerSpaceship()
showMenu()