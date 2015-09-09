/**
 * Main JavaScript at Client
 */

// create todo module based on angularJS
var todoApp = angular.module('todo', []);

// MainController
todoApp.controller('MainController', ['$scope', 'todoWebService', function($scope, todoWebService) {

  // setup a view model
  var vm = {};

  // init todo list
  vm.list = [];

  /**
   * Start the initial load of lists
   */
  todoWebService.getItems().then(function(response) {
    vm.list = response.data.items;
  });

  /**
   * create add item function
   */
  vm.addItem = function() {
    // init item
    var item = {
      details: vm.newItemDetails
    };

    // clear details from UI
    vm.newItemDetails = '';

    // send the request to the server and add the item once done
    todoWebService.addItem(item).then(function(response) {
      vm.list.push({
        _id: response.data.itemId,
        details: item.details
      });
    });
  };

  /**
   * create remove item function
   */
  vm.removeItem = function(itemToRemove) {
    // remove item from list
    vm.list = vm.list.filter(function(item) {
      return item._id !== itemToRemove._id;
    });

    // and send the server request
    todoWebService.removeItem(itemToRemove);
  };

  // New item details
  vm.newItemDetails = '';

  // Expose the vm using $scope
  $scope.vm = vm;
}]);

// Service
todoApp.service('todoWebService', ['$http', function($http) {
  var root = '/todo';

  return {
    getItems: function() {
      return $http.get(root);
    },
    addItem: function(item) {
      return $http.post(root, item);
    },
    removeItem: function(item) {
      return $http.delete(root + '/' + item._id);
    }
  };
}]);
