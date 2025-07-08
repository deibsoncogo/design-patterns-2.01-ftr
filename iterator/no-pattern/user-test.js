const { UserCollection } = require("./user")

const user = new UserCollection()

user.add({ name: "Carlos", age: 21 })
user.add({ name: "Ana", age: 23 })
user.add({ name: "Beto", age: 25 })

user.getAll()
