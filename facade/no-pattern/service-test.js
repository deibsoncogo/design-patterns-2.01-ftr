const { EmailService, SMSService, PushService } = require("./service")

const emailService = new EmailService()
const smsService = new SMSService()
const pushService = new PushService()

emailService.sendEmail("user@email.com.br", "Seu pedido foi enviado")
smsService.sendSMS("+5511987654321", "Seu pedido foi enviado")
pushService.sendPush("user", "Seu pedido foi enviado")
