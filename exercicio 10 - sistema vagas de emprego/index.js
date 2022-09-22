/*
Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:

- Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema
    - Listar vagas disponíveis
    - Criar um nova vaga
    - Visualizar uma vaga
    - Inscrever um candidato em uma vaga
    - Excluir uma vaga
    - Sair
- A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.
- A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.
- A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
- A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
- A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível, como os objetos, arrays e funções.
*/

//menu
    //opções
        // listar vagas (todas)
            //indice
            //nome
            //qtd candidatos inscritos
        // criar nova vaga
            //nome da vaga
            //descrição da vaga
            //data limite
            //confirmação das infos
            //salvar
        // visualizar uma vaga
            //pedir indice da vaga
            //mostrar infos: indice, nome, descrição, data limite, qtd inscritos, nome dos candidatos
        // inscrever em vaga
            //nome candidato
            // indice da vaga
            // confirmação das infos da VAGA
            //salvar
        // excluir uma vaga
            // pedir indice
            // mostrar infos
            // confirmação de exclusão
            // remover vaga
        // sair

// do while: repetição menu
// switch: opções 
// funções: executação de cada opção
// if: para as confirmações
// arrays: salvar vagas
// console.table: visualização todas as vagas

let opcao = "";

let vaga = {};

let vagas = [];

do{

    opcao = prompt("Bem vindo ao Sistema de Vagas\n" +
                    "\nDigite o nº da opção desejada:" +
                    "\n1. Listar vagas disponíveis" +
                    "\n2. Criar nova vaga" +
                    "\n3. Visualizar vaga" +
                    "\n4. Inscrever-se em uma vaga" +
                    "\n5. Excluir vaga" +
                    "\n6. Sair")

    switch (opcao) {
        case '1':
            let confirma = confirm("hj é dia 22?");
            console.log(confirma)
            break;
        case '2':
            alert(criarVaga());
            break;
        case '3':
            
            break;
        case '4':
            
            break;
        case '5':
            
            break;
        case '6':
            alert("Encerrando programa")
            break;
        default:

            break;
    }

}while(opcao != '6')


function criarVaga(){
    vaga.nomeVaga = prompt("Informe o nome da vaga:");
    vaga.descricao = prompt("Faça uma breve descrição da vaga:");
    vaga.dataLimite = prompt("Qual a data limite para inscrição nesta vaga?");

    let confirma = confirm(vaga);
    console.log(confirma)
    if(confirma){
        vagas.push(vaga);
    }

    console.log(vagas)
    alert("inseri na lista")
}

// criar nova vaga
    //nome da vaga
    //descrição da vaga
    //data limite
    //confirmação das infos
    //salvar