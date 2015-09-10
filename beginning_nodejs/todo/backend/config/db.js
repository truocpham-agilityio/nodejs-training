var mongoose = require('mongoose'),
    config = require('./_config');

module.exports = function(app) {
  // create connection
  mongoose.connect(config.db, function(error, database) {
    if (error) {
      throw error;
    }

    // connected database
    console.log('connected database!');

    // create db and collection
    db = mongoose.connection;
    collection = db.collection('todo');

    // create server
    var server = http.createServer(app);

    server.listen(config.port, function() {
      console.log('Server listening on port ', config.port);
    });
  });
};
