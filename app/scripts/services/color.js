'use strict';

angular.module('tribecaApp')
  .factory('Colors', function () {
    // Service logic
    // ...

    var colors = ['#73A7CC','#286B99', '#A9FFF4', '#FF8169', '#CC7473'];

    // Public API here
    return {
      getRandomColors: function () {
        var rand = Math.floor((Math.random()*4)+1);
        return colors[rand];
      }
    };
  });
