var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Expose.
 */
module.exports = function() {

  // Define todoSchema
  var todoSchema = new Schema({
    details: String
  });

  // create Todo Model based on todoSchema
  mongoose.model('Todo', todoSchema);
};
