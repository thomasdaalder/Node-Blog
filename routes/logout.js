var express = require('express');
var router = express.Router();
const db = require('../models/db.js');
var bodyParser = require('body-parser');
const session = require('express-session');

router.get('/', function (req, res) {
  req.session.destroy(function (error) {
    if(error) {
        throw error;
    }
      res.redirect( '/?message=' + encodeURIComponent("Succesfully logged out.") );
  })
})

module.exports = router;
