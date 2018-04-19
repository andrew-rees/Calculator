//Calculator Index File
//Tasks are to: prompt a user to enter a number; 
//Prompt to enter a second number;
//Multiply and return the results


const readline = require('readline-sync');

//bit at top
console.log("Welcome to the Calculator");
console.log("_-_-_-_-_-_")


//operator input
console.log("Would you like to add, subtract, multiply or divide your number?");
//prompt for input, then define it as a constant
const operator = readline.prompt();
//turn it into an arithmetic operator???

//first input
console.log("Please enter your first number:");
//prompt for input, then define it as a constant
const firstResponse = readline.prompt();
//turn it into a number
const firstInput = +firstResponse;

//second input
console.log("Thank you, please enter your second number");
//prompt for input, then define it as a constant
const secondResponse = readline.prompt();
//turn it into a number
const secondInput = +secondResponse;

//switch to run various different outcomes 
switch (operator)
{
    case '+':
    const plus = firstInput + secondInput;
    console.log("This is the answer: " + plus);
    break;
    case '-':
    const minus = firstInput - secondInput;
    console.log("This is the answer: " + minus);
    break;
    case '/':
    const divide = firstInput / secondInput;
    console.log("This is the answer: " + divide);
    break;
    case '*':
    const multiply = firstInput - secondInput;
    console.log("This is the answer: " + multiply);
    break;
    default:
    console.log("Sorry, I don't understand the operator");
}