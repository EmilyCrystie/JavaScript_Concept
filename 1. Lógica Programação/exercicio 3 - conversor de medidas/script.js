/*
Escreva um programa em javascript que funcione como um conversos de medidas. O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:

- milímetro (mm)
- centímetro (cm)
- decímetro (dm)
- decâmetro (dam)
- hectômetro (hm)
- quilômetro (km)

O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.

O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso)
*/

let metros = parseFloat(prompt("Informe um valor em metros: "));

const unidMedida = prompt("Digite a alternativa para qual unidade de medida gostaria de converter o(s) " + metros + " metros" +
"\n\na) milímetro (mm)" 
+ "\nb) centímetro (cm)"
+ "\nc) decímetro (dm)"
+ "\nd) decâmetro (dam)"
+ "\ne) hectômetro (hm)"
+ "\nf) quilômetro (km)")

switch (unidMedida){
    case "a":
        milimetros = metros * 1000
        alert(metros + " m = " + milimetros + " mm")
        break
    case "b":
        centimetros = metros * 100
        alert(metros + " m = " + centimetros + " cm")
        break
    case "c":
        decimetros = metros * 10
        alert(metros + " m = " + decimetros + " dm")
        break
    case "d":
        decametros = parseFloat(metros * 0.1)
        alert(metros + " m = " + decametros + " dam")
        break
    case "e":
        ectometros = parseFloat(metros * 0.01)
        alert(metros + " m = " + ectometros + " hm")
        break
    case "f":
        quilometros = parseFloat(metros * 0.001)
        alert(metros + " m = " + quilometros + " km")
        break
    default:
        alert("Opção inválida")
}