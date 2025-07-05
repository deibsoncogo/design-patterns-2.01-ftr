const PizzaBuilder = require("./pizza-builder")
const PizzaDirector = require("./pizza-director")

const builder = new PizzaBuilder()
const diretor = new PizzaDirector(builder)

const napolitana = diretor.makeNapolitana()
const pepperoni = diretor.makePepperoni()

console.log("napolitana =>", napolitana)
console.log("pepperoni =>", pepperoni)
