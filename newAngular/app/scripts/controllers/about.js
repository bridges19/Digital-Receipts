'use strict';

/**
 * @ngdoc function
 * @name newAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the newAngularApp
 */
angular.module('newAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
