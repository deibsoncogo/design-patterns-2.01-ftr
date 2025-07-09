const { StrategyRota } = require("./strategy-rota")

class CarRota extends StrategyRota {
  calc(origin, destination) {
    console.log(`Calculando rota de carro de ${origin} para ${destination}`)
  }
}

module.exports = { CarRota }
