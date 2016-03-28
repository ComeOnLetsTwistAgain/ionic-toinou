
angular.module('starter.factories', [])
.factory('factories', ['$http', function($http){
	
	var baseUrl = 'http://89.3.149.179:3000';
	var o = {
		animations: []
	};
	

	o.getAnimations = function(){
		return $http.get(baseUrl + '/animations').success(function(data){
			angular.copy(data, o.animations);
		})
	}

	return o;

}]);