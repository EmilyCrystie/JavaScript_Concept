/*
Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

- Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
- O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
- O menu deve ter a opção de salvar um imóvel.
- Para salvar um novo imóvel o programa deve pedir as seguintes informações:
    - Nome do proprietário.
    - Quantidade de quartos.
    - Quantidade de banheiros.
    - Se possui garagem.
- O menu também deve ter a opção de mostrar todos os imóveis salvos.
*/

//menu
    //qtd de imóveis cadastrados
    //opções
        //novo imóvel
            //nome prop.
            //qtd quartos
            //qtd banheiros
            //garagem: sim/não
        //mostruário
        //sair

let mostruario = []

do{
    opcao = prompt("Qtd. de imóveis cadastrados: " + mostruario.length + 
    "\n\nDigite a opção desejada: " +
    "\n1. Novo Imóvel" + 
    "\n2. Mostruário" + 
    "\n3. Sair")

    switch (opcao){
        case "1":
            let imovel = {}

            imovel.proprietario = prompt("Informe o nome do proprietário: ")
            imovel.qtd_quarto = prompt("Quantos quartos esse imóvel possui?")
            imovel.qtd_banheiro = prompt("E quantos banheiros?")
            imovel.garagem = prompt("Este imóvel possui garagem? (sim/não)")

            let cadastro =
            "\n"+ "Proprietário: " + imovel.proprietario + "\nQuartos: " + imovel.qtd_quarto + 
            "\nBanheiros: " + imovel.qtd_banheiro + 
            "\nGaragem: " + imovel.garagem

            mostruario.push(cadastro)
            break;
        case "2":
            alert(mostruario)
            break;
        case "3":
            alert("Encerrar programa")
            break;
        default:
            alert("Informe uma opção válida")
    }
} while(opcao != "3")

alert("Encerrando programa")