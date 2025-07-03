class Truck {
  deliver() {
    console.log("Entrega realizada por um caminhão")
  }
}

class Ship {
  deliver() {
    console.log("Entrega realizada por um navio")
  }
}

let transport, typeDeliver

typeDeliver = "truck"

if (typeDeliver === "truck") {
  transport = new Truck()
} else if (typeDeliver === "ship") {
  transport = new Ship()
}

console.log("transport =>", transport.deliver())
