// course.js - Class route module

var express = require('express');
var router = express.Router();

const {courseView} = require('../controllers/courseController');

// Home page route.
router.get('/', courseView)

router.get('/about', function (req, res) {
  res.send("Course home page");
})

module.exports = router;
