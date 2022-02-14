// course.js - Class route module

var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
  res.send("Course home page");
})

// About page route.
router.get('/about', function (req, res) {
  res.render('course');
})

module.exports = router;
