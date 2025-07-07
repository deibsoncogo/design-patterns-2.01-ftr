const NotifierDecorator = require("./notificador-decorator")

class SMSDecorator extends NotifierDecorator {
  send(message) {
    super.send(message)
    console.log(`Enviando mensagem por SMS: ${message}`)
  }
}

module.exports = SMSDecorator
