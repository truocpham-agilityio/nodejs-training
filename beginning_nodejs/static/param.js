var express = require('express');

// fix me
var port = 3000;

// create an express app
var app = express();

app.set('port', port);

app.param('userId', function(req, res, next, userId) {
  res.write('Looking up user: ' + userId + '\n');

  // simulate a user lookup and load it into request object
  // for later midleware
  req.user = { userId: userId };
  next();
});

app.get('/user/:userId', function(req, res, next) {
  res.end('user is: ' + JSON.stringify(req.user));
});

app.listen(port, function() {
  console.log('Server is started at port', port);
});
