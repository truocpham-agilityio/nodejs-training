var Q = require('q'),
  deferred = Q.defer(),
  promise = deferred.promise;

/**
 * simple resolve and promise
 */

promise.then(function(val) {
  console.log('The value is:', val);
});

deferred.resolve('final value');


/**
 * separation between the promise and the thing that controls the promise
 */
function getPromise() {
  // resolve the promise after a second
  setTimeout(function() {
    deferred.resolve('separation resolve');
  }, 5000);

  return deferred.promise;
}

var promiseSeparate = getPromise();

promiseSeparate.then(function(val) {
  console.log('done with:', val);
});
