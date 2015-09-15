var Q = require('q'),
    fs = require('fs'),
    readFileAsync = Q.nbind(fs.readFile);

function loadJSONAsync(fileName) {
  return readFileAsync(fileName).then(function(res) {
    return JSON.parse(res);
  });
}

loadJSONAsync('good.json')
  // good json file
  .then(function(val) {
    console.log(val);
  })
  .catch(function(error) {
    console.log('good.json error', error.message);
  })
  // non-existent json file
  .then(function() {
    return loadJSONAsync('absent.json');
  })
  .then(function(val) {
    console.log(val);
  })
  .catch(function(error) {
    console.log('absent.json error', error.message);
  })
  // invalid json file
  .then(function() {
    return loadJSONAsync('bad.json');
  })
  .then(function(val) {
    console.log(val);
  })
  .catch(function(error) {
    console.log('bad.json invalid', error.message);
  });
