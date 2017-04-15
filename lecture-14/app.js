(function(){
	'use strict';

	angular.module('CounterApp', [])
	.controller('CounterController', CounterController);

	CounterController.$inject = ['$scope'];

	function CounterController($scope){
		$scope.Counter = 0;
		$scope.counter = 0;

		$scope.logWatchers = function(){
			console.log($scope.$$watchersCount);
		};

		$scope.upCounterOnce = function(){
			$scope.Counter = 1;
		};

		$scope.upCounter = function(){
			$scope.counter++;
		};

		$scope.$watch(function(){
			console.log('Digest fired');
		});

		// $scope.$watch('Counter', function(newValue, oldValue){
		// 	console.log('Counter new value:', newValue);
		// 	console.log('Counter old value:', oldValue);
		// });

		// $scope.$watch('counter', function(newValue, oldValue){
		// 	console.log('counter new value:', newValue);
		// 	console.log('counter old value:', oldValue);
		// });
	};
})();