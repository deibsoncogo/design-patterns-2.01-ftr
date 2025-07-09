const { Browser } = require("./browser")

const browser = new Browser()

browser.calcRota("walk", "Universidade", "Padaria")
browser.calcRota("car", "Padaria", "Aeroporto")
