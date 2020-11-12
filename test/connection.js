// creating an instance of mongoose(a middlesware that creates easy connection of mongodb database.)
const mongoose = require('mongoose');

// overriding deprication with  ES6 promises library
mongoose.Promise = global.Promise;

// connect to the database before running any test by using the promise hook "before()"
before(function (done) {
    // connect or create a mongodb database
    mongoose.connect('mongodb://localhost/studentdb');

    // a middleware that opens the connection once after the database is created.
    mongoose.connection.once('open', function () {
        console.log('Connected to studentdb database');
        done();
    }).on('error', function () {
        console.log('Connection error:', error);
    });
});

// empty/drop the collection/students before a test is run by using the ES6 promise hook "beforeEach()"
beforeEach(function (done) {
    mongoose.connection.collections.students.drop(function () {
        done();
    });
})




