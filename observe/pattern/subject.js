class Subject {
  constructor() {
    this.observers = []
  }

  addObserver(observe) {
    throw new Error("Método 'addObserver' precisa ser implementado")
  }

  removeObserver(observe) {
    throw new Error("Método 'removeObserver' precisa ser implementado")
  }

  notifyObserver() {
    throw new Error("Método 'notifyObserver' precisa ser implementado")
  }
}

module.exports = { Subject }
