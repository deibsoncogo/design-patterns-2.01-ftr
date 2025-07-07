const NotifierDecorator = require("./notificador-decorator")

class SlackDecorator extends NotifierDecorator {
  send(message) {
    super.send(message)
    console.log(`Enviando mensagem por slack: ${message}`)
  }
}

module.exports = SlackDecorator
