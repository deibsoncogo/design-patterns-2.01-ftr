const LogisticLand = require("./logistic/logistic-land")
const LogisticSea = require("./logistic/logistic-sea")

let transport
const typeLogistic = "land"

if (typeLogistic === "land") {
  transport = new LogisticLand()
} else if (typeLogistic === "sea") {
  transport = new LogisticSea()
}

transport.deliverCargo()
