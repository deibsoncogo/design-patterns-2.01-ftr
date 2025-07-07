const NotifierDecorator = require("./notificador-decorator")
const NotifierSMS = require("./sms-decorator")

const notifierBase = new NotifierDecorator()
const notifierSMS = new NotifierSMS(notifierBase)

notifierBase.send("Sistema em manutenção internamente")
notifierSMS.send("Sistema em manutenção geral")
