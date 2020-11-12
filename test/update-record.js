// the updat() method is use to update record in the database
// the following can be attached to it for specific operation
// record.update(): udpates the record stored on the record instance variable
// studentModel.update(): deletes all the records passed as a parameter on the model
// studentModel.findOneAndUpdate(): updates the first record found base on the criterial passed as a parameter.
// ------------------------------------------------------------------------------------------------------------

// the proces
// create a new record and save the record to the database
// use fndOneAndUpdate() to update the record
// try to findOne() in the database(i.e the one we just updated)
// assert that the result is null
// ------------------------------------------------------------------------------------------------------------


// mocha is a testing framework for monogodb
// it is used to perform test in our application
// it helps us to check if every CRUD operation works correctly
// -------------------------------------------------------------------------------------------------------------

// importing mocha but not really neccessary
const mocha = require('mocha');
const assert = require('assert');
const studentModel = require('../models/student');

// create a describe block which holds all our test
// create describe test
describe('Updating records', function () {

    var record, record2, record3
    // create new records before any test is made
    beforeEach(function (done) {
        // create a new record test
        // create an object of the model
        record = new studentModel({
            firstname: 'Sunday',
            lastname: 'Destiny',
            age: 23
        });

        // save the new record to the collection
        record.save().then(function () {
            // check if the record is new then its saved to the database else it wont.
            assert(record.isNew === false);
            // close the query after the file is saved
        });

        // record 2
        record2 = new studentModel({
            firstname: 'Monday',
            lastname: 'Goodness',
            age: 12
        });

        // save the record
        record2.save().then(function () {
            assert(record2.isNew == false);
        })

        // record 3
        record3 = new studentModel({
            firstname: 'Tuesday',
            lastname: 'Babangida',
            age: 72
        });

        // save the record
        record3.save().then(function () {
            assert(record2.isNew == false);
            done();
        })

    });

    // next test
    // update a record from the database
    it('Updated one record in the database', function (done) {
        studentModel.findOneAndUpdate({ firstname: 'Sunday' }, { firstname: 'Brain' }).then(function () {
            // find the object that was just updated with its ID
            studentModel.findOne({ _id: record._id }).then(function (result) {
                assert(result.firstname === 'Brain');
                done();
            });
        });

    });
});