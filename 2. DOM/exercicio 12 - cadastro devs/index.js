/*
Construa uma página web que permita cadastrar desenvolvedores, suas tecnologias e tempos de experiência. 

- A página deve ter um input para o nome completo do desenvolvedor e um botão para adicionar uma nova tecnologia.
- Ao clicar no botão um evento deve ser disparado criando no formulário uma nova linha de inputs contendo:
    - um campo de texto para o nome da tecnologia
    - um grupo de botões tipo “radio” com opções de tempo de experiência (por exemplo, “0-2 anos”, “3-4 anos” e “5+ anos”)
    - um botão de remover que deve excluir essa linha.
- O formulário também deve ter um botão de cadastrar que salva as informações do dev em um array e limpa o formulário. Para testar o funcionamento você pode utilizar um simples console.log()

Para esse exercício você deve utilizar apenas eventos adicionados via javascript e a página deve funcionar sem acionar um recarregamento.

*/

//funções auxiliares
function createLabel(text, htmlFor) {
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
  }
  
function createInput(id, value, name, type = 'text', placeholder = '') {
const input = document.createElement('input')
input.id = id
input.value = value
input.name = name
input.type = type
input.placeholder = placeholder
return input
}


//variáveis de acesso ao html
const addTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')

//lista para armazenamento
const developers = []

//identidificador para as linhas
let inputRows = 0


//eventos
//inserção de techs
addTechBtn.addEventListener('click', function (ev) {
    //acesso html
    const stackInputs = document.getElementById('stackInputs')
  
    //criação das linhas
    const newRow = document.createElement('li')
    const rowIndex = inputRows
    inputRows++

    newRow.id = 'inputRow-' + rowIndex
    newRow.className = 'inputRow'
  
    //parâmetros para as funções auxiliares
    const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex)
    const techNameInput = createInput('techName-' + rowIndex, null, 'techName')
  
    const expLabel = createLabel('Experiência: ')
    const id1 = 'expRadio-' + rowIndex + '.1'
    const expRadio1 = createInput(id1, '0-2 anos', 'techExp-' + rowIndex, 'radio')
    const expLabel1 = createLabel('0-2 anos', id1)

    const id2 = 'expRadio-' + rowIndex + '.2'
    const expRadio2 = createInput(id2, '3-4 anos', 'techExp-' + rowIndex, 'radio')
    const expLabel2 = createLabel('3-4 anos', id2)

    const id3 = 'expRadio-' + rowIndex + '.3'
    const expRadio3 = createInput(id3, '5+ anos', 'techExp-' + rowIndex, 'radio')
    const expLabel3 = createLabel('5+ anos', id3)
  
    //remoção de linha
    const removeRowBtn = document.createElement('button')
    removeRowBtn.type = 'button'
    removeRowBtn.innerText = 'Remover'

    removeRowBtn.addEventListener('click', function () {
      stackInputs.removeChild(newRow)
    })
  
    //inserção dos elementos ao pai
    newRow.append(
      techNameLabel, techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeRowBtn
    )
  
    stackInputs.appendChild(newRow)
})

//submit forms
form.addEventListener('submit', function (ev) {
    //impedir carregamento da página
    ev.preventDefault()
  
    //acesso ao html
    const fullnameInput = document.getElementById('fullname')
    const inputRows = document.querySelectorAll('.inputRow')
  
    //lista de armazenamento
    let technologies = []

    //inserção de dados à lista
    inputRows.forEach(function (row) {
      // #rowId input[name="techName"]
      const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
      const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value

      technologies.push({ name: techName, exp: techExp })
    })
  
    //inserção de dados na outra lista
    const newDev = { fullname: fullnameInput.value, technologies: technologies }
    developers.push(newDev)

    alert('Dev cadastrado com sucesso!')
    
    //limpar campos e remover linha
    fullnameInput.value = ''
    inputRows.forEach(function (row) {
      row.remove()
    })
  
    //devs cadastrados
    console.log(developers)
})




// function inserirTecnologia(){
//     // alert('teste função inserir tecnologia')

//     //inputs
//     //acessar campo para visualização
//     const div = document.getElementById('technologies')

//     //criar inputs
//     //input tecnologias
//     const tecnologia = document.createElement('div')
//     tecnologia.class = 'tecnologia'


//     //tecnologia
//     const inputTec = document.createElement('input')
//     inputTec.type = 'text'
//     inputTec.name = 'tecnologia'
//     inputTec.placeholder = 'Informe a tecnologia'

//     //radios
//     const radioTec = document.createElement('input')
//     radioTec.type = 'radio'
//     radioTec.name = 'tempoExp'
//     radioTec.value = '0-2 anos'
//     radioTec.id = 'main1'

//     const labelRadioTec = document.createElement('label')
//     labelRadioTec.for = 'main1'
//     labelRadioTec.innerText = '0-2 anos'

  
//     const radioTec2 = document.createElement('input')
//     radioTec2.type = 'radio'
//     radioTec2.name = 'tempoExp'
//     radioTec2.value = '3-4 anos'
//     radioTec2.id = 'main2'

//     const labelRadioTec2 = document.createElement('label')
//     labelRadioTec2.for = 'main2'
//     labelRadioTec2.innerText = '3-4 anos'


//     const radioTec3 = document.createElement('input')
//     radioTec3.type = 'radio'
//     radioTec3.name = 'tempoExp'
//     radioTec3.value = '5+ anos'
//     radioTec3.id = 'main2'

//     const labelRadioTec3 = document.createElement('label')
//     labelRadioTec3.for = 'main2'
//     labelRadioTec3.innerText = '5+ anos'

//     btnRadioTec = document.createElement('button')
//     btnRadioTec.innerText = 'excluir'

//     const espacoTec = document.createElement('br')


//     //inserção no elemento pai
//     div.appendChild(tecnologia)

//     tecnologia.append(inputTec, radioTec, labelRadioTec, radioTec2, labelRadioTec2, radioTec3, labelRadioTec3, btnRadioTec, espacoTec)
// }


// function removertecnologia(){
//     document.getElementById('tecnologia').removeChild(inputTec)
//     document.getElementById('tecnologia').removeChild(radioTec)
//     document.getElementById('tecnologia').removeChild(labelRadioTec)
//     document.getElementById('tecnologia').removeChild(radioTec2)
//     document.getElementById('tecnologia').removeChild(labelRadioTec2)
//     document.getElementById('tecnologia').removeChild(radioTec3)
//     document.getElementById('tecnologia').removeChild(labelRadioTec3)
//     document.getElementById('tecnologia').removeChild(btnRadioTec)
// }


// const btnTec = document.getElementById('btn-technologies')

// btnTec.addEventListener("click", function(evento){
//     // alert('teste evento');

//     evento.preventDefault();

//     inserirTecnologia();
// })