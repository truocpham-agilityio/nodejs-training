var express = require('express'),
    serveStatic = require('serve-static');

// fix me
var port = 3000;

// create an express application
var app = express();

// register midleware
app.use(serveStatic(__dirname + '/public'));

// listen port
app.listen(port);
