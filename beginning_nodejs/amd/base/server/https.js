var https = require('https'),
    path = require('path');
    fs = require('fs');

var options = {
  key: fs.readFileSync(path.join(__dirname + '/key.pem')),
  cert: fs.readFileSync(path.join(__dirname + '/cert.pem'))
};

https.createServer(options, function (req, res) {
  res.end('hello client!');
}).listen(3000);
