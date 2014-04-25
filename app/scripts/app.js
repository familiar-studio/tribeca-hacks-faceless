'use strict';

angular
  .module('tribecaApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/d3', {
        templateUrl: 'views/d3.html',
        controller: 'D3Ctrl'
      })
      .when('/paper', {
        templateUrl: 'views/paper.html',
        controller: 'PaperCtrl'
      })
      .when('/demographics', {
        templateUrl: 'views/demographics.html',
        controller: 'DemographicsCtrl'
      })
      .when('/analytics', {
        templateUrl: 'views/analytics.html',
        controller: 'AnalyticsCtrl'
      })
      .when('/signin', {
        templateUrl: 'views/signin.html',
        controller: 'SigninCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      return window.odometerOptions = {
        auto: false
      };
  });
