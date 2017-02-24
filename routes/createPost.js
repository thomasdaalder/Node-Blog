var express = require('express');
var router = express.Router();
const db = require('../models/db.js');
var bodyParser = require('body-parser');
const session = require('express-session');

router.get('/', function (req, res) {
  const userSession = req.session.user;
  res.render('createPost', {user: userSession});
})

router.post('/', function (req, res) {
  db.Post.create({
    title: req.body.titleInput,
    body: req.body.messageInput,
    date: req.body.dateInput
  })
  .then(function() {
    res.redirect('/');
  });
})

module.exports = router;
