'use strict';

angular.module('angularjsDE-module-seed')
  .factory('timerService', function ($interval) {
    var
      delta = 1000,
      startValue = 25000,
      currentValue = 0,
      stopPromise;


    function start() {
      if (angular.isUndefined(stopPromise)) {
        if (currentValue <= 0 || angular.isUndefined(currentValue)) {
          currentValue = config.startValue;
        }
        stopPromise = $interval(function () {
          if (currentValue <= delta) {
            currentValue = 0;
            pause();
          }
          else {
            currentValue -= delta;
          }
        }, delta);
      }
    }

    function pause() {
      $interval.cancel(stopPromise);
      stopPromise = undefined;
    }

    function reset() {
      pause();
      currentValueFn(startValue);
    }

    function currentValueFn(valuePram) {
      if (angular.isDefined(valuePram)) {
        currentValue = valuePram;
      }
      return currentValue;
    }

    function startValueFn(valuePram) {
      if (angular.isDefined(valuePram)) {
        startValue = valuePram;
      }
      return startValue;
    }


    return {
      start: function () {
        return start();
      },
      pause: function () {
        return pause();
      },
      reset: function () {
        return reset();
      },
      currentValue: function (valuePram) {
        return currentValueFn(valuePram);
      },
      startValue: function (valuePram) {
        return startValueFn(valuePram);
      }
    };
  });