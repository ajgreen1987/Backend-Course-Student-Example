// student.js - Student route module

var express = require("express");
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
  res.send("Student home page");
})

// About page route.
router.get('/profile', function (req, res) {
  res.render('student')
})

module.exports = router;
