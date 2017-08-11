console.log("DogFood.js");
  // thrid ATTEMPT
  var DogFood = ((fullDogFood) => {
  let dogFoodArray = [];
  let parseData = (data) => {
  	data.dog_brands.forEach((element) =>{
  		dogFoodArray.push(element)
  	});
  	return dogFoodArray;
  }
  fullDogFood.getDogFood = () => {
  	return dogFoodArray;
  }
  fullDogFood.loadDogFood = () => {
  	let request = new XMLHttpRequest();
  	request.onload = function () {
  	let data = JSON.parse(this.responseText).dog_brands;
  	parseData(data);
  }
  request.open('GET', "dogFood.JSON");
  request.send();
};
	console.log("dogFoodArray", dogFoodArray);
 return fullDogFood;
})(DogFood || {});

      // List of Name Brands
//       var nameBrand = document.getElementById("dogFood");
//       var DFnameOutput = "";
//       for (var i = 0; i < dogFood.length; i++){
//       	var currentDogFood = dogFood[i];

//       	DFnameOutput += `<div class="dfClass">`;
//       	DFnameOutput += `<h1 class="foodName">${currentDogFood.name}</h1>`;
//       	DFnameOutput += `<h2 class="type">${currentDogFood.types[i].type}</h2>`;
//       	DFnameOutput += `<h3 class="vol">${currentDogFood.types[i].volumes[i].size}</h3>`;
//       	DFnameOutput += `<p class="price">${currentDogFood.types[i].volumes[i].price}</p>`;
//       	DFnameOutput += `</div>`;
//       }
//       console.log("dogFood", DFnameOutput);
//       nameBrand.innerHTML += DFnameOutput;
//
//     }
//   }
// })();

//Second Attempt Didn't like the result

// var DogFood = ((originalDogFood) => {
//   let dogFoodItems = [];
//   let parseData = (data) => {
//   	data.dog_brands.forEach((element)=> {
//   		dogFoodItems.push(element)
//   	});
//   	return dogFoodItems;
//   }
//   originalDogFood.getDogFood = () => {
//   	return dogFoodItems;
//   }
//   originalDogFood.loadDogFood = () => {
//   	return new Promise((resolve, reject) => {
//   		let request = new XMLHttpRequest();
//   		request.onload = function () {
//   			if(request.status === 200){
//   				let data = JSON.parse(request.responseText);
//   				resolve(parseData(data));
//   			} else {
//   				reject(new Error("Error Will Robinson",reject));
//   			}
//   		};
//   		request.open("GET", "dogFood.JSON");
//   		request.send();
//   	});
//   };

//   return originalDogFood;
// })(DogFood || {});


  //First ATTEMPT
//   var DogFood = (function () {
//   let dogFood = [];

//   return {
//     loadDogFood: function () {
//       let loader = new XMLHttpRequest();
//       loader.addEventListener("load", function () {
//       dogFood = JSON.parse(this.responseText).dog_brands;
//       console.log("dogFood", dogFood);

//       // List of Name Brands
//       var nameBrand = document.getElementById("dogFood");
//       var DFnameOutput = "";
//       for (var i = 0; i < dogFood.length; i++){
//       	var currentDogFood = dogFood[i];

//       	DFnameOutput += `<div class="dfClass">`;
//       	DFnameOutput += `<h1 class="foodName">${currentDogFood.name}</h1>`;
//       	DFnameOutput += `<h2 class="type">${currentDogFood.types[i].type}</h2>`;
//       	DFnameOutput += `<h3 class="vol">${currentDogFood.types[i].volumes[i].size}</h3>`;
//       	DFnameOutput += `<p class="price">${currentDogFood.types[i].volumes[i].price}</p>`;
//       	DFnameOutput += `</div>`;
//       }
//       console.log("dogFood", DFnameOutput);
//       nameBrand.innerHTML += DFnameOutput;
//       });
//       loader.open("GET", "dogFood.JSON")
//       loader.send();
//     }
//   }
// })();