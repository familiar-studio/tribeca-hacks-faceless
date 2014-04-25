'use strict';

describe('Controller: PaperCtrl', function () {

  // load the controller's module
  beforeEach(module('tribecaApp'));

  var PaperCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PaperCtrl = $controller('PaperCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
