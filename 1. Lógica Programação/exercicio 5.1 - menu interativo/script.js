/*
Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica, a última opção deve ser a opção “Encerrar”. Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções. Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado.
*/

//inicio: menu com 5 opções
    //4 opções: 
        //mostrar opção escolhida
        //exibir menu novamente
    //última opção: encerrar
        //mostrar opção escolhida
        //mensagem de encerramento
        //finalização programa

let opcao = ""

do {
    opcao = prompt("Seja bem vindo" +
    "\n\nInforme o nº da opção desejada:" +
    "\n1 - Opção1" +
    "\n2 - Opção2" +
    "\n3 - Opção3" +
    "\n4 - Opção4" +
    "\n5 - Encerrar");


    switch(opcao){
        case "1":
            alert("Opção 1 selecionada")
            break
        case "2":
            alert("Opção 2 selecionada")
            break
        case "3":
            alert("Opção 3 selecionada")
            break
        case "4":
            alert("Opção 4 selecionada")
            break
        case "5":
            alert("Opção 5 selecionada")
            break
        default:
            alert("Opção inválida")
    }
} while(opcao != 5)

alert("Encerrando programa...")