// (function(){
// 	'use strict';

// 	angular.module('DIApp', [])
// 	.controller('DIController', DIController);

// 	DIController.inject = ['$scope', '$filter'];

// 	function DIController($scope, $filter){
// 		$scope.name = "Jack";
// 		var upCase = $filter('uppercase');
// 		$scope.upper = function(){
// 			$scope.name = upCase($scope.name);
// 		};
// 	};
// })();
!function(){"use strict";function a(a,b){a.name="Jack";var c=b("uppercase");a.upper=function(){a.name=c(a.name)}}angular.module("DIApp",[]).controller("DIController",a),a.$inject=["$scope","$filter"]}();