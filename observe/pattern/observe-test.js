const { Client } = require("./concrete/observe-concrete")
const { Store } = require("./concrete/subject-concrete")

const store = new Store()

const clientCarlos = new Client("Carlos")
const clientAna = new Client("Ana")
const clientBeto = new Client("Beto")

store.addObserver(clientCarlos)
store.addObserver(clientAna)
store.addObserver(clientBeto)

store.removeObserver(clientAna)

store.receiverNewProduct()
