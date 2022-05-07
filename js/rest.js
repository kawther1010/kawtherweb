const container = document.getElementById('container');
function openit(){
  container.style.display = "block";
}
function closeit(){
  container.style.display = "none";
}
function modifchicken(){
  document.getElementById("directions").innerHTML = "Mix all gradients together and place <br> chicken into reezer bag with marinade. <br> preferably overnight.";
  document.getElementById("ingredients1").innerHTML = "Olive oil <br><br> Garlic clove, minced <br><br> Worcetershire sauce <br><br> Pepper";
  document.getElementById("ingredients2").innerHTML = "50ml/g <br><br> 2 <br><br> 10ml/g <br><br> 7g";
  document.getElementById("expanded__img").src = "steak.png";
}
function modifysalad(){
  document.getElementById("directions").innerHTML = "Mix the remaining flour with the cornstarch and baking powder. Season lightly with a tiny pinch of salt and pepper. Cut the potatoes into a little slices. <br> Lay the fish fillets on a paper towel and pat dry. Season lightly with a little sea salt.";
  document.getElementById("ingredients1").innerHTML = " Flour <br><br> Baking powder <br><br> potatoes <br><br> vegetable oil";
  document.getElementById("ingredients2").innerHTML = "55g <br><br> 8g <br><br> 2 pounds <br><br> 1 quart";
  document.getElementById("expanded__img").src = "seafoodsalad.png";
}
function modiffried(){
  document.getElementById("directions").innerHTML = "Slice potatoes into coins about 1/2cm thick. In a large pan over medium-high heat, heat oils. Add potatoes and season with rosemary, salt and pepper.";
  document.getElementById("ingredients1").innerHTML = "Baby potatoes <br><br> Vegetable oil <br><br> Garlic powder <br><br> Chilli powder";
  document.getElementById("ingredients2").innerHTML = "450g <br><br> 1 tbsp <br><br> 1 tsp <br><br> 1/2 tsp";
  document.getElementById("expanded__img").src = "fried.png";
}