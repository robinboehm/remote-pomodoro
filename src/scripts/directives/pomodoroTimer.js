'use strict';

angular.module('angularjsDE-module-seed')
  .directive('pomodoroTimer', function (timerService) {
    return {
      restrict: 'E',
      templateUrl: 'views/PomodoroTimer.tmpl.html',
      scope: {
        onStart: '&',
        onPause: '&',
        onReset: '&',
        onNewStartValue: '&'
      },
      link: function (scope) {
        scope.start = function () {
          timerService.start();
          console.log(scope.onStart);
        };
        scope.pause = function () {
          timerService.pause();
        };
        scope.reset = function () {
          timerService.reset();
        };
        scope.startValue = function (newStartValue) {
          return timerService.startValue(newStartValue);
        };

        scope.currentValue = timerService.currentValue;

        // Init Current values
        scope.newStartValue = timerService.startValue();


      }
    };
  });