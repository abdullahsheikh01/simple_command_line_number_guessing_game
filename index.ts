#!/usr/bin/env node 
import inquirer from "inquirer";
console.log("Welcome to The game")
const number = Math.floor(Math.random() * 5+1);
const input = await inquirer.prompt({
 name: "userNumber",
  type: "number",
  message: "Guess Number between 1 to 5 and enter guessed number",
}
)
if(input.userNumber === number){
    console.log("You Guessed Correct Number");
}
else{
    console.log("You Guessed Wrong Number");
    console.log("The Correct Number is "+number);
}
console.log("Thanks for Playing");