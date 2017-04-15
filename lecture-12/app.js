(function(){
	'use strict';

	angular.module('MsgApp', [])
	.filter('replace', replaceFilterFactory)
	.filter('truth', truthFilterFactory)
	.controller('MsgController', MsgController);

	MsgController.$inject = ['$scope', '$filter', 'replaceFilter'];

	function MsgController($scope, $filter, replaceFilter){
		$scope.name = "Jack";
		$scope.currentState = "hungry";
		$scope.cost = 23.4;
		$scope.feed = function(){
			$scope.currentState = "fed";
		};
		$scope.displayMsg = function(){
			var msg = "I am so hungry that I can eat up an elephant";
			var output = $filter('uppercase')(msg);
			return output;
		};
		$scope.replaceMsg = function(){
			var msg = "I am so hungry that I can eat up an elephant";
			return replaceFilter(msg);
		};
	};

	function replaceFilterFactory(){
		return function(input){
			input = input || '';
			input = input.replace('so', 'very');
			return input;
		};
	};

	function truthFilterFactory(){
		return function(input, target, replace){
			input = input || '';
			input = input.replace(target, replace);
			return input;
		};
	};
})();