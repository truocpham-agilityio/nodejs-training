var Q = require('q');

var fulfillDeferred = Q.defer();
var fulfill = fulfillDeferred.promise;

fulfillDeferred.resolve('final value');

fulfill.then(function(val) {
  console.log('success with', val); // display success
})
.catch(function(reason) {
  console.log('failed with', reason);
});


var rejectDeferred =  Q.defer();
var reject = rejectDeferred.promise;

rejectDeferred.reject(new Error('rejection reason'));

reject.then(function(val) {
  console.log('success with', val);
}).catch(function(reason) {
  console.log('failed with', reason); // display reject
});


console.log('I will print first because *then* is always async!');
