class UserCollection {
  constructor() {
    this.users = []
  }

  add(user) {
    this.users.push(user)
  }

  getAll() {
    for (let i = 0; i < this.users.length; i++) {
      console.log(`this.users[${i}] =>`, this.users[i])
    }
  }
}

module.exports = { UserCollection }
