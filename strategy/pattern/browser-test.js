const { Browser } = require("./browser")
const { CarRota } = require("./rota/car-rota")
const { TransportPublicRota } = require("./rota/transport-public-rota")

const browser = new Browser()

browser.setStrategy(new CarRota())
browser.calcRota("Casa", "Padaria")

browser.setStrategy(new TransportPublicRota())
browser.calcRota("Casa", "Aeroporto")
