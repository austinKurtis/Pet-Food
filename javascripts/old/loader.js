console.log("loader");
var DogFood = (function () {
var = privateDogFood = []
return {
	loadDogFood: function (callbackFunction) {
		let loader = new XMLHttpRequest();
		loader.addEventListener("load", function() {
			privateDogFood = JSON.parse(this.responseText).dog_brands;
			console.log("privateDogFood", privateDogFood);
			callbackFunction(privateDogFood);
		});
		loader.open("GET", "dogFood.JSON");
		loader.send();
	}
}
})();
