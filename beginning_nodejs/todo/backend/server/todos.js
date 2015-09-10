var express = require('express'),
    router = express.Router('/todos'),
    todoDBServices = require('../db/services/todos');

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
  todoDBServices.getAll(function(error, todos) {
    if (error) {
      throw error;
    }

    // get all!
    res.send({
      status: 'Items found',
      items: todos
    });
  });
});

router.post('/', function(req, res, next) {
  var data = req.body;

  todoDBServices.create(data, function(error, todo) {
    if (error) {
      throw error;
    }

    // added!
    res.send({
      status: 'Item added',
      itemId: todo._id
    });
  });
});

router.delete('/:id', function(req, res, next) {
  var id = req.params['id'];

  // remove by id
  todoDBServices.removeById(id, function(error, todo) {
    // throw error
    if (error) throw error;

    // removed!
    res.send({
      status: 'Item cleared'
    });
  });
});

router.put('/:id', function(req, res, next) {
  var id = req.params['id'];

  // 'details' always hav values 'Updated!'
  todoDBServices.updateById(id, function(error, todo) {
    if (error) {
      throw error;
    }

    // updated!
    res.send({
      status: 'Item updated'
    });
  });
});

/**
 * Expose.
 */
module.exports = router;
