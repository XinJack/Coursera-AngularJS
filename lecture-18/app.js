(function(){
	'use strict';

	var arr1 = [1,2,3,4,5,6,7,8,9,10];
	console.log('arr1 is ', arr1.toString());

	function above5(value){
		return value > 5;
	};

	var filteredArr1 = arr1.filter(above5);
	console.log('filteredArr1 is ', filteredArr1.toString());

	var arr2 = ['Mike', 'Donuts', 'Cookies', 'Chocolate', 'Peanut Butter',
		'Pepto Bismol', 'Pepto Bismol (Chocolate flavor)', 'Pepto Bismol (Cookies flavor)'];
	console.log('arr2 is ', arr2.toString());
	var searchString = 'Bismol';
	function containFilter(value){
		return value.indexOf(searchString) != -1;
	};
	var searchedArr2 = arr2.filter(containFilter);
	console.log('searchedArr2 is ', searchedArr2.toString());

	angular.module('ShoppingListApp', [])
	.controller('ShoppingListController', ShoppingListController);

	ShoppingListController.$inject = ['$scope'];

	var shoppingList1 = ['Mike', 'Donuts', 'Cookies', 'Chocolate', 'Peanut Butter',
		'Pepto Bismol', 'Pepto Bismol (Chocolate flavor)', 'Pepto Bismol (Cookies flavor)'];


	function ShoppingListController($scope){
		$scope.shoppingList1 = shoppingList1;
	};
})();