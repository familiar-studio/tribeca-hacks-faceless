'use strict';

describe('Directive: odometer', function () {

  // load the directive's module
  beforeEach(module('tribecaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<odometer></odometer>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the odometer directive');
  }));
});
