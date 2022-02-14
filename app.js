// Load Express module
const express = require('express');

// Create an Express object
const app = express();
const port = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// Setup the Routes
var course = require("./course.js");
var student = require("./student.js")

app.get('/', function(req, res) {
    res.send("This is the App Level Route")
  });

app.use('/course', course);
app.use('/student', student);


// list for request on port 3000
app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});
