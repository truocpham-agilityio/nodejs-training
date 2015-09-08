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

  // insert
  collection.insert(person1, function(error, records) {
    if (error) throw error;
    console.log('Inserted ' + records[0].first + ' successfully!');
  });

  // update last of person1
  person1.last = "Khac";
  collection.save(person1, function(error) {
    console.log('updated.');
  });
});
