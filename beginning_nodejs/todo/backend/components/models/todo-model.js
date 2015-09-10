var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Define todoSchema
var todoSchema = new Schema({
  _id: String,
  details: String
});

// create Todo Model
mongoose.model('Todo', todoSchema);
