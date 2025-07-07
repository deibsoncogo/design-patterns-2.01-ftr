const NotificationFacade = require("./service")

const notification = new NotificationFacade()

notification.sendNotification("email", "user@email.com.br", "Seu pedido foi enviado")
notification.sendNotification("sms", "+5511987654321", "Seu pedido foi enviado")
notification.sendNotification("push", "userTest", "Seu pedido foi enviado")
