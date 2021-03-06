'use strict';

angular.module('tribecaApp')
  .directive('barChart', function (d3Service, $window, $timeout) {
    return {
      template: '<div></div>',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        d3Service.d3().then(function(d3) {
          // d3 is the raw d3 object

          var svg = d3.select(ele[0])
            .append('svg')
            .style('width', '100%');

          // Browser onresize event
          window.onresize = function() {
            scope.$apply();
          };

          // hard-code data
          scope.data = [
            {name: "Greg", score: 98},
            {name: "Ari", score: 96},
            {name: 'Q', score: 75},
            {name: "Loser", score: 48}
          ];

          // Watch for resize event
          scope.$watch(function() {
            return angular.element($window)[0].innerWidth;
          }, function() {
            scope.render(scope.data);
          });

          scope.render = function(data) {
            // our custom d3 code
          }
        });
      }
    };
  });
