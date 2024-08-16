const media_simples = (...numeros) => {
    const soma = numeros.reduce((accum, num) => accum + num, 0)
    const qtd = numeros.length
    return soma / qtd
}
console.log(`Media: ${media_simples(1,3,4,6)}`)


const media_arit_ponderada = (...entradas) =>{
    const soma = entradas.reduce((accum, {numero, peso}) => accum + (numero * peso),0)
    const soma_pesos = entradas.reduce((accum, entrada) => accum + entrada.peso, 0)
    return soma / soma_pesos
}
console.log(`Media arit ponderada: ${media_arit_ponderada(
    { numero: 9, peso: 3}, 
    { numero: 7, peso: 1 }, 
    { numero: 10, peso: 1 }
    )}`)


const mediana = (...numeros) => {
    const numeros_ordenados = [...numeros].sort((a,b) => a - b)
    console.log(numeros_ordenados)

    //se a lista tiver qtd impar, pegar o nº do meio da lista
    const meio = Math.floor(numeros_ordenados.length / 2)
    if(numeros_ordenados.length % 2 !== 0){
        return numeros_ordenados[meio]
    }else{
        const primeiro_numero = numeros_ordenados[meio - 1]     //pegar ultimo elemento da primeira "divisao"
        console.log(primeiro_numero)

        const segundo_numero = numeros_ordenados[meio] // pegar o primeiro nuemro da segunda "divisao"
        console.log(segundo_numero)
        return media_simples(primeiro_numero, segundo_numero)
    }
}
console.log(`Mediana: ${mediana(2, 5, 99, 4, 42, 7)}`)
console.log(`Mediana: ${mediana(15, 14, 8, 7, 3)}`)


const moda = (...numeros) => {
    // [ [n, qtd], [n, qtd], [n, qtd] ]
    const qtd = numeros.map(numero => [
        numero, numeros.filter(n => numero === n).length
    ])
    console.log(qtd)

    // ordem decrescente
    qtd_ordenada = qtd.sort((a,b) => b[1] - a[1])
    console.log(qtd_ordenada)

    return qtd[0][0]
}
console.log(`Moda: ${moda(1, 1, 99,99,99,99,99,99,99,99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)