let lyDistance = prompt("Qual a distância em anos-luz gostaria de calcular?")    //ly: light year

let conversion = prompt("Escolha a unidade de medida para conversão)\n1. Parsec (pc)\n2. Unidade Astronômica (AU)\n3. Quilômetros (km)\n\n (Digite o nº da opção desejada)")

let chosenUnity
let convertedDistance

switch(conversion){
    case "1": 
        chosenUnity = "pc"
        convertedDistance = lyDistance * 0.30661
        break
    case "2": 
        chosenUnity = "UA"
        convertedDistance = lyDistance * 63241.1
        break
    case "3": 
        chosenUnity = "km"
        convertedDistance = lyDistance * 9.5 * Math.pow(10, 12)     //math.pow = faz a potenciação dos nºs, no caso 10¹²
        break
    default:
        chosenUnity = "Unidade não identificada"
        convertedDistance = "Convers]ao fora do escopo"
}

alert("Distância em Anos-Luz: " + lyDistance + "\n" + chosenUnity + ": " + convertedDistance)