var express = require('express'),
    serveIndex = require('serve-index'),
    path = require('path'),
    bodyParser = require('body-parser');

// fix me
var port = 3000;

// create an express application
var app = express();

// set port
app.set('port', port);

// public
app.use(express.static(path.join(__dirname + '/public')));
app.use('stylesheets', express.static(path.join(__dirname +'/public/stylesheets')));

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// A browser's default method is 'GET', so this
// is the route that express uses when we visit
// our site initially.
app.get('/', function(req, res){
  res.render('./index');
});

// This route receives the posted form.
// As explained above, usage of 'body-parser' means
// that `req.body` will be filled in with the form elements
app.post('/', function(req, res){
  var userName = req.body.userName;
  var html = 'Hello: ' + userName + '.<br>' +
             '<a href="/">Try again.</a>';
  res.send(html);
});

// listen port
app.listen(port, function() {
  console.log('Server listen on port', port);
});
