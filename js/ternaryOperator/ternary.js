// Ternary Operator in JavaScripta

// exp_1

// let age = 11;

// age == 18
//   ? console.log("vote for india")
//   : age > 18
//   ? console.log("vote for pk")
//   : console.log("invalid input");

// exp_2

let prompt = require("prompt-sync")();

let userInput = prompt("enter your input :- ");

let toLowText = userInput.toLowerCase();
console.log(toLowText);

toLowText == "ratan"
  ? console.log("Indra")
  : toLowText == "sawan"
  ? console.log("Nisha")
  : toLowText == "lokesh"
  ? console.log("Manish")
  : console.log("Invalid Input");
