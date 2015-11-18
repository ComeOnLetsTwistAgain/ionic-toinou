angular.module('starter.routes', [])

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