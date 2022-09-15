/*
Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.
*/

/*
pilha: último que entra é  primeiro que sai

menu
    -qtd de cartas no baralho
    - opções
        - adicionar carta
            - nome da carta
            - add no topo
        - puxar carta
            - remover do topo
            - exeibir nome da carta puxada
        - sair
            - repetir menu até esta opção ser selecionada
*/

let baralho = []

let opcao = ""

do{
    opcao = prompt(('Qtd. de cartas: \n' + baralho.length + 
    '\n\n1. Adicionar carta' +
    '\n2. Puxar carta' +
    '\n3. Sair'))

        switch(opcao){
            case "1":
                let v_carta = prompt('Insira o valor desejado: ')
                let n_carta = prompt('Informe o naipe:  ')
                let nova_carta = v_carta + ' de ' + n_carta
        
                baralho.push(nova_carta)
                // console.log(baralho)
                break
                
            case "2":
                let carta_puxada = baralho.pop()
                alert('Carta ' + carta_puxada + ' puxada')
                break

            case "3":
                alert('Encerrando programa')
                break

            default:
                alert('Informe uma opção válida')
                break
        }
} while(opcao != '3')