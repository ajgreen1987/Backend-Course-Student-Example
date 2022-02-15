// course.js - Class route module

var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
  res.render('menu');
})

module.exports = router;
