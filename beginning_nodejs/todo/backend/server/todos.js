var express = require('express'),
    router = express.Router('/todos'),
    databaseServices = require('../db/database-manager');

/**
 * Router configuration endpoint
 */
// invoked for any requests passed to this router
router.use(function(req, res, next) {
  // .. some logic here .. like any other middleware
  next();
});

/**
 * REST api
 */
router.get('/', function(req, res, next) {
  databaseServices.todos.getAll(function(error, todos) {
    if (error) {
      throw error;
    }

    res.send(todos);
  });
});

router.post('/', function(req, res, next) {
  var data = req.body;

  console.log(data);

  databaseServices.todos.create(data, function(error, todo) {
    if (error) {
      throw error;
    }

    res.send(todo);
  });
});

/**
 * Expose.
 */
module.exports = router;
