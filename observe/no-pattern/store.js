class Store {
  constructor() {
    this.productAvailable = false
  }

  notifyClient() {
    console.log("Notificando clientes sobre a chegada de produtos")
    console.log("Cliente A: Produto disponível")
    console.log("Cliente B: Produto disponível")
  }

  receiveNewProduct() {
    console.log("O produto chegou à loja")

    this.productAvailable = true
    this.notifyClient()
  }
}

module.exports = { Store }
