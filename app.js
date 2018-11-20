var express = require('express')
var expressVue = require("express-vue")
var path = require('path')
var app = express()
var index = require('./controllers/index')

const vueOpts = {
  rootPath: path.join(__dirname, './views')
}
const expressVueMiddleware = expressVue.init(vueOpts)
app.use(expressVueMiddleware)

app.use('/', index)

app.listen(3000, function () {
  console.log('Express app running on http://localhost:3000')
})
