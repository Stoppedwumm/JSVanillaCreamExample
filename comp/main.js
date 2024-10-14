const vjsc = require("vanillajscream")
const bootstrap = require("./bootstrap")
const page = new vjsc.render.webpage()
const app = require("./app")

page.setBody(app.render())
page.setHead(bootstrap.render())

module.exports = page