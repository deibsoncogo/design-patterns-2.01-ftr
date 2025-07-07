const Text = require("./text")
const BoldDecorator = require("./bold-decorator")
const ItalicDecorator = require("./italic-decorator")
const UnderlinedDecorator = require("./underlined-decorator")

let text = new Text("Hello, Rocket")

text = new BoldDecorator(text)
console.log("text =>", text.renderizar())

text = new ItalicDecorator(text)
console.log("text =>", text.renderizar())

text = new UnderlinedDecorator(text)
console.log("text =>", text.renderizar())
