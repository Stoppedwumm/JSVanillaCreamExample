const vjsc = require("vanillajscream")
const comp = new vjsc.render.component()

comp.setHtml(`<div id="app">
    ${require("./title").render()}
    ${require("./game/game").render()}
</div>
<script src="/js"></script>`)

module.exports = comp