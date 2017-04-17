(function(){
	'use strict';

	angular.module('ShoppingListApp', [])
	.controller('ShoppingListController1', ShoppingListController1)
	.controller('ShoppingListController2', ShoppingListController2)
	.factory('ShoppingListFactory', ShoppingListFactory);


	ShoppingListController1.$inject = ['ShoppingListFactory'];
	function ShoppingListController1(ShoppingListFactory){
		var controller1 = this;
		var service = ShoppingListFactory();

		controller1.addItem = function(){
			service.addItem(controller1.itemName, controller1.itemQuantity);
		};

		controller1.remove = function(index){
			service.removeItem(index);
		};

		controller1.items = service.getItems();
	};

	ShoppingListController2.$inject = ['ShoppingListFactory'];
	function ShoppingListController2(ShoppingListFactory){
		var controller2 = this;
		var service = ShoppingListFactory(3);

		controller2.addItem = function(){
			try{
				service.addItem(controller2.itemName, controller2.itemQuantity);
			}catch(e){
				controller2.errorMsg = e;
			}		
		};

		controller2.remove = function(index){
			service.removeItem(index);
		};

		controller2.items = service.getItems();
	};

	function ShoppingListFactory(){
		var factory = function(maxLength){
			return new ShoppingListService(maxLength);
		};
		return factory;
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