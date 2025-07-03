const Pizza = require("./pizza-builder")

const margherita = new Pizza()
  .setSize("grande")
  .setCrust("fina")
  .addCheese()
  .addTopping("tomate")
  .addTopping("manjericão")
  .build()

const pepperoni = new Pizza()
  .addTopping("pepperoni")
  .build()

console.log("margherita =>", margherita)
console.log("pepperoni =>", pepperoni)
