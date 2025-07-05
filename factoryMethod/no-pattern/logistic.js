class Ship {
  deliver() {
    console.log("Entrega realizada por um navio")
  }
}

class Truck {
  deliver() {
    console.log("Entrega realizada por um caminhão")
  }
}

module.exports = { Ship, Truck }
