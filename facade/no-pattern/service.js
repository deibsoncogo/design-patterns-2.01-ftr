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

module.exports = { EmailService, SMSService, PushService }
