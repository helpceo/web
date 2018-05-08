const express = require('express')
var route = express.Router()

route.get('/', function (req, res) {
	res.sendfile('../src/index.html')
})
route.get('/main', function (req, res) {
	res.sendfile('../src/main/main.html')
})
module.exports = route