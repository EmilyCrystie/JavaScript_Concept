/*
Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.
*/

/*
fila: primeiro q chega, primeiro q sai

menu interativo:
    - lista pacientes esperando
        - posição, nome do paciente
        - em ordem de chegada
    - novo paciente
        - solicitar nome do paciente
        - adicionar ao FINAL da fila
    - consultar paciente
        - retirar primeior paciente da fila
        - mostrar nome do paciente consultado
    - sair
        - encerrar programa
        - repete-se menu enquanto NÃO for selecionado esta opção
*/

let lista_de_pacientes = []

let opcoes = ""


do{
    let pacientes = ""
    for(let i = 0; i < lista_de_pacientes.length; i++){
        pacientes += (i+1) + "º " + lista_de_pacientes[i] + "\n"
    }

    opcoes = prompt('Pacientes: \n' + pacientes + 
    '\n\n1. Novo Paciente' +
    '\n2. Consultar Paciente' +
    '\n3. Sair')

        switch(opcoes){
            case "1":
                let novo_paciente = prompt('Informe o nome do paciente: ')
        
                lista_de_pacientes.push(novo_paciente)
                // console.log(lista_de_pacientes)
                break
                
            case "2":
                let atendido = lista_de_pacientes.shift()
                alert('Paciente ' + atendido + ' foi atendido')
                break

            case "3":
                alert('Encerrando programa')
                break

            default:
                alert('Informe uma opção válida')
                break
        }
} while(opcoes !== '3')
