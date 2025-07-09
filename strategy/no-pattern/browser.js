class Browser {
  calcRota(type, origin, destination) {
    if (type === "car") {
      console.log(`Calculando rota de carro de ${origin} para ${destination}`)
    } else if (type === "walk") {
      console.log(`Calculando rota da caminhada de ${origin} para ${destination}`)
    }else if (type === "transportPublic") {
      console.log(`Calculando rota do transporte público de ${origin} para ${destination}`)
    } else {
      console.log("Tipo de rota é desconhecido")
    }
  }
}

module.exports = { Browser }
