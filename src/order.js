
function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3){
  deliveryOrders.push(order);
}
};

function refundOrder(orderNumber, deliveryOrders){
  // for loop
  for (var i = 0; i < deliveryOrders.length; i++){
    // if statement
    if (orderNumber === deliveryOrders[i].orderNumber){
  // splice method
      deliveryOrders.splice(i, 1);
    }
  }
}

function listItems(orders){
//define a variable and assign to an array of order item names
  var orderItems = []
  //for loop - intialize, condition, update value
  for (var i = 0; i < orders.length; i++){
      //then .push the object to the end of the array
      orderItems.push(orders[i].item);
    }
    //return array as a string - needs spaces
    return orderItems.join(', ');
}

function searchOrder(deliveryOrders, order) {
  // define an additional variable converting object items to an array
  var orderItems = [];
  // loop through the array deliveryOrders
  for (var i = 0; i < deliveryOrders.length; i++){
    // push item in each object from DeliveryOrders to the new orderItems array
    orderItems.push(deliveryOrders[i].item);
  }
  // if the array includes item,
  if (orderItems.includes(order)){
// then return true
  return true;
} else {
  // else, return false
  return false;
  }
}


module.exports = {
   takeOrder,
   refundOrder,
   listItems,
   searchOrder
}
