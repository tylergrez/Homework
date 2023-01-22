const pizzaPlace = "Tyler's Pizza Joint";
let numberOfToppings = 8;

console.log(pizzaPlace, typeof pizzaPlace);
console.log(numberOfToppings, typeof numberOfToppings);
// Will need to be a template literal // console.log("Hello! Welcome to " + pizzaPlace + ". " + "We offer up to " + numberOfToppings + " on your pizza.")

console.log(`Hello! Welcome to ${pizzaPlace}. We offer up to ${numberOfToppings} toppings on your pizza.`);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.")
} else {
  console.log("A whole lot of pizza.")
}

// bonus
// when the remainder of divided by 2 is 0
for (let i = 1; i <= numberOfToppings; i++) {
  if (i % 2 == 0) {
    console.log(`Hello! Welcome to ${pizzaPlace}. We offer up to ${i} toppings on your pizza.`);
  }
}

