'use strict';

angular.module('tribecaApp')
  .directive('d3', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the d3 directive');
      }
    };
  });
