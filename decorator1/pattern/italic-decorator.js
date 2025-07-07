const TextDecorator = require("./text-decorator")

class ItalicDecorator extends TextDecorator {
  renderizar() {
    return `<i>${super.renderizar()}</i>`
  }
}

module.exports = ItalicDecorator
