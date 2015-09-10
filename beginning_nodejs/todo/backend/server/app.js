/**
 * The server end point of frontend router
 */
var http = require('http'),
    path = require('path'),
    express = require('express'),
    favicon = require('serve-favicon'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    todosRouter = require('./todos'),
    config = require('../config/_config');

// create an express application
var app = this.app = express();

// create db and collection
var db;
var collection;

// create connection
mongoose.connect(config.db, function(error, database) {
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

  server.listen(config.port, function() {
    console.log('Server listening on port ', config.port);
  });
});

// use favicon for application
app.use(favicon(path.join(__dirname, config.rootPath + 'favicon.ico')));


// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parser cookie
app.use(cookieParser());


// use public
// The other static files are also in the frontend/app folder
app.use(express.static(path.join(__dirname, config.rootPath)));

/**
 * Router
 */
app.use('/api', todosRouter);
