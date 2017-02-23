var express = require('express');
var router = express.Router();
const db = require('../models/db.js');
var bodyParser = require('body-parser');


/* GET home page. */
router.get('/', (req, res) => {
  db.Post.findAll()
  .then((allPosts) => {
    console.log(allPosts)
    res.render('index', {blogList: allPosts})
  })
})

module.exports = router;
