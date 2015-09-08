var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async');

// define a schema
var userSchema = new Schema({
  name: String,
  age: Number
});

userSchema.methods.print = function() {
  console.log('Hi, my name is', this.name, '. I am', this.age, 'years old.');
};

// compile schema into Model
var User = mongoose.model('User', userSchema);

// connect
mongoose.connect('mongodb://127.0.0.1:27017/demo');

// database
var db = mongoose.connection;

db.once('open', function callback() {
  console.log('Connected!');

  // Use User model
  var truoc = new User({
    name: 'Truoc Pham',
    age: '24'
  });

  truoc.print();

  async.series({
    save: function (seriesCallback) {
      // save model into collection
      truoc.save(function(error) {
        if (error) throw error;

        User.findOne({ name: 'Truoc Pham' }).exec(function(error, user) {
          // get the User model instance and print
          user.print();

          seriesCallback(error);
          // db.collection('users').drop(function() {
          //   db.close();
          // });
        });
      });
    },

    update: function (seriesCallback) {
      // update model
      var collection = db.collection('users');
      collection.update({'name': 'Truoc Pham'}, {$set: {'age': 25}}, function(error) {
        if (error) {
          return seriesCallback(error);
        }

        console.log('updated!');
      });
    }
  }, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Success');
      db.close();
    }
  });
});
