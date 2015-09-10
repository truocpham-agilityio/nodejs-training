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

  // update item by id
  updateById: function(id, callback) {
    this.modelClass.findOneAndUpdate({ '_id': id }, { 'details': 'Updated!' }, callback);
  },

  // remove item by id
  removeById: function(id, callback) {
    this.modelClass.findOneAndRemove({ '_id': id }, callback);
  }
};
