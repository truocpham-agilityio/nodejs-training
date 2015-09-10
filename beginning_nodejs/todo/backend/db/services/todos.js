var TodoModel = require('../models/todo');

/**
 * Expose.
 */
module.exports = {
  modelClass: TodoModel,

  // get all todos
  getAll: function(callback) {
    this.modelClass.find(callback);
  },

  // create new one
  create: function(data, callback) {
    new this.modelClass(data).save(callback);
  },

  // update item
  update: function(data, callback) {
    this.modelClass(data).update(callback);
  },

  // delete item
  remove: function(data, callback) {
    this.modelClass(data).remove(callback);
  }
};
