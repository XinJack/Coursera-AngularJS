(function(){
	'use strict';

	angular.module('BindApp', [])
	.controller('BindController', BindController);

	BindController.$inject = ['$scope'];

	function BindController($scope){
		$scope.firstName = 'Jack';
		// $scope.fullName = '';

		$scope.logNumberOfWatchers = function(){
			console.log('# of watchers:', $scope.$$watchersCount);
		};

		$scope.setFullName = function(){
			$scope.fullName = $scope.firstName + ' Chen';
		};

		$scope.logFirstName = function(){
			console.log('first name is ', $scope.firstName);
		};

		$scope.logFullName = function(){
			console.log('full name is ', $scope.fullName);
		};
	};
})();