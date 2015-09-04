var _ = require('underscore'),
    path = require('path'),
    fs = require('fs');

function send404(response) {
  response.writeHead(404, { 'Content-Type': 'text/plain' });
  response.write('Error 404: Resource not found.');
  response.end();
}

// create router
var router = function(req, res) {
  if (req.method == 'GET' && req.url == '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    fs.createReadStream(path.join(__dirname + '/../index.html')).pipe(res);
  }
  else {
    send404(res);
  }
};

/**
 * Expose.
 */
module.exports = router;
