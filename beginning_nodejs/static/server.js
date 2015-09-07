var express = require('express'),
    serveIndex = require('serve-index'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');

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
// parser cookie
app.use(cookieParser());

// A browser's default method is 'GET', so this
// is the route that express uses when we visit
// our site initially.
app.get('/', function(req, res){
  res.render('./index');
});

app.get('/home', function(req, res, next) {
  console.log('original: ', req.originalUrl);
  next();
});

app.get('/clear', function(req, res) {
  if (req.cookies.name) {
    res.clearCookie('name');
    res.end('name cookie cleared! Was: ' + req.cookies.name);
  }
  else {
    res.cookie('name', 'foo');
    res.end('name cookie set!');
  }
});

// This route receives the posted form.
// As explained above, usage of 'body-parser' means
// that `req.body` will be filled in with the form elements
app.post('/', function(req, res){
  var userName = req.body.userName;
  var html;

  if (userName) {
    console.log('Cookies.name: ', req.cookies.name);
    html = 'Hello: ' + userName + '.<br>' +
           '<a href="/">Try again.</a>';
  }
  else {
    res.cookie('name', 'foo');
    html = 'Hello: ' + req.cookies.name + '.<br>' +
           '<a href="/">Try again.</a>';
  }

  res.send(html);
});

// listen port
app.listen(port, function() {
  console.log('Server listen on port', port);
});
