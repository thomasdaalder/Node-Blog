const express = require('express');
const router = express.Router();
const db = require('../models/db.js');
const bodyParser = require('body-parser');
const session = require('express-session');

// router.post
router.post('/', bodyParser.urlencoded({extended: true}), function (req, res) {
    if(req.body.username.length === 0) {
        res.redirect('/?message=' + encodeURIComponent("Please fill out in your username."));
        return;
    }

    if(req.body.password.length === 0) {
       res.redirect('/?message=' + encodeURIComponent("Please fill out your password."));
       return;
   }

   db.User.findOne({
    where: {
        username: req.body.username
    }
  }).then (function (user) {
    if (user !== null && req.body.password === user.password) {
      req.session.user = user;
      console.log('we console logging user')
      console.log(user)
      res.redirect('/');
    }
    else {
            res.redirect('/?message=' + encodeURIComponent("Invalid email or password."));
        }
    }, function (error) {
        res.redirect('/?message=' + encodeURIComponent("Invalid email or password."));
    });
  })

module.exports = router;
