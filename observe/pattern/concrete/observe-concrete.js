const { Observe } = require("../observe")

class Client extends Observe {
  constructor(name) {
    super()
    this.name = name
  }

  update() {
    console.log(`Cliente ${this.name}: Produto disponível`)
  }
}

module.exports = { Client }
