'use strict';

angular.module('tribecaApp')
  .directive('fill-color', function () {
    return {
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the svg directive');

        var colors = ['#73A7CC','#286B99', '#A9FFF4', '#FF8169', '#CC7473'];


        console.log('colors');
        var rand = Math.random(5);
        element.attr('fill', '#73A7CC');
      }
    };
  });
