'use strict';

angular.module('tribecaApp')
  .controller('MainCtrl', function ($scope, $firebase, ItemsService, Colors) {



    var itemRef = new Firebase("https://flickering-fire-258.firebaseio.com/FaceGlasses");
    return $firebase(itemRef);


    $scope.$watch('faces', function () {
  		var total = 0;
  		var remaining = 0;
  		$scope.faces.$getIndex().forEach(function (index) {
  			var todo = $scope.faces[index];
  			// Skip invalid entries so they don't break the entire app.
  			// if (!todo || !todo.title) {
  			// 	return;
  			// }

  			total++;
  			// if (todo.completed === false) {
  			// 	remaining++;
  			// }
  		});
  		$scope.totalCount = total;
  	}, true);

    // Automatically syncs everywhere in realtime

    // peopleRef.update([{name: 'Alex', age: 35}, {name: 'Jon', age: 45}]);
    // peopleRef.update();

    //$scope.messages = service.getMessages();


    //ItemsService.$bind($scope, "people");

    //$scope.colors = Colors.getRandomColors();

    //$scope.people  = ItemsService.getItems();


    //var testData = new Firebase("https://flickering-fire-258.firebaseio.com/testData");
    // Automatically syncs everywhere in realtime

    // peopleRef.update([{name: 'Alex', age: 35}, {name: 'Jon', age: 45}]);
    // peopleRef.update();



    //$scope.people  = $firebase(peopleRef);

    //$scope.people = $firebase(testData);


    // $scope.people.$on('loaded', function(){
    //
    //
    //
    //
    // });

    var colors = ['#73A7CC','#286B99', '#A9FFF4', '#FF8169', '#CC7473'];


    $scope.randomColor = function () {

    //  var rand = Math.floor((Math.random()*10)+1);
      return Colors.getRandomColor();
    }

    $scope.random = function() {
        return 0.5 - Math.random();
    }

    // $scope.people.$on("change", function() {
    //   //console.log("A remote change was applied locally!");
    //   $scope.playSound();
    // });

    $scope.playSound = function () {

      var sounds = ['http://www.freesfx.co.uk/rx2/mp3s/9/10884_1385980628.mp3',
        'http://www.freesfx.co.uk/rx2/mp3s/9/10780_1381246351.mp3',
        'http://www.freesfx.co.uk/rx2/mp3s/9/10886_1385980636.mp3',
        'http://www.freesfx.co.uk/rx2/mp3s/7/8303_1352726862.mp3',
        'http://www.freesfx.co.uk/rx2/mp3s/7/8302_1352726861.mp3',
        'http://www.freesfx.co.uk/rx2/mp3s/7/8290_1352726667.mp3',
        'http://www.freesfx.co.uk/rx2/mp3s/5/6306_1341227281.mp3',
        'http://www.freesfx.co.uk/rx2/mp3s/9/10629_1377615621.mp3',
        'http://www.freesfx.co.uk/rx2/mp3s/9/10610_1376669791.mp3',
        'http://www.freesfx.co.uk/rx2/mp3s/9/10906_1386516492.mp3',
        'http://www.freesfx.co.uk/rx2/mp3s/9/10072_1361281386.mp3'
        ]

      var rand = Math.floor((Math.random()*10)+1);
      var snd = new Audio(sounds[rand]); // buffers automatically when created
      snd.play();

    }









    //$scope.people = ItemsService.getItems()

    // $scope.addPerson = function() {
    //
    //     $scope.people.$add({name: 'Jon', age: 45});
    // }


    //var glassesRef = new Firebase("https://flickering-fire-258.firebaseio.com/glasses");

    //$scope.glasses = $firebase(glassesRef);


    // $scope.addGlasses = function() {
    //
    //     $scope.people.$add({name: 'Jon', age: 45});
    // }


    $scope.faces = $firebase(itemRef);


  });
