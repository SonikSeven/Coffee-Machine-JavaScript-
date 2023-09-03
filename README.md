# Coffee Machine

Coffee Machine is a simple, interactive command-line application written in TypeScript, designed to simulate the operation of a coffee machine. It allows users to perform various actions such as buying coffee, ingredients, taking money from the machine, checking remaining ingredients, and exiting the application. This project serves as an excellent example for understanding handling simple operations and user interactions in TypeScript.

## Features

- **Buy Coffee**: Choose between espresso, latte, or cappuccino and check if the machine has enough ingredients to make your coffee.
- **Fill Ingredients**: Add water, milk, coffee beans, or disposable cups into the machine.
- **Take Money**: Retrieve the accumulated money from coffee sales.
- **Check **Remaining**: View how much ingredients and money are left in the machine.
- **Exit**: Safely quit the application.

## Requirements

- [Node.js](https://nodejs.org/)

## Installation

This application is written in TypeScript, so you'll need Node.js installed on your computer to run it. If you don't have Node.js installed, you can download it from [nodejs.org](https://nodejs.org/).

To install this project, follow these steps:

1. Clone the repository to your local machine:

```
git clone https://github.com/SonikSeven/coffee-machine-typescript.git
```

2. Navigate to the cloned repository:

```
cd coffee-machine-typescript
```

3. Install the required dependencies:

```
npm install
```

## How to Run

To run the program, follow these steps:

1. Open a terminal and navigate to the directory where the script is located.
2. Run the following command:

```
npx ts-node index.ts
```

## Usage

After running the application, you will be prompted with `"Write action (buy, fill, take, remaining, exit): "`. Here’s a brief guide on how to use each option:

- **Buy**: Input `buy` followed by your choice of coffee (1 - espresso, 2 - latte, 3 - cappucc) or 'back' to return to the main menu.
- **Fill**: Input `fill and then follow the prompts to add ingredients to the machine.
- **Take**: Input `take` to withdraw the money collected from the machine.
- **Remaining**: Input `remaining` to display the current state of the ingredients and money in the machine.
- **Exit**: Input `exit` to stop the application.

## License

This project is licensed under the [MIT License](LICENSE.txt).
