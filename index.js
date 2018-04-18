//Calculator Index File
//Tasks are to: prompt a user to enter a number; 
//Prompt to enter a second number;
//Multiply and return the results


const readline = require('readline-sync');

//bit at top
console.log("Welcome to the Calculator");
console.log("_-_-_-_-_-_")


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

//output - calculate the answer (for some reason this didn't run on node.js - crashed after 2nd input - but code is correct as per example)
const answer = (firstInput * secondInput);
//display
console.log("This is the answer " + answer);