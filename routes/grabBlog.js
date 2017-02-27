var express = require('express');
var router = express.Router();
const db = require('../models/db.js');
var bodyParser = require('body-parser');
const session = require('express-session');

router.get('/:blogID', function(req, res) {
  const userSession = req.session.user;
  console.log('AAAAAA req.params.blogID')
  console.log(req.params.blogID)
  db.Post.findOne({
     where: {
         id: req.params.blogID
     },
     include: [{ model: db.Comment
     }]
  })
  .then(function (postABlog) {
    console.log('this is the megagdkfjskfjkfj POST')
    console.log(postABlog)
    res.render('grabBlog', {
      blogPost: postABlog,
  	  user: userSession,
      paramsID: req.params.blogID
    })
  })
})

router.post('/:blogId', (req, res) => {
  const userSession = req.session.user;
  db.Post.findOne({
    where: {
      id: req.params.blogId
    }
  })
  .then(function (post) {
    post.createComment({
      username: req.body.username,
      body: req.body.comment
    })
  })
  .then(function() {
    res.redirect('/blog/' + req.params.blogId);
  })
})

module.exports = router;
