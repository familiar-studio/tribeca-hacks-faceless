'use strict';

angular.module('tribecaApp')
  .controller('D3Ctrl', function ($scope, $firebase) {
     $scope.exampleData = [];

     var testRef = new Firebase("https://flickering-fire-258.firebaseio.com/testData");


    $scope.test = $firebase(testRef);


     //$scope.exampleData.push({values:  $scope.test})

    $scope.exampleData = [
                {
                    "key": "Series 1",
                    "values": [ [ 1025409600000 , 0], [ 1330491600000 , 93.388148670744]]
                }];



    //$scope.exampleData[0].values[0] = [1025409600000 , 999999999];

    var result = [];

    //  for(var i in $scope.test) {
    //    console.log(i);
    //    result.push([$scope.test[i].name, $scope.test[i].score]);
    //
    // }



    //$scope.exampleData =  $scope.test;
    $scope.result =  $scope.test;

  });
