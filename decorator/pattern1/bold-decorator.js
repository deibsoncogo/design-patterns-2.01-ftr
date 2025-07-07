const TextDecorator = require("./text-decorator")

class BoldDecorator extends TextDecorator {
  renderizar() {
    return `<b>${super.renderizar()}</b>`
  }
}

module.exports = BoldDecorator
