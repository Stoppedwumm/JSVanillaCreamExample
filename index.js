const e = require("express")
const server = e()
const main = require("./comp/main.js")

server.get("/", (req, res) => {
    res.send(main.render())
})

server.get("/js", (req, res) => {
    res.sendFile(__dirname + "/browserJs/index.js")
})

console.log(main.render())

server.listen(3000)