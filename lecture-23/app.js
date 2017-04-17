(function(){
	'use strict';

	angular.module('ShoppingListApp', [])
	.controller('ShoppingListController', ShoppingListController)
	.provider('ShoppingListService', ShoppingListServiceProvider);

	ShoppingListController.$inject = ['ShoppingListService'];
	function ShoppingListController(ShoppingListService){
		var list = this;
		list.items = ShoppingListService.getItems();

		list.addItem = function(){
			try{
				ShoppingListService.addItem(list.itemName, list.itemQuantity);
			}catch(e){
				list.errorMsg = e;
			}
		};

		list.remove = function(index){
			ShoppingListService.removeItem(index);
		};
	};

	function ShoppingListServiceProvider(){
		var provider = this;
		provider.default = {
			maxLength: 10
		};
		provider.$get = function(){
			var service = new ShoppingListService(provider.default.maxLength);
			return service;
		};
	}

	function ShoppingListService(maxLength){
		var items = [];

		this.addItem = function(itemName, itemQuantity){
			if((maxLength === undefined) || ((maxLength !== undefined) && (items.length < maxLength))){
				items.push({'itemName': itemName, 'itemQuantity': itemQuantity});
			}else{
				throw new Error('# of items has reach ', maxLength);
			}
		};

		this.getItems = function(){
			return items;
		};

		this.removeItem = function(index){
			items.splice(index, 1);
		};
	};
})();
