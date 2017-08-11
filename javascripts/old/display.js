console.log("display.js");

// function showCats(catFood) {
// 	let catPrint = document.getElementById("brandName");
// 	console.log("CatPrint");
// }

// function showDogs(dogFood) {
// 	let dogPrint = document.getElementById("dogFood");
// 	console.log("dogPrint");
// }
// CatFood.loadCatFood(showCats)
// DogFood.loadDogFood(showDogs)

//Second Attempt
// let showDogFood = (dogFoodData) => {
// 	let dogFoodDisplay = document.getElementById("DFbrandName");

// 	dogFoodData.forEach((dogFood) => {
// 		let dFoodCard = buildCard(dogFood);
// 		console.log("dFoodCard", dFoodCard);
// 		dogFoodDisplay.innerHTML += dFoodCard;
// 	});
// }

// let buildCard = (dogFood) => {
// 	let dCard = "",
// 	divWrap = `<div class="dfClass">Did the build work?</div>`,
// 	dfFoodBrand = `<h1 class="DfoodName">${dogFood.name}</h1>`;
// 	// dfFoodType = `<h2 class="type">${dogFood.type}</h2>`,
// 	// dfFoodVol = `<h3 class="vol">${dogFood.name}</h3>`,
// 	// dfFoodPrice = `<p class="price">${dogFood.price}</p></div>`;

// 	return dCard;
// 	console.log("dCard", dCard);
// }

// let dogFoodPromse = DogFood.loadDogFood()
// .then (
// 	(resolve) => {
// 		showDogFood(resolve);
// 	},
// 	(reject) => {
// 		console.error("Rejected", reject);
// 	});
