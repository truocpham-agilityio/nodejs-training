/**
 * The server end point of frontend router
 */
var http = require('http'),
    path = require('path'),
    express = require('express'),
    favicon = require('serve-favicon'),
    _ = require('underscore'),
    async = require('async'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    mongodb = require('mongodb');

// fix me
var port = 3000;

// create an express application
var app = express();

// create db and collection
var db;
var collection;

// create connection
mongoose.connect('mongodb://127.0.0.1:27017/demo', function(error, database) {
  if (error) {
    throw error;
  }

  // connected database
  console.log('connected database!');

  // create db and collection
  db = mongoose.connection;
  collection = db.collection('todo');

  // create server
  var server = http.createServer(app);

  server.listen(port, function() {
    console.log('Server listening on port ', port);
  });
});

// use favicon for application
app.use(favicon(path.join(__dirname, '/../frontend/app/favicon.ico')));

// create a router
var router = express.Router();

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parser cookie
app.use(cookieParser());


// Setup the collection routes
router.route('/')
  // get all items from collection
  .get(function(req, res, next) {
    collection.find().toArray(function(error, documents) {
      res.send({
        status: 'Items found',
        items: documents
      });
    });
  })
  // add item into collection
  .post(function(req, res, next) {
    var item = req.body;

    collection.insert(item, function(error, docs) {
      res.send({
        status: 'Item added',
        itemId: item._id
      });
    });
  });

// Setup the item routes
router.route('/:id')
  // remove item
  .delete(function(req, res, next) {
    var id = req.params["id"];
    var lookup = { "_id": new mongodb.ObjectID(id) };

    collection.remove(lookup, function(error, results) {
      if (error) {
        console.log('Not delete item!');
      }
      res.send({
        status: 'Item deleted'
      });
    });
  });

// use public
// The other static files are also in the frontend/app folder
app.use(express.static(path.join(__dirname, '/../frontend/app')));
app.use('/todo', router);
