console.log("Food4Dogs.js");

function showDogFood(dogFoodArray) {
	let dfDomElement = document.getElementById("dogFood");
	let dfEmptyElement = "";
	for (let i = 0; i < dogFoodArray.length; i++) {
		let foodWrap = document.createElement("div")
		dfDomElement.appendChild(foodWrap);
		let foodBrand = document.createElement("h1");
		foodBrand.innerHTML = dogFoodArray[i].name;
		foodWrap.appendChild(foodBrand);

		var type = dogFoodArray[i].types;
		type.forEach(function(element){
		var foodType = document.createElement("h2");
		foodType.innerHTML = element.type;
		// console.log("volumes", element.volumes);
		foodWrap.appendChild(foodType);

		element.volumes.forEach(function(element){
			var volume = document.createElement("p");
			volume.innerHTML += element.name + `<br>` + element.price;
			foodWrap.appendChild(volume);
		})
	})
		

}
}

DogFood.loadDogFood(showDogFood);

	// dfEmptyElement += `<div class=foodWrap>`;
	// dfEmptyElement += `<h1>${getdogFood.name}</h1>`;
	// dfEmptyElement += `<h2>${getdogFood.types[i].type}</h2>`;
		// dfEmptyElement += `<p>${getdogFood.types[i].type.volumes.price}</p>`;
	// // dfEmptyElement += `<p>${getdogFood.types[i].type[i].volumes[i].price}</p>`;
	// dfEmptyElement += `</div>`;
	// dfDomElement.innerHTML = dfEmptyElement;

// version 1
// let colorPromise = Legos.loadLegos()
// .then(
// 	(resolve) => {
// 	//do something
// 	// let newItem = {LegoName: "Austin's Pick", ColorHex: "a3a3d1", YearFrom: "2009", YearTo: "Present"}
// 	// resolve.push(newItem);
// 	showItems(resolve);
// },
// (reject) => {
// 	console.error("You've been REJECTED!!!", reject);
// 	//do something else for a backup plan
// });

// function showDogFoods (privateDogFood){
// 	let dogPrint = document.getElementById("dogFood")
// 	privateDogFood.forEach(function(dog_brands,){
// 		privateDogFood.name.forEach(function(dog_brands,){
// 			console.log("privateDogFood", name);
// 		})
		
// 	})
	
// };

// showDogFoods();