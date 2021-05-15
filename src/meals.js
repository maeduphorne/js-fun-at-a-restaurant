function nameMenuItem(name) {
  return `Delicious ${name}`;
};

function createMenuItem(menuItemName, price, type){
  var menuItem = {
    name: menuItemName,
    price: price,
    type: type
  }
  return menuItem
};

function addIngredients(ingredient, ingredients){
  if (!ingredients.includes(ingredient)) {
  return ingredients.push(ingredient);
}
};

function formatPrice(initialPrice){
  return `$${initialPrice}`;
};

function decreasePrice(price){
  var discount = (price * .10);
  var decreasedPrice = (price - discount);
  return decreasedPrice
}

function createRecipe(title, ingredients, menuItemType){
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
  return recipe
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
