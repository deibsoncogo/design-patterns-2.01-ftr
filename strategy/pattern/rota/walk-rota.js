const { StrategyRota } = require("./strategy-rota")

class WalkRota extends StrategyRota {
  calc(origin, destination) {
    console.log(`Calculando rota da caminhada de ${origin} para ${destination}`)
  }
}

module.exports = { WalkRota }
