console.log("food4Cats.js");

function showCatFood(catFoodArray) {
	let cfDomElement = document.getElementById("catFood");
	let cfEmptyElement = "";
	for (let i = 0; i < catFoodArray.length; i++) {
		let foodWrap = document.createElement("div")
		cfDomElement.appendChild(foodWrap);
		let foodBrand = document.createElement("h1");
		foodBrand.innerHTML = catFoodArray[i].name;
		foodWrap.appendChild(foodBrand);

		var type = catFoodArray[i].types;
		type.forEach(function(element){
		var foodType = document.createElement("h2");
		foodType.innerHTML = element.type
		console.log("volumes", element.volumes);
		foodWrap.appendChild(foodType);

		element.volumes.forEach(function(element){
			var volume = document.createElement("p");
			volume.innerHTML += element.name + " " + element.price;
			foodWrap.appendChild(volume);
		})
	})
		

}
}

CatFood.loadCatFood(showCatFood);