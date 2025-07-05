const Pizza = require("./pizza-builder")

const napolitana = new Pizza()
  .setSize("grande")
  .setCrust("fina")
  .addCheese()
  .addTopping("tomate")
  .addTopping("manjericão")
  .build()

const pepperoni = new Pizza()
  .addTopping("pepperoni")
  .build()

console.log("napolitana =>", napolitana)
console.log("pepperoni =>", pepperoni)
