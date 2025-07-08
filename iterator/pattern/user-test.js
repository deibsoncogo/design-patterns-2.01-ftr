const { UserCollection } = require("./user-collection")

const users = new UserCollection()

users.add({ name: "Carlos", age: 21 })
users.add({ name: "Ana", age: 23 })
users.add({ name: "Beto", age: 25 })

const userIterator = users.createIterator()

console.log("Iterando os usuário:")

while (userIterator.hasNext()) {
  console.log("userIterator.nest() =>", userIterator.next())
}

console.log("Iterando os usuário ao contrário:")

while (userIterator.hasPrevious()) {
  console.log("userIterator.previous() =>", userIterator.previous())
}
