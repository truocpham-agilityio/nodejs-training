var TodoModel = require('../models/todo');

/**
 * Expose.
 */
module.exports = {
  modelClass: TodoModel,

  // get all todos
  getAll: function(fn) {
    this.modelClass.find(fn);
  },

  // create new one
  create: function(data, fn) {
    new this.modelClass(data).save(fn);
  }
};
