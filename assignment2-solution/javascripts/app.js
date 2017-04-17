(function(){
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService){
		var toBuyCtrl = this;

		toBuyCtrl.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

		toBuyCtrl.buyItem = function(index){
			ShoppingListCheckOffService.buyItem(index);
		};
	};

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService){
		var alreadyBoughtCtrl = this;

		alreadyBoughtCtrl.itemsAreadyBought = ShoppingListCheckOffService.getItemsAreadyBought();

	};

	function ShoppingListCheckOffService(){
		var service = this;

		var itemsToBuy = [
			{name: 'cookies', quantity: 10},
			{name: 'chocolates', quantity: 13},
			{name: 'candy', quantity: 20},
			{name: 'apple juice', quantity: 3},
			{name: 'banana', quantity: 7}
		];

		var itemsAreadyBought = [];

		service.buyItem = function(index){
			if(index < 0 || index >= itemsToBuy.length){
				return;
			}
			var item = itemsToBuy.splice(index, 1);
			itemsAreadyBought.push(item[0]);
		};

		service.getItemsToBuy = function(){
			return itemsToBuy;
		};

		service.getItemsAreadyBought = function(){
			return itemsAreadyBought;
		};
	};

})();