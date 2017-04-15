(function(){
	'use strict';

	angular.module('ShoppingListApp', [])
	.controller('ShoppingListController', ShoppingListController);

	ShoppingListController.$inject = ['$scope'];

	var shoppingList1 = ['Mike', 'Donuts', 'Cookies', 'Chocolate', 'Peanut Butter',
		'Pepto Bismol', 'Pepto Bismol (Chocolate flavor)', 'Pepto Bismol (Cookies flavor)'];

	var shoppingList2 = [{name: 'Milk', quantity: '2'}, {name: 'Cookies', quantity: '20'},
		{name: 'Donuts', quantity: '13'}, {name: 'Chocolate', quantity: '7'}];

	function ShoppingListController($scope){
		$scope.shoppingList1 = shoppingList1;
		$scope.shoppingList2 = shoppingList2;

		$scope.addItem = function(){
			var newItem = {
				name: $scope.newItemName,
				quantity: $scope.newItemQuantity
			};

			$scope.shoppingList2.push(newItem);
		};
	};
})();