const { Subject } = require("../subject")

class Store extends Subject {
  constructor() {
    super()
  }

  addObserver(observe) {
    this.observers.push(observe)
  }

  removeObserver(observe) {
    this.observers = this.observers.filter((sub) => sub !==observe)
  }

  notifyObserver() {
    console.log("Notificando assinantes...")
    this.observers.forEach((observe) => observe.update())
  }

  receiverNewProduct() {
    console.log("Novo produto chegou à loja")
    this.notifyObserver()
  }
}

module.exports = { Store }
