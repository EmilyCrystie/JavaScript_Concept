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
    name: prompt("Insira o nome da nave:"),
    tipo: prompt("Qual o tipo desta nave?"),
    maxVelocity: prompt("Informe a velocidade máxima que esta nave atinge:"),
}

function velocityControl(velocity){
    let situation = prompt("Digite o nº da opção desejada:\n" + "1.Acelerar\n" + "2.Parar")
        if (situation = 1) {
            let velocity = [
                initialVelocity = 0,
                acceleration = prompt("A velocidade deve ser aumentada em quantos?"), 
            ]
            atualVelocity = prompt(initialVelocity + acceleration)
                
        } else {
                
        }
}





