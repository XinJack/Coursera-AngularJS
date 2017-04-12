(function(){
	'use strict';

	angular.module('MsgApp', [])
	.controller('MsgController', MsgController);

	MsgController.$inject = ['$scope'];
	function MsgController($scope){
		$scope.name = "Jack";
		$scope.currentState = "hungry";
		$scope.displayMsg = function(){
			return "I am hungry";
		};
		$scope.feed = function(){
			$scope.currentState = "fed";
		};
	};
})();