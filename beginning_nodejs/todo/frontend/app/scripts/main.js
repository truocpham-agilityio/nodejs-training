/**
 * Main JavaScript at Client
 */

// create todo module based on angularJS
var todoApp = angular.module('todo', []);

// MainController
todoApp.controller('MainController', ['$scope', 'guidService', function($scope, guidService) {
  // setup a view model
  var vm = {};

  // create list todo
  vm.list = [
    {
      _id: guidService.createGuid(),
      details: 'First Item'
    },
    {
      _id: guidService.createGuid(),
      details: 'Second Item'
    }
  ];

  // create add item function
  vm.addItem = function() {
    vm.list.push({
      _id: guidService.createGuid(),
      details: vm.newItemDetails
    });

    vm.newItemDetails = '';
  };

  // create remove item function
  vm.removeItem = function(itemToRemove) {
    vm.list = vm.list.filter(function(item) {
      return item._id !== itemToRemove._id;
    });
  };

  // New item details
  vm.newItemDetails = '';

  // Expose the vm using $scope
  $scope.vm = vm;
}]);

// Service
todoApp.service('guidService', function() {
  return {
    createGuid: function() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);

        return v.toString(16);
      });
    }
  };
});
