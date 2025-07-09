const { StrategyRota } = require("./strategy-rota")

class TransportPublicRota extends StrategyRota {
  calc(origin, destination) {
    console.log(`Calculando rota do transporte público de ${origin} para ${destination}`)
  }
}

module.exports = { TransportPublicRota }
