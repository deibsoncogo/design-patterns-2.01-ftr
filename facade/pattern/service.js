class EmailService {
  sendEmail(to, message) {
    console.log(`Enviando o e-mail para ${to}: ${message}`)
  }
}

class SMSService {
  sendSMS(to, message) {
    console.log(`Enviando o SMS para ${to}: ${message}`)
  }
}

class PushService {
  sendPush(to, message) {
    console.log(`Enviando a notificação para ${to}: ${message}`)
  }
}

class NotificationFacade {
  constructor() {
    this.emailService = new EmailService()
    this.smsService = new SMSService()
    this.pushService = new PushService()
  }

  sendNotification(type, to, message) {
    switch (type) {
      case "email":
        this.emailService.sendEmail(to, message)
        break
      case "sms":
        this.smsService.sendSMS(to, message)
        break
      case "push":
        this.pushService.sendPush(to, message)
        break
      default:
        console.log("Tipo de notificação inválido")
    }
  }
}

module.exports = NotificationFacade
