var db = require('../../config/db');

var collection = db.collection('todo');

exports.collection = collection;
