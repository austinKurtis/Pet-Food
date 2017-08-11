console.log("food.js");
var CatFood = (function () {
  let catFood = [];
  return {
    loadCatFood: function (callbackToInvoke) {
      let loader = new XMLHttpRequest();
    	loader.addEventListener("load", function () {
    	catFood = JSON.parse(this.responseText);
    	showCats(catFood);
      });
      loader.open("GET", "catFood.JSON")
      loader.send();
    }
  }
})();


