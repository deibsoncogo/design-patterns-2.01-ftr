const { NotifierSMS } = require("./notificador")

const notifier = new NotifierSMS()

notifier.send("Sistema em manutenção")
