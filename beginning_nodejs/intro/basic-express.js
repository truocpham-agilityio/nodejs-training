var express = require('express'),
    http = require('http');

// fix me
var port = 3000;

// create an express app
var app = express()
          // register a midleware
          .use(function(req, res, next) {
            res.end('hello express!');
          });

// register with http
http.createServer(app).listen(port);
