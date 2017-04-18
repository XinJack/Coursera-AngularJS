(function(){
	'use strict';

	angular.module('ShoppingListPromiseApp', [])
	.controller('ShoppingListController', ShoppingListController)
	.service('ShoppingListService', ShoppingListService)
	.service('WeightLossFilterService', WeightLossFilterService);

	ShoppingListController.$inject = ['ShoppingListService'];
	function ShoppingListController(ShoppingListService){
		var list = this;
		list.items = ShoppingListService.getItems();

		list.addItem = function(){
			ShoppingListService.addItem(list.itemName, list.itemQuantity);
		};

		list.removeItem = function(index){
			ShoppingListService.removeItem(index);
		};
	};

	ShoppingListService.$inject = ['WeightLossFilterService', '$q'];
	function ShoppingListService(WeightLossFilterService, $q){
		var service = this;
		var items = [];
		service.getItems = function(){
			return items;
		};

		service.addItem = function(name, quantity){
			// var promise = WeightLossFilterService.checkName(name);
			// promise.then(function(result){
			// 	var nextPromise = WeightLossFilterService.checkQuantity(quantity);
			// 	nextPromise.then(function(result){
			// 		var item = {'name': name, 'quantity': quantity};
			// 		items.push(item);
			// 	}, function(msg){
			// 		console.log(msg);
			// 	});
			// }, function(msg){
			// 	console.log(msg);
			// });

			// var promise = WeightLossFilterService.checkName(name);
			// promise.then(function(result){
			// 	return WeightLossFilterService.checkQuantity(quantity);
			// }).then(function(result){
			// 	items.push({'name': name, 'quantity': quantity});
			// }).catch(function(msg){
			// 	console.log(msg);
			// });

			var namePromise = WeightLossFilterService.checkName(name);
			var quantityPromise = WeightLossFilterService.checkQuantity(quantity);
			$q.all([namePromise, quantityPromise])
			.then(function(result){
				items.push({'name': name, 'quantity': quantity});
			}, function(msg){
				console.log(msg);
			});
		};

		service.removeItem = function(index){
			items.splice(index, 1);
		};
	}

	WeightLossFilterService.$inject = ['$q', '$timeout'];
	function WeightLossFilterService($q, $timeout){
		var service = this;

		service.checkName = function(name){
			var deferred = $q.defer();
			var result = {
				message: ''
			};
		
			$timeout(function(){
				if(name.toLowerCase().indexOf('cookies') == -1){
					deferred.resolve(result);	
				}else{
					result.message = 'You should keep away from cookies';
					deferred.reject(result);
				}
			}, 2000);

			return deferred.promise;
		};

		service.checkQuantity = function(quantity){
			var deferred = $q.defer();
			var result = {
				message: ''
			};
			$timeout(function(){
				if(quantity < 6){
					deferred.resolve(result);	
				}else{
					result.message = 'You should not eat so much';
					deferred.reject(result);
				}
			}, 1000);

			return deferred.promise;
		};
	};
})();