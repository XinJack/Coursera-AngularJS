(function(){
	'use strict';

	angular.module("nameCalculator", [])
	.controller("nameCalculatorController", function($scope){
		$scope.name = "";
		$scope.totalValue = 0;
		$scope.calculateTotalValue = function(){
			var totalValue  = calculateTotalValueOfString($scope.name);
			$scope.totalValue = totalValue;
		};
		function calculateTotalValueOfString(string){
			var totalValue = 0;
			for(let i = 0; i < string.length; ++i){
				totalValue += string.charCodeAt(i);
			}
			return totalValue;
		};
	});
})();