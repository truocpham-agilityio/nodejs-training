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
    // config = require('../config/_config'),
    ServiceBase = require('../utils/service');

/**
 * Web admin tool server
 *
 * @param {Configs} opts.configs
 *      The configuration
 *
 * @return itself
 */
var Server = ServiceBase.extend({

  constructor: function(opts) {
    opts = opts || {};

    var self = this,
        conf = self.conf = opts.configs;

    // create an express application
    var app = self.app = express();

    // create db and collection
    var db;
    var collection;

    console.log('connectionString', conf.get('database:mongodb:connectionString'));

    // create connection
    mongoose.connect(conf.get('database:mongodb:connectionString'), function(error, database) {
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

      server.listen(conf.get('dashboard:apiPort'), function() {
        console.log('Server listening on port ', conf.get('dashboard:apiPort'));
      });
    });

    // use favicon for application
    app.use(favicon(path.join(__dirname, conf.get('dashboard:rootPath') + 'favicon.ico')));


    // parse application/json
    app.use(bodyParser.json());
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));
    // parser cookie
    app.use(cookieParser());


    // use public
    // The other static files are also in the frontend/app folder
    app.use(express.static(path.join(__dirname, conf.get('dashboard:rootPath'))));

    /**
     * Router
     */
    app.use('/api/todos', todosRouter);
  }
});

/**
 * Expose.
 */
module.exports = Server;
