(function(){
	'use strict';

	angular.module('ShoppingListApp', [])
	.controller('AddItemController', AddItemController)
	.controller('ShowShoppingListController', ShowShoppingListController)
	.service('ShoppingListService', ShoppingListService);

	AddItemController.$inject = ['ShoppingListService'];
	function AddItemController(ShoppingListService){
		var itemAdder = this;

		itemAdder.addItem = function(){
			ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
		};
	};

	ShowShoppingListController.$inject = ['ShoppingListService'];
	function ShowShoppingListController(ShoppingListService){
		var itemsShower = this;

		itemsShower.items = ShoppingListService.getItems();

		itemsShower.remove = function(index){
			ShoppingListService.removeItem(index);
		};
	}

	function ShoppingListService(){
		var items = [];

		this.addItem = function(itemName, itemQuantity){
			items.push({'itemName': itemName, 'itemQuantity': itemQuantity});
		};

		this.getItems = function(){
			return items;
		};

		this.removeItem = function(index){
			items.splice(index, 1);
		};
	};
})();