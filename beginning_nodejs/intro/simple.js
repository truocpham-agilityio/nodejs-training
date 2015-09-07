var express = require('express');

// fix me
var port = 3000;

// create an express app
var app = express();

// register midleware
app.use(function(req, res, next) {
  res.end('hello simple express!');
});

// listen port
app.listen(port);
