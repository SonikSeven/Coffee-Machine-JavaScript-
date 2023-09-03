import * as readlineSync from 'readline-sync';

type Ingredients = {[key: string]: number};
type Options = {[key: number]: {[key: string]: number}};


function menu() {
  const ingredients = {"water": 400, "milk": 540, "coffee": 120, "cups": 9, "money": 550}
  while (true) {
    switch (readlineSync.question("Write action (buy, fill, take, remaining, exit): ")) {
      case "buy":
        buy(ingredients);
        break;
      case "fill":
        fill(ingredients);
        break;
      case "take":
        take(ingredients);
        break;
      case "remaining":
        remaining(ingredients);
        break;
      case "exit":
        return;
    };
  }
}

function remaining(ingredients: Ingredients) {
  console.log(`The coffee machine has:
${ingredients.water} ml of water
${ingredients.milk} ml of milk
${ingredients.coffee} g of coffee beans
${ingredients.cups} disposable cups
${ingredients.money} of money`);
}

function buy(ingredients: Ingredients) {
  const options: Options = {
  1: {"water": 250, "coffee": 16, "money": -4, "cups": 1},
  2: {"water": 350, "milk": 75, "coffee": 20, "money": -7, "cups": 1},
  3: {"water": 200, "milk": 100, "coffee": 12, "money": -6, "cups": 1}
  };
  const choice = readlineSync.question("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu: ");
  if (choice === "back") {
    return;
  }
  const selected = options[Number(choice)]
  for (const [ingredient, amount] of Object.entries(selected)) {
    if (ingredients[ingredient] < amount) {
      console.log(`Sorry, not enough ${ingredient}!`);
      return;
    }
  }
  console.log("I have enough resources, making you a coffee!")
  for (const [ingredient, amount] of Object.entries(selected)) {
    ingredients[ingredient] -= amount;
  }
}

function fill(ingredients: Ingredients) {
  const questions = {
    "water": "Write how many ml of water you want to add: ",
    "milk": "Write how many ml of milk you want to add: ",
    "coffee": "Write how many grams of coffee beans you want to add: ",
    "cups": "Write how many disposable cups you want to add: ",
  };
  for (const [ingredient, question] of Object.entries(questions)) {
    ingredients[ingredient] += Number(readlineSync.question(question));
  }
}

function take(ingredients: Ingredients) {
  console.log(`I gave you ${ingredients.money}`);
  ingredients.money = 0;
}

menu();
