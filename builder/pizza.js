class Pizza {
  constructor() {
    this.size = "média"
    this.crust = "tradicional"
    this.cheese = false
    this.toppings = []
  }

  setSize(size) {
    this.size = size
    return this
  }

  setCrust(crust) {
    this.crust = crust
    return this
  }

  addCheese() {
    this.cheese = true
    return this
  }

  addTopping(topping) {
    this.toppings.push(topping)
    return this
  }

  build() {
    return new Pizza(
      this.size, this.crust, this.cheese, this.toppings
    )
  }
}

module.exports = Pizza
