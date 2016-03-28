angular.module('starter.controllers', ['starter.factories'])
.controller('page1Controller', ['$scope', 'factories', function($scope, factories){
	
	$scope.animations = factories.animations;

}])

.controller('page2Controller', ['$scope', function($scope){
	
}]);