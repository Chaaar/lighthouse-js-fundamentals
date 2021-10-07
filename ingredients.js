const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

console.log("Banana bread ingredients ");
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}


console.log("Banana bread ingredients: ")
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}


console.log("Banana bread ingredients but backwards: ")
for (let i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}