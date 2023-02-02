const pizzaToppings = ["Onions", "Beef Pepperoni", "Mushrooms", "Chicken"]
function greetCustomer() {
  let message = 'Welcome to Tyler\'s Pizza Place. The toppings we offer are: ';
for (let topping of pizzaToppings) {
  message += `${topping}, `;
}
console.log(message)
}
function getPizzaOrder(size, crust, ...restToppings) {
   let messageTwo = `One ${size}, ${crust} crust pizza with ${restToppings} coming right up!`;
   console.log(messageTwo);
   const pizzaOrder = [size, crust, restToppings];
   return pizzaOrder;
}
function preparePizza (pizzaOrder) {
   console.log('Your pizza is cooking!');
   const pizza = {
      size: pizzaOrder[0],
      crust: pizzaOrder[1],
      toppings: pizzaOrder[2]
   };
  return pizza;
}
function servePizza(pizza) {
  console.log(`Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with ${pizza.toppings}. Enjoy!`)
  return pizza
}

greetCustomer();
let customerOrder = getPizzaOrder("large", "thick", "chicken", "mushrooms");
let cookedPizza = preparePizza(customerOrder);
servePizza (cookedPizza);
