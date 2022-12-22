/*
Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:

- área do triângulo: base * altura / 2
- área do retângulo: base * altura
- área do quadrado: lado²
- área do trapézio: (base maior + base menor) * altura / 2
- área do círculo: pi * raio² (considere pi = 3.14)

Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.
*/

//menu
    //opções
        //areas
    //sair


//menu
// let opcao = ""

do{
    opcao = prompt("Escolha a forma geométrica para calcular sua área: " + 
    "\n1. Triângulo" +
    "\n2. Retângulo" + 
    "\n3. Quadrado" + 
    "\n4. Trapézio" + 
    "\n5. Círculo" + 
    "\n6. Sair" 
    )

    switch(opcao){
        case '1':
            alert(areaTriangulo())
            break
        case '2':
            alert(areaRetangulo())
            break
        case '3':
            alert(areaQuadrado())
            break
        case '4':
            alert(areaTrapezio())
            break
        case '5':
            alert(areaCirculo())
            break
        case '6':
            alert("Encerrando programa")
            break
        default:
            alert("Informe uma opção válida")
            break
    }

}while(opcao != '6')

alert("Programa finalizado")



function areaTriangulo(base, altura){
    base = prompt("Informe o valor da base:");
    altura = prompt("Informe o valor da altura")

    return (base * altura) / 2
}

function areaRetangulo(base, altura){
    base = prompt("Informe o valor da base:");
    altura = prompt("Informe o valor da altura")

    return base * altura
}

function areaQuadrado(lado){
    lado = prompt("Informe o valor de um dos lados:")

    return lado * lado
}

function areaTrapezio(bMaior, bMenor, altura){
    bMaior = parseFloat(prompt("Informe o valor da base MAIOR:"));
    bMenor = parseFloat(prompt("Informe o valor da base MENOR:"));
    altura = parseFloat(prompt("Informe o valor da altura:"));

    return (bMaior + bMenor) * altura / 2
}

function areaCirculo(raio, pi = 3.14){
    raio = prompt("Informe o valor do raio:")

    return pi * (raio * raio)
}