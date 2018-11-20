var express = require('express')
var router = express.Router()
var views = require('./viewController').Controller

router.get('/', views.home);

module.exports = router
