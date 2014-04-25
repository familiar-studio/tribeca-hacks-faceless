'use strict';

angular.module('tribecaApp')
  .factory('ItemsService', function ($firebase) {
    // Service logic
    // ...
    var itemRef = new Firebase("https://flickering-fire-258.firebaseio.com/FaceGlasses");
    return $firebase(itemRef);
  });
