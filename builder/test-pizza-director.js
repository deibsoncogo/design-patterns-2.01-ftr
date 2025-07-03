const PizzaBuilder = require("./pizza")
const PizzaDirector = require("./pizza-director")

const builder = new PizzaBuilder()
const diretor = new PizzaDirector(builder)

const margherita = diretor.makeMargherita()
const pepperoni = diretor.makePepperoni()

console.log("margherita =>", margherita)
console.log("pepperoni =>", pepperoni)
