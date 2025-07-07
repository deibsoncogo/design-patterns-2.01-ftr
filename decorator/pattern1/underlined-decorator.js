const TextDecorator = require("./text-decorator")

class UnderlinedDecorator extends TextDecorator {
  renderizar() {
    return `<u>${super.renderizar()}</u>`
  }
}

module.exports = UnderlinedDecorator
