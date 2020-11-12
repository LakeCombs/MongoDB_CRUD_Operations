// importing mongoose(a middlesware that creates easy connection of mongodb database.)
const mongoose = require('mongoose');

// creating an instance of mongoose schema
const Schema = mongoose.Schema;

// create new Schema object
const studentSchema = new Schema({
    firstname: String,
    lastname: String,
    age: Number
});

// create an instance of mongoose model
const studentModel = mongoose.model('student', studentSchema);

// export the model for external consumption
module.exports = studentModel;


