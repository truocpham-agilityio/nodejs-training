var mongodb = require('mongodb');

var rootFrontendPath = '/../../frontend/app/';

module.exports = {
  port: 3000,
  rootPath: rootFrontendPath,
  db: 'mongodb://127.0.0.1:27017/demo'
};
