// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'tabs.html'
  })

  .state('tab.page1', {
    url: '/page1',
    views: { 
      'page1' : {
        templateUrl: 'page1.html',
        controller: 'page1Controller'
      }
    }
  })

  .state('tab.page2', {
    url: '/page2',
    views: { 
      'page2' : {
        templateUrl: 'page2.html',
        controller: 'page2Controller'
      }
    }
  });

  $urlRouterProvider.otherwise('/tab/page1');
});


