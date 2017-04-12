(function(){
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope){
		$scope.lunchItems = "";
		$scope.message = "";
		$scope.fontColor = "";
		$scope.borderColor = {};

		$scope.checkLunchItems = function(){
			var lunchItems = $scope.lunchItems.split(',').filter(function(item){
				return item.length > 0;
			});

			if(lunchItems.length === 0){
				$scope.message = 'Please enter data first';
				$scope.fontColor = "text-danger";
				$scope.borderColor = {'border-color': 'red'};
			}else if(lunchItems.length <= 3){
				$scope.message = 'Enjoy!';
				$scope.fontColor = "text-success";
				$scope.borderColor = {'border-color': 'green'};
			}else{
				$scope.message = 'Too much!';
				$scope.fontColor = "text-success";
				$scope.borderColor = {'border-color': 'green'};
			}
		};

		$scope.reset = function(){
			$scope.lunchItems = "";
			$scope.message = "";
			$scope.fontColor = "";
			$scope.borderColor = {};
		};
	};

})();