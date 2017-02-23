var express = require('express');
var router = express.Router();
const db = require('../models/db.js')

/* GET home page. */
router.get('/', (req, res) => {
  db.Post.findAll()
  .then((allPosts) => {
    console.log(allPosts)
    res.render('index', {blogList: allPosts})
  })
})

module.exports = router;
