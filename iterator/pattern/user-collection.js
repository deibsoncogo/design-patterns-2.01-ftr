const { Iterator } = require("./iterator")

class UserCollection {
  constructor() {
    this.users = []
  }

  add(user) {
    this.users.push(user)
  }

  createIterator() {
    return new Iterator(this.users)
  }
}

module.exports = { UserCollection }
