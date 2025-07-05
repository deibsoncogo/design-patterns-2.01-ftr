const Ship = require("../transport/ship")
const Logistic = require("./logistic")

class LogisticSea extends Logistic {
  createTransport() {
    return new Ship()
  }
}

module.exports = LogisticSea
