

angular.module('angularjsDE-module-seed')
  .controller('UserCtrl', function ($scope, hoodie, $location) {

    loco = $location;
    $scope.getUserName = function () {
      return hoodie.account.username;
    };

  });