"use strict";


angular.module('angularjsDE-module-seed')
  .controller('PomodoroCtrl', function ($scope, $routeParams) {

    $scope.id = $routeParams.id;

    $scope.handleOnStart = function () {
      console.log('start');
    };

    $scope.handleOnPause = function () {
      console.log('stop');
    };

    $scope.handleOnNewStartValue = function (newStartValue) {
      console.log('new Value:' + newStartValue);
    };

  });