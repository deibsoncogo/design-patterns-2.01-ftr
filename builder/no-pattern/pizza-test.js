const Pizza = require("./pizza")

const napolitana = new Pizza("grande", "fine", true, ["tomate", "manjericão"])
const pepperoni = new Pizza("média", "tradicional", false, ["pepperoni"])

console.log("napolitana =>", napolitana)
console.log("pepperoni =>", pepperoni)
