(function(){
	'use strict';

	angular.module('MenuCategoryApp', [])
	.controller('MenuCategoryController', MenuCategoryController)
	.service('MenuCategoryService', MenuCategoryService)
	.constant('baseUrl', 'http://davids-restaurant.herokuapp.com');

	MenuCategoryController.$inject = ['MenuCategoryService'];
	function MenuCategoryController(MenuCategoryService){
		var menu = this;
		var promise = MenuCategoryService.getMenuItems();
		promise.then(function(res){
			menu.categories = res.data;
		}).catch(function(msg){
			console.log(msg);
		});

		menu.logCategoryMsg = function(category){
			var promise = MenuCategoryService.getMenuItemsByCategory(category);
			promise.then(function(res){
				console.log(res.data);
			}).catch(function(msg){
				console.log(msg);
			});
		};
	};

	MenuCategoryService.$inject = ['$http', 'baseUrl'];
	function MenuCategoryService($http, baseUrl){
		var service = this;

		service.getMenuItems = function(){
			var promise = $http({
				method: 'GET',
				url: (baseUrl) + '/categories.json'
			});
			return promise;
		};

		service.getMenuItemsByCategory = function(category){
			var promise = $http({
				method: 'GET',
				url: (baseUrl) + '/menu_items.json',
				params: {
					'category': category
				}
			});
			return promise;
		}
	};
})();