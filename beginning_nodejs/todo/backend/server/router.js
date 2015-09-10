var async = require('async'),
    express = require('express'),
    router = express.Router('/todos'),
    http = require('http'),
    _ = require('underscore');

/**
 * Router configuration endpoint
 */
// invoked for any requests passed to this router
router.use(function(req, res, next) {
  // .. some logic here .. like any other middleware
  next();
});

// will handle any request that ends in /events
// depends on where the router is "use()'d"
router.get('/todos', function(req, res, next) {
  // var item = req.body;

  // collection.insert(item, function(error, docs) {
  //   res.send({
  //     status: 'Item added',
  //     itemId: item._id
  //   });
  // });

  res.send('alolao');
});

module.exports = router;

  /**
   * add item into collection
   */
  // webapp.post('/todo', function(req, res, next) {
  //   var item = req.body;

  //   collection.insert(item, function(error, docs) {
  //     res.send({
  //       status: 'Item added',
  //       itemId: item._id
  //     });
  //   });
  // });

    // // Setup the item routes
    // router.route('/:id')
    //   // remove item
    //   .delete(function(req, res, next) {
    //     var id = req.params["id"];
    //     var lookup = { "_id": new mongodb.ObjectID(id) };

    //     collection.remove(lookup, function(error, results) {
    //       if (error) {
    //         console.log('Not delete item!');
    //       }
    //       res.send({
    //         status: 'Item deleted'
    //       });
    //     });
    //   });

    // webapp.get('/api/companies', function (req, res){
    //     // build search options
    //     var searOpts = {};
    //     if (!_.isEmpty(req.query.name))
    //         searOpts.name = new RegExp(req.query.name, 'i');

    //     // do db searching
    //     app.db.getInstance('company').find({
    //         paginate: {
    //             page: req.query.page,
    //             limit: req.query.per_page
    //         },
    //         search: searOpts,
    //         sort: {
    //             "latest_date": -1
    //         }
    //     }, function(err, results, total){
    //         if (!err) {
    //             return res.send([
    //                 {total_entries: total},
    //                 results
    //             ]);
    //         } else {
    //             return console.log(err);
    //         }
    //     });
    // });

    // /**
    //  * Retrieve company's name for autocomplete feature
    //  */
    // webapp.get('/api/autocomplete', function(req, res) {
    //     var searOpts = {};
    //     if (!_.isEmpty(req.query.name))
    //         searOpts.name = new RegExp(req.query.name, 'i');

    //     // Execute query in a callback and return users list
    //     app.db.getInstance('company').find({
    //         search: searOpts,
    //         fields: {
    //             name: 1
    //         }
    //     }, function(err, results, total){
    //         if (!err) {
    //             return res.send(_.pluck(results, 'name'));
    //         } else {
    //             return console.log(err);
    //         }
    //     });
    // });

    // /**
    //  * Request validation
    //  */
    // webapp.get('/api/requestValidation', function(req, res) {
    //     log.debug('/api/requestValidation', req.query)
    //     var captchaImg = req.query.captchaImg,
    //         ip = req.query.ip,
    //         clients = app.io.sockets.clients(),
    //         captchaCode = null;

    //     // add listener for clients
    //     // waiting until got result & callback to scrape client
    //     _.each(clients, function (socket) {
    //         socket.once('operation:capchaCode:' + ip, function (data) {
    //             log.debug('/api/requestValidation receive captcha', data)
    //             if (!captchaCode) {
    //                 captchaCode = data;
    //                 res.send(data);
    //             }
    //         });
    //     });

    //     // start request capcha
    //     app.io.sockets.emit('operation:requestValidation', {
    //         captchaImg: captchaImg,
    //         ip: ip
    //     });
    // });
// };
