const Transport = require("./transport")

class Ship extends Transport {
  deliver() {
    console.log("Entrega realizada por um navio")
  }
}

module.exports = Ship
