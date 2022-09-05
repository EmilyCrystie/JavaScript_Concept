let departureDateEntry = prompt("Digite a data de partida (formato DD/MM/YYYY)")

let departureDate = moment(departureDateEntry, "DD/MM/YYYY")       //moment convertendo entrada de texto em data

let today = moment()

let dateDiff = today - departureDate           //diff = difference

let chosenOption = prompt("Escolha como gostaria de exibir o tempo de partida \n1- Segundos\n2- Minutos\n3- Horas\n4- Dias\n5- Anos")

if(chosenOption == 1){
    let secondsOfDeparture = Math.round(dateDiff / 1000)              //biblioteca Math com recurso .round arredonda pra cima ou pra baixo os valores
    alert("Tempo de vôo: " + secondsOfDeparture + " segundos")
} else if(chosenOption == 2){
    let minutesOfDeparture = Math.round(dateDiff / 1000 / 60)         // dividido em segundos e após em minutos
    alert("Tempo de vôo: " + minutesOfDeparture + " minutos")
} else if(chosenOption == 3){
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 60 / 60)      // dividido em segundos e após em minutos e após em horas
    alert("Tempo de vôo: " + hoursOfDeparture + " horas")
} else if(chosenOption == 4){
    let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24)     // dividido em segundos e após em horas e após em dias
    alert("Tempo de vôo: " + daysOfDeparture + " dias")
} else if(chosenOption == 5){
    let yearsOfDeparture = Math.round(dateDiff / 1000 / 3600 / 8760)     // dividido em segundos e após em horas e após em horas por ano
    alert("Tempo de vôo: " + yearsOfDeparture + " anos")
} else {
    alert("Opção inválida")
}