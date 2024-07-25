// // Conditional Statements

// // 1. if statement

// // exp_1 

// let number = 10;

// if (number > 2) {
//     console.log("Number is positiv");
// }

// // exp_2

// let mode = "light";
// let color;

// if (mode === "dark") {
//     color = "Black";
// }

// if(mode === "light") {
//     color = "White";
// }

// console.log(color);



// // 2. if else statement

// // exp_1

// let age = 10;

// if (age >= 18) {
//     console.log("You are eligible for vote");
// } else {
//     console.log("You are not eligible for vote");
// }

// // exp_2

// let mode = "dark";
// let color;

// if (mode === "dark") {
//     color = "Black";
// }
// else {
//     color = "White";
// }

// console.log(color);

// // exp_3

// let num = 100;

// if (num % 2 === 0) {
//     console.log("even");
// } else {
//     console.log("odd");
// }


// // 3. esle if statement

// // exp_1

// let mode = "blue";
// let color;

// if (mode === "dark") {
//     console.log("Black");
// } else if (mode === "red") {
//     console.log("red");
// } else if (mode === "blue") {
//     console.log("blue");
// } else {
//     console.log("white");
// }

// // exp_2

let userInput = require("prompt-sync")();
let age = userInput("Enter your age :- ");

if (age >= 18) {
    console.log("You are eligible for vote");
} else if (age < 18) {
    console.log("You are not eligible for vote");
} else {
    console.log("invalid input");
}