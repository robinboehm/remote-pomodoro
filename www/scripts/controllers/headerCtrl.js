'use strict';

angular.module('angularjsDE-module-seed')
  .controller('HeaderCtrl', function ($scope, hoodie) {

    $scope.getUserName = function () {
      return hoodie.account.username;
    };

  });