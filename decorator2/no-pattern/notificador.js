class Notifier {
  send(message) {
    console.log(`Enviando mensagem por e-mail: ${message}`)
  }
}

class NotifierSMS extends Notifier {
  send(message) {
    super.send(message)
    console.log(`Enviando mensagem por SMS: ${message}`)
  }
}

class NotifierSlack extends Notifier {
  send(message) {
    super.send(message)
    console.log(`Enviando mensagem por slack: ${message}`)
  }
}

module.exports = { Notifier, NotifierSMS, NotifierSlack }
