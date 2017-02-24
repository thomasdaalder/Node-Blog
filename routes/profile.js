var express = require('express');
var router = express.Router();
const db = require('../models/db.js');
var bodyParser = require('body-parser');
const session = require('express-session');

router.get('/', function(req, res) {
	const userSession = req.session.user;
	res.render('profile', {user: userSession})
})

module.exports = router;
