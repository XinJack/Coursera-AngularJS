(function(){
	'use strict';

	angular.module('myFirstApp', [])
	.controller('myFirstController', function($scope){
		$scope.name = "JackChen";
		$scope.displaySomthing = function(){
			return "Something";
		};
	});
})();