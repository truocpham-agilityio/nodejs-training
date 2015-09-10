var oop = require('node-g3').oop;

module.exports = oop.Base.extend({

  constructor: function (app, opts) {
    this.app = app;
    this.opts = opts;
  },

  /**
   * Initialize service
   * Should be overriden by subclass
   */
  init: function (callback) {
    callback && callback();
  },

  /**
   * Terminal service
   * Should be overriden by subclass
   */
  terminal: function (callback) {
    callback && callback();
  }

});
