// mocha is a testing framework for monogodb
// it is used to perform test in our application
// it helps us to check if every CRUD operation works correctly


// importing mocha but not really neccessary
const mocha = require('mocha');
const assert = require('assert');
const studentModel = require('../models/student');

// create a describe block which holds all our test
// create describe test
describe('Saving records', function () {

    // create a new record test
    it('first record saved to the database', function (done) {
        // create new object of the model
        var record = new studentModel({
            firstname: 'Sunday',
            lastname: 'Destiny',
            age: 23
        });

        // save the new record to the collection
        record.save().then(function () {
            // checks if the record is new then its saved to the database else it wont.
            assert(record.isNew === false);
            // close the query after the file is saved and move to the next text
            done();
        });
    });

    // next test
    // create second record
    it('Second record saved to the database', function (done) {
        var record2 = new studentModel({
            firstname: 'Monday',
            lastname: 'Goodness',
            age: 12
        });

        // save the record, checks that the record in no longer new and close the querry
        record2.save().then(function () {
            assert(record2.isNew === false);
            done();
        })
    })

    // next test
    // create third record
    it('Third record saved to the database', function (done) {
        var record3 = new studentModel({
            firstname: 'Tuesday',
            lastname: 'Babangida',
            age: 72
        });

        // save the record, checks that the record in no longer new and close the querry
        record3.save().then(function () {
            assert(record3.isNew == false);
            done();
        })
    })

});
