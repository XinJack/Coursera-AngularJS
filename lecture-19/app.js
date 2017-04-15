(function(){
	// var parent = {
	// 	value: 'parentValue',
	// 	obj: {
	// 		objValue: 'parentObjValue'
	// 	},
	// 	walk: function(){
	// 		console.log('Walking!');
	// 	}
	// };

	// var child = Object.create(parent);
	// console.log('value of child is ', child.value);
	// console.log('objValue of child is ', child.obj.objValue);
	// console.log('value of parent is ', parent.value);
	// console.log('objValue of parent is ', parent.obj.objValue);
	// console.log(parent);
	// console.log(child);

	// console.log('##Change child.value=childValue');
	// console.log('##Change child.obj.objValue=childObjValue');
	// child.value = 'childValue';
	// child.obj.objValue = 'childObjValue';
	// console.log('value of child is ', child.value);
	// console.log('objValue of child is ', child.obj.objValue);
	// console.log('value of parent is ', parent.value);
	// console.log('objValue of parent is ', parent.obj.objValue);
	// console.log(parent);
	// console.log(child);

	// console.log('##Create a grandChild');
	// var grandChild = Object.create(child);
	// console.log('value of grandChild is', grandChild.value);
	// console.log('objValue of grandChild is', grandChild.obj.objValue);
	// grandChild.walk();
	// console.log(grandChild);

	function Car(name){
		this.name = name;
		console.log('this is ', this);
	}

	var car = new Car('F');
	Car('D');
})();