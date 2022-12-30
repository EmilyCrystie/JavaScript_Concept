/*
Construa uma página web que permita montar a escalação de um time de jogadores. Nele deverá ser possível:

- Escalar um jogador
    - Informar a posição do jogador a ser escalado para o time.
    - Informar o nome do jogador.
    - Informar o número da camisa do jogador.
    - Ter um botão “Escalar” que pergunta ao usuário se ele deseja confirmar a escalação daquele jogador e então insere as informações em uma lista na página.
    - Após o jogador ser escalado os campos de texto devem ser limpos.
- Remover um jogador
    - Informar o número da camisa do jogador.
    - Ter um botão “Remover” que pergunta ao usuário se ele deseja confirmar a remoção daquele jogador e então exclui ele da lista na página.
    - Após o jogador ser removido o campo de texto deve ser limpo.

Dica: lembrando que é possível acessar o texto de um input através da propriedade value.
*/

function escalar(){
    //pegar infos
    const posicao = document.getElementById('position').value
    const nome = document.getElementById('name').value
    const camisa = document.getElementById('shirt').value

    const dados = posicao + ": " + nome + ' (' + camisa + ')'

    const confirma = confirm("Confirme os dados do jogador \n\n" + dados)


    //escalar
    if (confirma){
        //adicionar dados do jogador
        const ul = document.getElementById('jogadores')

        const jogador = document.createElement('li')
        jogador.id = 'number-' + camisa 
        jogador.classname = 'jogador'
        jogador.innerText = dados

        ul.appendChild(jogador)

        //limpar inputs
        document.getElementById('position').value='';
        document.getElementById('name').value='';
        document.getElementById('shirt').value='';

    } else {
        alert('Jogador não escalado')
    }
}

 
function remover(){
    //jogador a ser removido
    const camisa = document.getElementById('shirt').value

    //buscar jogador nos escalados
    const remover_jogador = document.getElementById('number-' + camisa)

    // confirmar remoção
    const confirma = confirm("Deseja remover " + remover_jogador.innerText + "?")

    if(confirma){
        

        //excluir
        document.getElementById('jogadores').removeChild(remover_jogador)

        //limpar input
        document.getElementById('shirt').value=''

    } else { 
        alert("Jogador NÃO removido")
    }
}