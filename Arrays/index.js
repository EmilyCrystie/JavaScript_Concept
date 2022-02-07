//array bidimensional, de dados "nave", "qtd de tripulantes" e "engate em processo"
const hitchedSpaceships = [
  ["Fenix", 8, true],
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 3, true],
  ["Darwth", 15, false]
];

// filtrar nome das naves com + de 9 tripulantes
let with9trip = hitchedSpaceships.filter(spaceship => {                      //variável = array.função(parâmetro de arrowfunction{função})
    return spaceship[1] > 9
}).map(spaceship => {
    return spaceship[0]
})

// nº plataforma de nave com engate pendente
let platPendHit = hitchedSpaceships.findIndex(spaceship => {
    return spaceship[2] == false
})

// colocar em caixa alta nome das naves
let upcasedSpaceships = hitchedSpaceships.map(spaceship => {                //map: alterar cada elemento; toUpperCase: deixar em caixa alta
    return spaceship[0].toUpperCase()
})

let message = "Espaçonaves com mais de 9 tripulantes: " + with9trip.join(", ")
message += "\nPlataforma com processo de engate: " + (platPendHit + 1)
message += "\nEspaçonaves destacadas: " + upcasedSpaceships.join(", ")

alert(message) 