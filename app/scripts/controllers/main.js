'use strict';

angular.module('tribecaApp')
  .controller('MainCtrl', function ($scope, $firebase, ItemsService, Colors) {


    $scope.faces = [{}];


    var itemRef = new Firebase("https://flickering-fire-258.firebaseio.com/FaceGlasses");


    var words = ['Baller','Busted', 'Classy', 'Fatty', 'Fierce', 'Fratty', 'Grimey', 'Gutter', 'Hipster', 'Jap', 'Neurotypical', 'Trashy', 'Ratchet', 'Regs', 'Shady', 'Sketchy', 'WASP'];




    $scope.$watch('faces', function () {
  		var total = 0;
  		var remaining = 0;
  		$scope.faces.$getIndex().forEach(function (index) {
  			var face = $scope.faces[index];
  			// Skip invalid entries so they don't break the entire app.
  			// if (!todo || !todo.title) {
  			// 	return;
  			// }

        //$scope.faces.color = Colors.getRandomColor();
        if (!$scope.faces[index].faceSVG) {
          var rand = Math.floor((Math.random()*5)+1);
          $scope.faces[index].faceSVG = '/faces/face'+rand+'.svg';
        }

        if (!$scope.faces[index].word) {
          var rand2 = Math.floor((Math.random()*16)+1);
          $scope.faces[index].word = words[rand2];
        }




  			total++;
  			// if (todo.completed === false) {
  			// 	remaining++;
  			// }
  		});
  		$scope.totalCount = total;
  	}, true);


    $scope.addFace = function() {

      $scope.faces.$add({name: 'test', date: 'today'});
    };

    $scope.removeFace = function(id) {
      console.log('removed this',id);

      var deleteSound = new Audio('/sounds/delete.wav'); // buffers automatically when created
      deleteSound.play();

      $scope.faces.$remove(id);
    };


    $scope


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

    $scope.colors = ['#73A7CC','#286B99', '#A9FFF4', '#FF8169', '#CC7473'];




    $scope.randomNumber = function() {
      return Math.floor((Math.random()*4)+1);
    }



    $scope.playSound = function () {

      // var sounds = ['http://www.freesfx.co.uk/rx2/mp3s/9/10884_1385980628.mp3',
      //   'http://www.freesfx.co.uk/rx2/mp3s/9/10780_1381246351.mp3',
      //   'http://www.freesfx.co.uk/rx2/mp3s/9/10886_1385980636.mp3',
      //   'http://www.freesfx.co.uk/rx2/mp3s/7/8303_1352726862.mp3',
      //   'http://www.freesfx.co.uk/rx2/mp3s/7/8302_1352726861.mp3',
      //   'http://www.freesfx.co.uk/rx2/mp3s/7/8290_1352726667.mp3',
      //   'http://www.freesfx.co.uk/rx2/mp3s/5/6306_1341227281.mp3',
      //   'http://www.freesfx.co.uk/rx2/mp3s/9/10629_1377615621.mp3',
      //   'http://www.freesfx.co.uk/rx2/mp3s/9/10610_1376669791.mp3',
      //   'http://www.freesfx.co.uk/rx2/mp3s/9/10906_1386516492.mp3',
      //   'http://www.freesfx.co.uk/rx2/mp3s/9/10072_1361281386.mp3'
      //   ]

      var rand = Math.floor((Math.random()*5)+1);
      var snd = new Audio('/sounds/'+rand+'.wav'); // buffers automatically when created
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

    $scope.faces.$on("change", function() {
      //console.log("A remote change was applied locally!");
      $scope.playSound();
    });


  });
