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
    bodyParser = require('body-parser');

// fix me
var port = 3000;

// create an express application
var app = express();

// use favicon for application
app.use(favicon(path.join(__dirname, '/../frontend/app/favicon.ico')));

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parser cookie
app.use(cookieParser());

// The other static files are also in the frontend/app folder
app.use(express.static(path.join(__dirname, '/../frontend/app')));

// create server
var server = http.createServer(app);

server.listen(port, function() {
  console.log('Server listening on port ', port);
});
