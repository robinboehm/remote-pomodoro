'use strict';

angular.module('angularjsDE-module-seed')
  .controller('RegisteraccountCtrl', function ($scope, hoodieAccount, $modalInstance) {
    $scope.alerts = [];

    window.scope = $scope;
    $scope.input = {};

    $scope.ok = function () {
      hoodieAccount.signUp($scope.input.email, $scope.input.password)
        .then(function() {
          $modalInstance.close();
        }, function(reason) {
          console.error(reason);
          $scope.alerts.push({
            type: 'danger',
            msg: reason.message
          });
        });

    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
