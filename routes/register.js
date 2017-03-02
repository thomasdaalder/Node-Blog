const express = require('express');
const router = express.Router();
const db = require('../models/db.js');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

// Render register form
router.get('/', function(req, res) {
	res.render('register')
})

// Create user to database
router.post('/', function(req, res){
	var password = req.body.password
	bcrypt.hash(req.body.password, 8, (err, hash)=>{
	db.User.create({
		username: req.body.username,
		password: hash
	})
	.then( ()=>{
		res.redirect('/');
	})
	})
});
module.exports = router;
