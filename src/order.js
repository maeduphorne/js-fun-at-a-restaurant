
function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3){
  deliveryOrders.push(order);
}
};

function refundOrder(orderNumber, deliveryOrders){
  for (var i = 0; i < deliveryOrders.length; i++){
    if (orderNumber === deliveryOrders[i].orderNumber){
      deliveryOrders.splice(i, 1);
    }
  }
}

function listItems(orders){
  var orderItems = []
  for (var i = 0; i < orders.length; i++){
      orderItems.push(orders[i].item);
    }
    return orderItems.join(', ');
}

function searchOrder(deliveryOrders, order) {
  var orderItems = [];
  for (var i = 0; i < deliveryOrders.length; i++){
    orderItems.push(deliveryOrders[i].item);
  }
  if (orderItems.includes(order)){
  return true;
} else {
  return false;
  }
}


module.exports = {
   takeOrder,
   refundOrder,
   listItems,
   searchOrder
}
