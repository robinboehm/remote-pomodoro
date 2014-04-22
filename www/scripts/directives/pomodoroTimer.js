'use strict';

angular.module('angularjsDE-module-seed')
  .directive('pomodoroTimer', function ($interval, hoodie) {
    return {
      restrict: 'E',
      templateUrl: 'views/PomodoroTimer.tmpl.html',
      scope: {
        pomodoro: '='
      },
      link: function (scope) {
        var
          delta = 1000,
          stopPromise;


        function pause() {
          $interval.cancel(stopPromise);
          stopPromise = undefined;
          scope.endTime = undefined;
        }

        function start() {
          scope.endTime = new Date().getTime() + scope.startValue;

          if (angular.isUndefined(stopPromise)) {
            if (scope.currentValue <= 0 || angular.isUndefined(scope.currentValue)) {
              scope.currentValue = scope.startValue;
            }
            stopPromise = $interval(function () {
              if (scope.currentValue <= delta) {
                scope.currentValue = 0;
                scope.pause();
              }
              else {
                scope.currentValue -= delta;
                scope.pomodoro.count++;
              }
            }, delta);
          }
        }


        hoodie.store.on('change', function (e) {
          console.log(e);
        });

        scope.start = function () {
          start();
          hoodie.store.update('pomodoro', scope.pomodoro.id, {endTime: scope.endTime});
        };

        scope.pause = function () {
          pause();
          hoodie.store.update('pomodoro', scope.pomodoro.id, {endTime: undefined});

        };

        scope.currentValue = scope.startValue = 2500;

      }
    };
  });