#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from 'chalk-animation';
import chalk from "chalk";
import { sum } from "./add.js";
import { subtract } from "./subtract.js";
import { Multiply } from "./multiply.js";
import { Division } from "./division.js";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 1000);
    });
};
async function Welcome() {
    let animateTitle = chalkAnimation.rainbow('Lets start calculation '); //Animation Start
    await sleep();
    animateTitle.stop();
    // let calc = chalkAnimation.rainbow
    console.log(chalk.blueBright(` 
 _____________________
|  _________________  |
| | R=       3.1415 | |
| |_________________| | 
|   Develop BY AMMAR  | 
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|`));
    await sleep();
    // calc.stop();
    console.log(chalk.yellowBright(chalk.bold("\n Developed By Ammar Bhatti \n")));
}
async function askQuestion() {
    let answer = await inquirer
        .prompt([
        {
            message: chalk.green("Enter first number: "),
            type: "number",
            name: "num1"
        },
        {
            message: chalk.green("Enter second number: "),
            type: "number",
            name: "num2"
        },
        {
            message: chalk.greenBright("Which operation do you want to perform"),
            type: "list",
            name: "operator",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        }
    ]);
    if (answer.operator === "Addition") {
        // let result = sum(answer.num1, answer.num2)
        // console.log(result)
        let result = sum(answer.num1, answer.num2);
        console.log(chalk.greenBright(`The Result of ${(answer.operator)} of Number ${chalk.yellowBright(answer.num1)} and Number ${chalk.yellowBright(answer.num2)} is :  ${chalk.yellowBright(result)}`));
    }
    else if (answer.operator === "Subtraction") {
        //     let result = subtract(answer.num1, answer.num2)
        //     console.log(result)
        let result = subtract(answer.num1, answer.num2);
        console.log(chalk.greenBright(`The Result of ${(answer.operator)} of Number ${chalk.yellowBright(answer.num1)} and Number ${chalk.yellowBright(answer.num2)} is :  ${chalk.yellowBright(result)}`));
    }
    else if (answer.operator === "Multiplication") {
        //     let result = Multiply(answer.num1, answer.num2)
        //     console.log(result)
        let result = Multiply(answer.num1, answer.num2);
        console.log(chalk.greenBright(`The Result of ${(answer.operator)} of Number ${chalk.yellowBright(answer.num1)} and Number ${chalk.yellow(answer.num2)} is :  ${chalk.yellowBright(result)}`));
    }
    else if (answer.operator === "Division") {
        //     let result = Division(answer.num1, answer.num2)
        //     console.log(result) }
        let result = Division(answer.num1, answer.num2);
        console.log(chalk.greenBright(`The Result of ${(answer.operator)} of Number ${chalk.yellowBright(answer.num1)} and Number ${chalk.yellowBright(answer.num2)} is :  ${chalk.yellowBright(result)}`));
    }
}
async function startAgain() {
    await Welcome();
    do {
        await askQuestion();
        var again = await inquirer
            .prompt([
            /* Pass your questions in here */
            {
                type: "input",
                name: "restart",
                message: chalk.yellowBright(" \n Do you want to perform another Calculation? Press Y or N ")
            }
        ]);
    } while (again.restart == "y" || again.restart == "Y" || again.restart == "yes" || again.restart == "YES");
}
startAgain();
