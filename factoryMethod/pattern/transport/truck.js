const Transport = require("./transport")

class Truck extends Transport {
  deliver() {
    console.log("Entrega realizada por um caminhão")
  }
}

module.exports = Truck
