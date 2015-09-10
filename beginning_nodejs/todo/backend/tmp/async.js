var async = require('async');

/**
 * async series
 */

// an example using an object instead of an array
async.series({
  foo: function(callback) {
    console.log('foo!');
    callback(null, 'foo');
  },
  bar: function(callback) {
    console.log('bar!');
    callback(null, 'bar');
  }
}, function(error, results) {
  if (error) {
    console.log('Error!', error);
  } else {
    console.log('Successfully', results); // { foo: 'foo', bar: 'bar' }
  }
});

// an example using an array
async.series([
  function(callback) {
    console.log('foo!');
    callback(null, 'foo');
  },
  function(callback) {
    console.log('bar!');
    callback(null, 'bar');
  }
], function(error, results) {
  if (error) {
    console.log('Error!', error);
  } else {
    console.log('Successfully', results); // ['foo', 'bar']
  }
});



/**
 * async.parallel
 */

async.parallel([
  function(callback) {
    console.log('foo');
    callback(null, 'foo');
  },
  function(callback) {
    console.log('bar');
    callback(null, 'bar');
  }
], function(error, results) {
  if (error) {
    console.log('Error', error);
  } else {
    console.log('Successfully!', results);
  }
});

// async.series({
//     save: function (seriesCallback) {
//       // save model into collection
//       truoc.save(function(error) {
//         if (error) throw error;

//         User.findOne({ name: 'Truoc Pham' }).exec(function(error, user) {
//           // get the User model instance and print
//           user.print();

//           seriesCallback(error);
//           // db.collection('users').drop(function() {
//           //   db.close();
//           // });
//         });
//       });
//     },

//     update: function (seriesCallback) {
//       // update model
//       var collection = db.collection('users');
//       collection.update({'name': 'Truoc Pham'}, {$set: {'age': 25}}, function(error) {
//         if (error) {
//           return seriesCallback(error);
//         }

//         console.log('updated!');
//       });
//     }
//   }, function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('Success');
//       db.close();
//     }
//   });
// });
