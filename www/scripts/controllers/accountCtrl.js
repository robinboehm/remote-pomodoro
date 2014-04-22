/**
 * Created by elmarburke on 22.04.14.
 */
'use strict';

angular.module('angularjsDE-module-seed')
  .controller('AccountCtrl', function ($scope, $modal) {
    $scope.openChangePassword = function() {
      $scope.changePasswordModal = $modal.open({
        templateUrl: '/views/changePassword.html',
        controller: 'ChangepasswordCtrl'
      });
    };

    $scope.openRegistration = function() {
      $scope.changePasswordModal = $modal.open({
        templateUrl: '/views/registerAccount.html',
        controller: 'RegisteraccountCtrl'
      });
    };
  });
