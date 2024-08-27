const dayjs = require('dayjs')



function aniversario(data_nascimento){

    //idade
    const hoje = dayjs()
    const nascimento = dayjs(data_nascimento)
    const idade = hoje.diff(nascimento, 'year')
    console.log(`Idade: ${idade}`)

    // prox. niver
    const prox_niver = nascimento.add(idade + 1, 'year')
    console.log(`Próximo aniversário: ${prox_niver.format('DD/MM/YYYY')}`)

    //dias para prox niver
    const falta = prox_niver.diff(hoje, 'days')
    console.log(`Faltam ${falta} dias!`)
}

aniversario('1996-09-10')