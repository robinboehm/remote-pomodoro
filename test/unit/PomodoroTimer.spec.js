describe('A PomodoroDirective', function () {

  var $compile,
    $rootScope;

  beforeEach(module('angularjsDE-module-seed'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('should contain two buttons', function () {
    var linkFn = $compile('<pomodoro-timer></pomodoro-timer>');
    var element = linkFn($rootScope);
    $rootScope.$apply();

    expect(element.find('button').length).toBe(2);
  });

  it('should contain a Start-Button', function () {
    var linkFn = $compile('<pomodoro-timer></pomodoro-timer>');
    var element = linkFn($rootScope);
    $rootScope.$apply();

    expect(element.find('button').length).toBe(2);
    expect(element.find('button').hasClass('start')).toBe(true);
    expect(element.find('button.start').text()).toBe('Start');
  });

  it('should contain a Reset-Button', function () {
    var linkFn = $compile('<pomodoro-timer></pomodoro-timer>');
    var element = linkFn($rootScope);
    $rootScope.$apply();

    expect(element.find('button').length).toBe(2);
    expect(element.find('button').next().hasClass('reset')).toBe(true);
    expect(element.find('button.reset').text()).toBe('Reset');
  });


  it('should contain a timer span', function () {
    var linkFn = $compile('<pomodoro-timer></pomodoro-timer>');
    var element = linkFn($rootScope);
    $rootScope.$apply();

    expect(element.find('span').length).toBe(1);
    expect(element.find('span').hasClass('timer')).toBe(true);
  });

  describe('Timer-Visualisation', function () {

    it('should render a startvalue in a correct format', function () {
      var linkFn = $compile('<pomodoro-timer></pomodoro-timer>');
      var element = linkFn($rootScope);


      $rootScope.startValue = 25 * 1000;
      $rootScope.$apply();

      expect(element.find('span.timer').text()).toBe('00:25');


      $rootScope.startValue = 24 * 1000;
      $rootScope.$apply();

      expect(element.find('span.timer').text()).toBe('00:24');


      $rootScope.startValue = 144 * 1000;
      $rootScope.$apply();

      expect(element.find('span.timer').text()).toBe('02:24');
    });

  });

  describe('Start-Button', function () {

    it('should start the timer', function () {

      var linkFn = $compile('<pomodoro-timer></pomodoro-timer>');
      var element = linkFn($rootScope);

      $rootScope.start = function () {};

      $rootScope.$apply();

      spyOn($rootScope, 'start');

      element.find('button.start').click();

      expect($rootScope.start).toHaveBeenCalled();


    });

  });

  describe('Reset-Button', function () {

    it('should start the timer', function () {

      var linkFn = $compile('<pomodoro-timer></pomodoro-timer>');
      var element = linkFn($rootScope);

      $rootScope.reset = function () {
      };

      $rootScope.$apply();

      spyOn($rootScope, 'reset');

      element.find('button.reset').click();

      expect($rootScope.reset).toHaveBeenCalled();


    });

  });

  describe('Countdown', function () {


    it('should count down 1000 per second', inject(function ($interval) {

      var linkFn = $compile('<pomodoro-timer></pomodoro-timer>');
      var element = linkFn($rootScope);

      $rootScope.startValue = 25 * 1000;
      $rootScope.$apply();

      expect(element.find('span.timer').text()).toBe('00:25');

      element.find('button.start').click();

      // Time passes
      $interval.flush(1000);

      expect(element.find('span.timer').text()).toBe('00:24');

    }));


    it('should stop until 00:00', inject(function ($interval) {

      var linkFn = $compile('<pomodoro-timer></pomodoro-timer>');
      var element = linkFn($rootScope);

      $rootScope.startValue = 25 * 1000;
      $rootScope.$apply();

      expect(element.find('span.timer').text()).toBe('00:25');

      element.find('button.start').click();

      // Time passes
      $interval.flush(1000);

      expect(element.find('span.timer').text()).toBe('00:24');

      // Time passes
      $interval.flush(24000);

      expect(element.find('span.timer').text()).toBe('00:00');

      $interval.flush(1000);

      expect(element.find('span.timer').text()).toBe('00:00');

    }));

  });


});