"use strict";


angular.module('angularjsDE-module-seed')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/:id', {
        controller: 'PomodoroCtrl',
        templateUrl: 'views/MainView.html'
      })
      .otherwise({
        redirectTo: '/global'
      });
  });