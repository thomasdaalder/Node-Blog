var express = require('express');
var router = express.Router();
const db = require('../models/db.js');
var bodyParser = require('body-parser');

//get request register formulier.
router.get('/', function(req, res) {
	res.render('register')
})

//post request formulier naar db.
router.post('/', function(req, res){
	console.log(req.body)
	db.User.create({
		username: req.body.username,
		password: req.body.password
	})
	.then(()=>{
		res.redirect('/');
	})
});


module.exports = router;
