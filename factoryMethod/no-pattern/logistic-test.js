const { Truck, Ship } = require("./logistic")

let transport, typeDeliver

typeDeliver = "truck"

if (typeDeliver === "truck") {
  transport = new Truck()
} else if (typeDeliver === "ship") {
  transport = new Ship()
}

console.log(transport.deliver())
