/**
 * Module dependencies.
 */
var http = require('http'),
    path = require('path'),
    express = require('express'),
    _ = require('underscore'),
    async = require('async'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    mongoskin = require('mongoskin'),
    less = require('less-middleware'),
    MongoClient = require('mongodb').MongoClient;

// declare person1
var person1 = { first: 'Truoc', last: 'Pham', dob: '17/03/1991', gender: 'm', hair_colour: 'black', occupation: 'developer', nationality: 'vietnamese' };

// find object
var findKey = { first: 'Truoc' };

// connect mongodb
MongoClient.connect('mongodb://127.0.0.1:27017/demo', function(error, db) {
    if (error) throw error;

    // if not error will print out
    console.log('Successfully connected!');

    // select people collection in demo database
    var collection = db.collection('people');

    // insert person1 into db
    collection.insert(person1, function(error, records) {
      // print out
      console.log('Inserted: ', records[0]);
      console.log('ID: ', person1._id);

      // find person based on findKey
      collection.find(findKey).toArray(function(error, results) {
        console.log('Found results: ', results);

        collection.remove(findKey, function(error, results) {
          console.log('Deleted person: ', findKey.first);

          // Finally, close db
          db.close();
        });
      });
    });
});
