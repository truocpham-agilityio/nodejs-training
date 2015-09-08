var mongoose = require('mongoose');

// connect
mongoose.connect('mongodb://127.0.0.1:27017/demo');

var db = mongoose.connection;

db.on('error', function(error) {
  if (error) throw error;
});

db.once('open', function callback() {
  console.log('connected!');
  db.close();
});
