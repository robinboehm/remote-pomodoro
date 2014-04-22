'use strict';

angular.module('angularjsDE-module-seed')
  .controller('SigninCtrl', function ($scope, hoodieAccount) {
    $scope.signIn = function(user, pass) {
      hoodieAccount.signIn(user, pass)
        .then(function(username) {
          console.log(username);
        });
    };
    $scope.signOut = hoodieAccount.signOut;
    $scope.account = hoodieAccount;

    $scope.$on('account', function(event) {
      console.log(event);
    });
  });
