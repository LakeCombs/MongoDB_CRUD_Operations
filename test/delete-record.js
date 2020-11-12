// the remove() method is use to delete record form the database
// the following can be attached to it for specific operation
// record.remove(): deletes the record stored on the record instance variable
// studentModel.remove(): deletes all the records passed as a parameter on the model
// studentModel.findOneAndRemove(): deletes the first record found base on the criterial passed as a parameter.
// ------------------------------------------------------------------------------------------------------------

// the procces
// create a new record and save the record to the database
// use fndOneAndRemove() to delete the record
// try to findOne() in the database(i.e the one we just remove)
// assert that the result is null(i.e the record no longer exist)
// -------------------------------------------------------------------------------------------------------------------

// mocha is a testing framework for monogodb
// it is used to perform test in our application
// it helps us to check if every CRUD operation works correctly
// --------------------------------------------------------------------------------------------------------------


// create instance of mocha but not really neccessary
const mocha = require('mocha');
const assert = require('assert');
const studentModel = require('../models/student');

// create a describe block which holds all our test
// create describe test
describe('Deleting records', function () {

    var record, record2, record3
    // create records before any test is made
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
    // delete a record from the database
    it('deleted one record from the database', function (done) {
        studentModel.findOneAndRemove({ firstname: 'Sunday' }).then(function () {
            studentModel.findOne({ firstname: 'Sunday' }).then(function (result) {
                assert(result === null); 
                done();
            });
        });     
    });
});