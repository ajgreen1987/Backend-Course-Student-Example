
const courseView = (req, res) => {
    const {courseModel} = require('../models/courseModel');
    res.render('course', { coursename: courseModel.number + "-" + courseModel.section + ":" + courseModel.name});
}

module.exports =  {
    courseView
};