var express = require('express');
var router = express.Router();
const db = require('../models/db.js');
var bodyParser = require('body-parser');
const session = require('express-session');

router.get('/:blogID', function(req, res) {
  const userSession = req.session.user;
  db.Post.findOne({
   where: {
       id: req.params.blogID
   } 
  })
  .then(function (Post) {
    res.render('grabBlog', {blogPost: Post})
  })
})

module.exports = router;
