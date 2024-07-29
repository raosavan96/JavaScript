// // Array Iteration Example

// // exp_1

// let myArray = ["Dadi", "Ratan", "Sawan", "Lokesh", "Indra", "Nisha", "Manisha"];

// for (let i = 0; i <= myArray.length; i++) {
//   console.log(myArray[i]);
// }

// // exp_2

// let h = 10;

// for (let i = 0; i <= h; i++) {
//   console.log(i);
// }

// // exp_3

// let promptIn = require("prompt-sync")();
// let userInput = promptIn("Eter Your input (0 - 20) :- ");

// if (userInput <= 10) {
//   for (let i = 1; i <= userInput; i++) {
//     console.log(`Hi number :- ${i}`);
//   }
// } else if (userInput > 10 && userInput <= 20) {
//   for (let i = 1; i <= userInput; i++) {
//     console.log(`By number :- ${i}`);
//   }
// } else {
//   console.log("Invalid Input");
// }

// // exp_4  :-  ( forEach ) Array Iteration

// - map iteration array ki value ko return nhi krta h

// let myArray = ["Dadi", "Ratan", "Sawan", "Lokesh", "Indra", "Nisha", "Manisha"];

// // (1)

// // function myFun(value, index) {
// //   console.log(`value :- ${value}, index :- ${index}`);
// // }

// // myArray.forEach(myFun);

// // (2)

// myArray.forEach((value, index) => {
//   console.log(`value :- ${value}, index :- ${index}`);
// });

// // exp_5  (map) Array Iteration

// // - map iteration array ki value ko return krta h

// let myArray = ["Dadi", "Ratan", "Sawan", "Lokesh", "Indra", "Nisha", "Manisha"];

// myArray.map((value, index) => {
//   console.log(`${value}, ${index}`);
// });

// // exp_6  (filter) Array Iteration

// let myNum = [45, 1, 55, 54, 87, 4, 99, 101, 30, 7, 89, 100];

// // (1)

// function out(value) {
//   return value < 70;
// }

// let output = myNum.filter(out);
// console.log(output);

// // (2)

// let output = myNum.filter((value) => {
//   return value % 2 == 0;
// });

// console.log(output);

// // (3)

// let myArraytwo = [
//   "Sawan",
//   "Rohit",
//   "Lokesh",
//   "Sawan",
//   "Sawan",
//   "Deshraj",
//   "Rohit",
//   "Sawan",
// ];
// // let lowerArray = myArraytwo.toLowerCase();

// let output = myArraytwo.filter((value) => {
//   return value == "Deshraj";
// });

// console.log(output);

// exp_7 ( Reduce ) Array Iteration Methods

let myNum = [45, 1, 55, 54, 87, 4, 99, 101, 30, 7, 89, 100];

let myValue = myNum.reduce((total, value) => {
  console.log(`total :- ${total}, value :- ${value}`);
  return total + value;
}, 4);

console.log(myValue);
