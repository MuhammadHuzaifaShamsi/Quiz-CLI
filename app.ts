#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let answer = await inquirer.prompt([
    {
        name: "testStart",
        type: "confirm",
        message: chalk.magenta("Do You Want to Attempt the Quiz?")
    }
]);

if (!answer.testStart) {
    console.log(chalk.green("Thanks for visiting!"));
}
else {
    let quiz = await inquirer.prompt([
        {
            name: "q1",
            type: "list",
            message: chalk.magenta("Which keyword is used to declare a variable in TypeScript?"),
            choices: ["var", "let", "const", "all of the above"]
            },
        {
            name: "q2",
            type: "list",
            message: chalk.magenta("What is the purpose of TypeScript?"),
            choices: ["To add static typing to JavaScript", "To replace JavaScript", "To make JavaScript code run faster", "To add graphics to web pages"]        
        },
        {
            name: "q3",
            type: "list",
            message: chalk.magenta("What does the 'any' type signify in TypeScript?"),
            choices: ["It represents an unknown type", "It signifies a specific data type", "It represents any type of data", "It is not a valid type in TypeScript"]
            },
        {
            name: "q4",
            type: "list",
            message: chalk.magenta("What is the purpose of interfaces in TypeScript?"),
            choices: ["To define classes", "To create objects", "To define the structure of objects", "To implement inheritance"]
        },
        {
            name: "q5",
            type: "list",
            message: chalk.magenta("How do you import a module in TypeScript?"),
            choices: ["import MyModule from 'my-module'", "require('my-module')", "import { MyModule } from 'my-module'", "include 'my-module'"]
            }
    ]);

    let score = 0;
    if (quiz.q1 === 'all of the above') score++;
    if (quiz.q2 === 'To add static typing to JavaScript') score++;
    if (quiz.q3 === 'It represents any type of data') score++;
    if (quiz.q4 === 'To define the structure of objects') score++;
    if (quiz.q5 === "import { MyModule } from 'my-module'") score++;

    console.log(chalk.green(`\n Congrats on Completing the Quiz: You scored ${score}/5`));
}