var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Define todoSchema
var todoSchema = new Schema({
  details: String
});

// create Todo Model
var TodoModel = mongoose.model('Todo', todoSchema);

/**
 * Expose.
 */
module.exports = TodoModel;
