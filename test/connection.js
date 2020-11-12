// importing mongoose(a middlesware that creates easy connection of mongodb database.)
const mongoose = require('mongoose');

// overriding odeprication with  ES6 promises library
mongoose.Promise = global.Promise;

// connect to the database before running any test by using the promise hook "before()"
before(function (done) {
    // connect or create a mongodb database
    mongoose.connect('mongodb://localhost/studentdb');

    // open the connection once after the database is created.
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




