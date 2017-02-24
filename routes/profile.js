var express = require('express');
var router = express.Router();
const db = require('../models/db.js');
var bodyParser = require('body-parser');

router.get('/', function(req, res) {
	res.send('hello')
})

module.exports = router;
