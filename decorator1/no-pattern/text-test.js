const { TextBold, TextItalic, TextUnderlined } = require("./text");

let text = new TextBold("Hello, Rocket!")
console.log("text =>", text.renderizar())

text = new TextItalic(text.renderizar())
console.log("text =>", text.renderizar())

text = new TextUnderlined(text.renderizar())
console.log("text =>", text.renderizar())
