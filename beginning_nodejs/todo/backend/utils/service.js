var assert = require('assert'),
    oop = require('node-g3').oop;

var Service = oop.Base.extend({
  start: function(callback) {
    if (this.started) return callback();
    this.started = true;
    return this.onStart(callback);
  },

  onStart: function(callback) {
    return callback();
  },

  stop: function(callback) {
    if (!this.started) return callback();
    this.started = false;
    return this.onStop(callback);
  },

  onStop: function(callback) {
    return callback();
  }
});

/**
 * Expose.
 */
module.exports = Service;
