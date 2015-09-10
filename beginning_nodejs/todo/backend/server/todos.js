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

    // get all!
    res.send(todos);
  });
});

router.post('/', function(req, res, next) {
  var data = req.body;

  databaseServices.todos.create(data, function(error, todo) {
    if (error) {
      throw error;
    }

    // added!
    res.send(todo);
  });
});

router.delete('/:id', function(req, res, next) {
  var id = req.params['id'];
  var item =  databaseServices.todos.modelClass.findOne({ '_id': id });

  item.findOneAndRemove(function(error, todos) {
    if (error) throw error;

    // removed!
    res.send(todos);
  });
});

router.put('/:id', function(req, res, next) {
  var id = req.params['id'];

  // findById and update the details of item
  databaseServices.todos.modelClass.findOneAndUpdate({ '_id': id }, { 'details': 'Updated!' }, function(error, todo) {
    if (error) {
      throw error;
    }

    // updated!
    res.send(todo);
  });
});

/**
 * Expose.
 */
module.exports = router;
