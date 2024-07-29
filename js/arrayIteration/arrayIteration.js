// Array Iteration Example

// exp_1

let myArray = ["Dadi", "Ratan", "Sawan", "Lokesh", "Indra", "Nisha", "Manisha"];

for (let i = 0; i <= myArray.length; i++) {
  console.log(myArray[i]);
}

// exp_2

let h = 10;

for (let i = 0; i <= h; i++) {
  console.log(i);
}

// exp_3

let promptIn = require("prompt-sync")();
let userInput = promptIn("Eter Your input (0 - 20) :- ");

if (userInput <= 10) {
  for (let i = 1; i <= userInput; i++) {
    console.log(`Hi number :- ${i}`);
  }
} else if (userInput > 10 && userInput <= 20) {
  for (let i = 1; i <= userInput; i++) {
    console.log(`By number :- ${i}`);
  }
} else {
  console.log("Invalid Input");
}
