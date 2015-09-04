console.log(__dirname);
console.log(__filename);

// setInterval
console.log('*****************************');
console.log('* setInterval example *');
console.log('*****************************');
var count = 0;
setInterval(function() {
  console.log('count: ', count++);
}, 1000);
