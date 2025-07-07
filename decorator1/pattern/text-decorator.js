const Text = require("./text")

class TextDecorator extends Text {
  constructor(text) {
    super()
    this.text = text
  }

  renderizar() {
    return this.text.renderizar()
  }
}

module.exports = TextDecorator
