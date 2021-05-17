
function createRestaurant(restaurantName) {
  var restaurant = {
    name: restaurantName,
    menus: {
      breakfast:[],
      lunch:[],
      dinner:[],
    },

  }
  return restaurant;
};


function addMenuItem(restaurant, menuItem) {
  if (menuItem.type === 'breakfast' && !restaurant.menus.breakfast.includes(menuItem)) {
    restaurant.menus.breakfast.push(menuItem);
  } else if (menuItem.type === 'lunch'&& !restaurant.menus.lunch.includes(menuItem)){
    restaurant.menus.lunch.push(menuItem);
  } else if (menuItem.type === 'dinner' && !restaurant.menus.dinner.includes(menuItem)){
    restaurant.menus.dinner.push(menuItem);
  }

};


function removeMenuItem(restaurant, nameRemove, typeRemove) {
var menuType = restaurant.menus[typeRemove]
if (menuType.length > 0){

for (var i = 0; i < menuType.length; i++){
  if (menuType[i].name === nameRemove) {
    menuType.splice(menuType[i], 1);
    return `No one is eating our ${nameRemove} - it has been removed from the ${typeRemove} menu!`
 }
}

} else {
  return `Sorry, we don't sell ${nameRemove}, try adding a new recipe!`
}
};



module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
