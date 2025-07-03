const Pizza = require("./pizza")

const margherita = new Pizza("grande", "fine", true, ["tomate", "manjericão"])
const pepperoni = new Pizza("média", "tradicional", false, ["pepperoni"])

console.log("margherita =>", margherita)
console.log("pepperoni =>", pepperoni)
