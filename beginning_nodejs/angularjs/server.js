var express = require('express'),
    path = require('path');

// fix me
var port = 3000;

// create app based on express
var app = express();

// use public
app.use(express.static(path.join(__dirname, '/public')));

// start server
app.listen(port, function() {
  console.log('Server is listening at port', port);
});
