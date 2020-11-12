// we use two methods to get collections from a database.
// these methods are used on the models directly not on the instance of the models(like the save() method operates on the instance of the model)
// find(defined record): returns all the collections stated as the parameter
// findOne(defined record): returns the first collection gotten stated as the parameter.

// example of using the save method on the collections by its instance
// const fake = new studentModel({name: 'Ubani'})
// fake.save()

// example of using the find method to the collections directly by its model
// studentModel.find({name: 'Destiny'})

// mocha is a testing framework for monogodb
// it is used to perform test in our application
// it helps us to check if every CRUD operation works correctly
// ---------------------------------------------------------------------------------------------------------------

// importing mocha but not really neccessary
const mocha = require('mocha');
const assert = require('assert');
const studentModel = require('../models/student');

// create a describe block which holds all our test(actions)
// create describe test
describe('Finding records', function () {

    // create a record before the find test run
    var record, record2, record3
    beforeEach(function (done) {
        
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
        });

    });
    

    // find a record by name test
    it('found one record from the database', function (done) {
        studentModel.findOne({ firstname: 'Sunday' }).then(function (result) {
            assert(result.firstname === 'Sunday');
            // console.log(result.firstname);
            done();
        });
        
    });

    // next test
    // find a record by ID test
    it('found one record by ID from the database', function (done) {
        studentModel.findOne({ _id: record._id }).then(function (result) {
            assert(result._id.toString() === record._id.toString());
            done();
        });

    });

});










