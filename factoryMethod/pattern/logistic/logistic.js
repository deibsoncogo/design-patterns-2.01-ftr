class Logistic {
  createTransport() {
    throw new Error("Método 'createTransport' precisa ser implementado")
  }

  deliverCargo() {
    const transport = this.createTransport()
    transport.deliver()
  }
}

module.exports = Logistic
