"use strict";


angular.module('angularjsDE-module-seed')
  .controller('PomodoroCtrl', function ($scope, $routeParams, hoodie) {

    $scope.id = $routeParams.id;

    hoodie.store.findOrAdd('pomodoro', $routeParams.id, {ts: undefined})
      .then(function (e) {
        $scope.pomodoro = e;
      });
  });