var express = require('express');
var router = express.Router();
const db = require('../models/db.js');
var bodyParser = require('body-parser');
const session = require('express-session');


/* GET home page. */
router.get('/', (req, res) => {
  const userSession = req.session.user; //can be null or undefined or contain user
  db.Post.findAll()
  .then((allPosts) => {
    console.log(allPosts)
    res.render('index',
    {blogList: allPosts,
    user: userSession
    })
  })
})

module.exports = router;
