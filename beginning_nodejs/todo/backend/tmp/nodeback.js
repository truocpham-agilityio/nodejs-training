var Q = require('q');
/**
 * define data function
 */
function data(delay, callback) {
  setTimeout(function() {
    callback(null, 'data');
  }, delay);
}

/**
 * define error function
 */
function error(delay, callback) {
  setTimeout(function() {
    callback(new Error('error'));
  }, delay);
}

// callback
data(1000, function(error, data) {
  console.log(data);
});
error(1000, function(err, data) {
  console.log('Callback', err.message);
});

// Convert to promises
var dataAsync = Q.nbind(data);
var errorAsync = Q.nbind(error);

// Usage
dataAsync(1000).then(function(data) {
  console.log(data);
});
errorAsync(1000).then(function(data) {
  console.log(data);
}).catch(function(error) {
  console.log('Catch:', error.message);
});
