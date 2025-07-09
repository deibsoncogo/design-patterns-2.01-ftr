class Browser {
  setStrategy(strategy) {
    this.strategy = strategy
  }

  calcRota(origin, destination) {
    if (!this.strategy) {
      console.log("Nenhuma estratégia foi definida!")
      return
    }

    this.strategy.calc(origin, destination)
  }
}

module.exports = { Browser }
