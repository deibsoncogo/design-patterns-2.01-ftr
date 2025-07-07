const Notifier = require("./notificador")

class NotifierDecorator extends Notifier {
  constructor(notifier) {
    super()
    this.notifier = notifier
  }
}

module.exports = NotifierDecorator
