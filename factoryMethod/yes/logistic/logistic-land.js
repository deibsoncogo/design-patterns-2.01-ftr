const Truck = require("../transport/truck")
const Logistic = require("./logistic")

class LogisticLand extends Logistic {
  createTransport() {
    return new Truck()
  }
}

module.exports = LogisticLand
