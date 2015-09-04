var http = require('http');
var path = require('path');
var express = require('express');
var fs = require('fs');

var Router = require('./router');

var app = express();

// fix me
port = 3000;

app.set('port', port);

// public
app.use(express.static(path.join(__dirname, '/../bower_components')));
app.use(express.static(path.join(__dirname, '/../client')));

// create server
var server = http.createServer(app);

app.get('/', Router);

server.listen(port, function() {
  console.log('Server is started at port', port);
});
