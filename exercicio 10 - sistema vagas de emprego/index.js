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

let vagas = [];

function listarVagas(){
    let vagasDisponiveis = vagas.reduce(function(texto, vaga, id){
        texto += id + ". "
        texto += vaga.nomeVaga
        texto += " / " + vaga.candidatos.length + " candidatos\n"
        return texto
    }, "")

    if(vagasDisponiveis){
        alert(vagasDisponiveis)
    } else {
        alert("Sem vagas disponíveis no momento!")
    }
}


function criarVaga(){
    let nomeVaga = prompt("Informe o nome da vaga:");
    let descricao = prompt("Faça uma breve descrição da vaga:");
    let dataLimite = prompt("Qual a data limite para inscrição nesta vaga? (DD/MM/AA)");

    let confirma = confirm("Confirme os dados\n" +
                            "\nVaga: " + nomeVaga +
                            "\nDescrição: " + descricao +
                            "\nPrazo inscrição: " + dataLimite);
    // console.log(confirma)

    if(confirma){
        let vaga = {
            nomeVaga,
            descricao,
            dataLimite, 
            candidatos: []
        }

        vagas.push(vaga);

        alert("Vaga inserida")
    }
    // console.log(vagas)
}


function visualizarVaga(){
    let id = prompt("Informe o ID da vaga:")

    if(id >= vagas.length || id < 0){
        alert("ID não encontrado")
        return          //função se encerra no return
    }

    let vaga = vagas[id]

    let nomesCandidatos = vaga.candidatos.reduce(function(nomes, candidato){
        return nomes + "\n - " + candidato
    }, "")

    alert("Dados da vaga selecionada\n" + 
            "\nId: " + id +
            "\nVaga: " + vaga.nomeVaga +
            "\nDescrição: " + vaga.descricao +
            "\nPrazo: " + vaga.dataLimite +
            "\nQtd. Inscritos: " + vaga.candidatos.length +
            "\nCandidatos: " + nomesCandidatos)
}


function inscreverCandidato(){
    let candidato = prompt("Nome do candidato: ")
    let id = prompt("Informe o ID da vaga desejada:")
    let vaga = vagas[id]

    let confirma = confirm("Confirme os dados\n" +
                            "\nId: " + id +
                            "\nVaga: " + vaga.nomeVaga +
                            "\nDescrição: " + vaga.descricao +
                            "\nPrazo inscrição: " + vaga.dataLimite);

    if(confirma){
        vaga.candidatos.push(candidato)

        alert("Candidato(a) " + candidato + " inscrito(a)")
    }
}


function excluirVaga(){
    let id = prompt("Qual o ID da vaga que deseja excluir?")
    let vaga = vagas[id]

    let confirma = confirm("Confirme os dados\n" +
                            "\nId: " + id +
                            "\nVaga: " + vaga.nomeVaga +
                            "\nDescrição: " + vaga.descricao +
                            "\nPrazo inscrição: " + vaga.dataLimite);

    if(confirma){
        vagas.splice(id, 1)

        alert("Vaga excluída")
    }
}


let menu = "Bem vindo ao Sistema de Vagas\n" +
            "\nDigite o nº da opção desejada:" +
            "\n1. Vagas Disponíveis" +
            "\n2. Cadastrar Vaga" +
            "\n3. Detalhes da Vaga" +
            "\n4. Inscrever na Vaga" +
            "\n5. Excluir Vaga" +
            "\n6. Sair";

do{

    opcao = prompt(menu)

    switch (opcao) {
        case '1':
            listarVagas()
            break;
        case '2':
            criarVaga()
            break;
        case '3':
            visualizarVaga()
            break;
        case '4':
            inscreverCandidato()
            break;
        case '5':
            excluirVaga()
            break;
        case '6':
            alert("Encerrando programa")
            break;
        default:
            alert("Informe uma opção válida")
            break;
    }

}while(opcao != '6')