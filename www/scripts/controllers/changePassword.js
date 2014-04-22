'use strict';

angular.module('angularjsDE-module-seed')
  .controller('ChangepasswordCtrl', function ($scope, $modalInstance, hoodieAccount, $log) {

    $scope.alerts = [];

    $scope.ok = function () {
      hoodieAccount.changePassword($scope.old, $scope.new).then(function(data) {
        $log.log(data);
        $scope.alerts.push({msg: data, type: 'success'});
        $modalInstance.close();
      });
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

  });
