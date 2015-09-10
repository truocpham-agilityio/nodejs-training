var mongoose = require('mongoose'),
    BaseDbService = require('../base-mongodb-service');

// import necessary models
require('../schema/todo')();

/**
 * Expose.
 */
module.exports = BaseDbService.extend({
  modelClass: mongoose.model('Todo')
});
