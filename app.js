// Load Express module
const express = require('express');

// Create an Express object
const app = express();
const port = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// Root route
// Comment lines 13 - 15 to use the menu route
//app.get('/', function(req, res) {
//    res.send("This is the App Level Route")
//});

// Setup the Routes
// Optional Route - Uncomment line 18 to use it
var menu = require("./routes/menu.js")
var course = require("./routes/course.js");
var student = require("./routes/student.js")


// Optional Route - Uncomment line 25 to use it
app.use('/', menu)
app.use('/course', course);
app.use('/student', student);


// list for request on port 3000
app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});
