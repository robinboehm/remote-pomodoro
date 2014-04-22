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
          scope.onStart();
        };
        scope.pause = function () {
          timerService.pause();
          scope.onPause();
        };
        scope.reset = function () {
          timerService.reset();
          scope.onReset();
        };
        scope.startValue = function (newStartValue) {
          scope.onNewStartValue({newStartValue: newStartValue});
          return timerService.startValue(newStartValue);
        };

        scope.currentValue = timerService.currentValue;

        // Init Current values
        scope.newStartValue = timerService.startValue();
      }
    };
  });