/*
Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa.
*/

//qtd r$ inicial disponivel
//exibir menu
    //qtd
    //opções
        //adicionar
            //qtd a ser add
            //qtd inicial + valor a add
            //exibir menu (com valor atualizado)
        //remover
            //mesma lógica de add porém, subtrair
        //sair
            //encerrar programa

let valor = parseFloat(prompt("Informe o valor inicial disponível: "))
let opcao = ""

do {
    opcao = prompt("Valor atual: R$ " + valor +
    "\n\nDigite o nº da opção desejada:" +
    "\n1. Adicionar dinheiro" +
    "\n2. Remover dinheiro" +
    "\n3. Sair")

    switch (opcao) {
        case "1":
            let valor_add = parseFloat(prompt("Informe a quantia a ser adicionada: R$ "))
            valor += valor_add
            break;
        case "2":
            let valor_remove = parseFloat(prompt("Informe a quantia a ser removida: R$ "))
            valor -= valor_remove
            break;
        case "3":
            alert("Encerrar programa")
            break;
        default:
            alert("Opção inválida!")
            break;
    }
} while (opcao != "3");

alert("Encerrando...")