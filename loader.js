console.log("loader");

var DogFood = (function () {
	var dogFoodArray = [];
	return {
		loadDogFood: function (callbackToInvoke){
			let loader = new XMLHttpRequest();
			loader.addEventListener("load", function () {
				dogFoodArray = JSON.parse(this.responseText).dog_brands;
				callbackToInvoke(dogFoodArray);
			});
			loader.open("GET", "dogFood.JSON");
			loader.send();
			
		}
	}

})();

var CatFood = (function () {
	var catFoodArray = [];
	return {
		loadCatFood: function (callbackToInvoke){
			let loader = new XMLHttpRequest();
			loader.addEventListener("load", function () {
				catFoodArray = JSON.parse(this.responseText).cat_brands;
				callbackToInvoke(catFoodArray);
			});
			loader.open("GET", "catFood.JSON");
			loader.send();
			
		}
	}

})();

// var DogFood = (function () {
// var privateDogFood = []

// return {
// 	loadDogFood: function (callbackFunction) {
// 		var loader = new XMLHttpRequest();
// 		loader.addEventListener("load", function() {
// 			privateDogFood = JSON.parse(this.responseText).dog_brands;
// 			console.log("privateDogFood", privateDogFood);
// 			callbackFunction(privateDogFood);
// 		});
// 		loader.open("GET", "dogFood.JSON");
// 		loader.send();
// 	}
// }
// })();
