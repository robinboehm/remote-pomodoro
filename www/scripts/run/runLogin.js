"use strict";


angular.module('angularjsDE-module-seed')
  .run(function (hoodieAccount) {
    if (angular.isUndefined(hoodieAccount.username)) {
      hoodieAccount.anonymousSignUp();
    }
  });
