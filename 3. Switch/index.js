let lyDistance = prompt("Qual a distância em anos-luz gostaria de calcular?")    //ly: light year
let conversion = prompt("Escolha a unidade de medida para conversão)\n1. Parsec (pc)\n2. Unidade Astronômica (AU)\n3. Quilômetros (km)")

switch(conversion){
    case 1: 
        newValue = (lyDistance * 0,306601 + "pc")
        alert("Distância em anos-luz: " + lyDistance + "\n Conversão desejada: " + newValue)
        break
    default:
        alert("Erro de cálculo")
        break
}