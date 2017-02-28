const express = require('express');
const router = express.Router();
const db = require('../models/db.js');
const bodyParser = require('body-parser');

// Render register form
router.get('/', function(req, res) {
	res.render('register')
})

// Create user to database
router.post('/', function(req, res){
	db.User.create({
		username: req.body.username,
		password: req.body.password
	})
	.then( ()=>{
		res.redirect('/');
	})
});

module.exports = router;
