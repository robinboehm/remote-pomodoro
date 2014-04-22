"use strict";


angular.module('angularjsDE-module-seed')
  .config(function (hoodieProvider) {
    hoodieProvider.url(location.origin);
  });
