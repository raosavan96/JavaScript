//  exp_1

// let num1 = parseInt(prompt("Enter 1st Number"));
// let num2 = parseInt(prompt("Enter 2nd Number"));
// let operator = prompt("Enter Operator (+,-,*,/)");
// let output;

// if (operator == "+") {
//     output = num1 + num2;
// } else if (operator == "-") {
//     output = num1 - num2;
// } else if (operator == "*") {
//     output = num1 * num2;
// } else if (operator == "/") {
//     output = num1 / num2;
// } else {
//     console.log("Invalid Input");
// }

// console.log( num1 + operator + num2 + "=" +  output);

//  exp_2

// let hii = prompt("Enter Number");

// if (hii % 2 == 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }

//  exp_3

// let num1 = parseInt(prompt.hide("Enter Guessing Number"));
// let num2 = parseInt(prompt("Enter Guessing Number"));

// if (num1 == num2) {
//     console.log("Your Guessing Number is Right");
// } else {
//     console.log("Your Gurssing Number is Wrong");
// }

//  exp_4

// let height = prompt('Height Short / Tall :- ');

// if (height < 1) {
//     let squeak = prompt('Cannot Squeak / Can Squeak (yes & no)');
//     if (squeak == "yes") {
//         console.log("Might be a Squirrel");
//     } else {
//         console.log("Might be a rat");
//     }
// } else if (height >= 1) {
//     let neck = prompt("Short neck / Long neck");
//     if (neck == "short") {
//         let nose = prompt("Short nose / Long nose");
//         if (nose == "short") {
//             let land = prompt("On land / In water");
//             if (land == "on land") {
//                 console.log("Might be a Rhinoceros");
//             } else {
//                 console.log("Might be a Hippo");
//             }
//         } else {
//             console.log("Might be an Elephat");
//         }
//     } else {
//         console.log("Might be a Giraffe");
//     }
// }

// //  exp_5

// // let userInput = require("prompt-sync")();
// let marks = prompt("Enter student marks :- ");

// if (marks >= 90 && marks <= 100) {
//   alert("A+ Grade");
// } else if (marks >= 80 && marks <= 89) {
//   alert("A Grade");
// } else if (marks >= 70 && marks <= 79) {
//   alert("B+ Grade");
// } else if (marks >= 60 && marks <= 69) {
//   alert("B Grade");
// } else if (marks >= 45 && marks <= 59) {
//   alert("C Grade");
// } else if (marks >= 35 && marks <= 44) {
//   alert("d Grade");
// } else if (marks < 35) {
//   alert("Fail");
// } else {
//   alert("Invalid Input");
// }

// example prectice

// let typesJobSmall = prompt("goverment | business | private");
// let typesJob = typesJobSmall.toLowerCase();

// if (typesJob === "goverment") {
//   let salary = prompt("Plese enter your salary");
//   if (salary >= 50000) {
//     alert("You can apply for loan");
//   } else if (salary < 50000) {
//     alert("You can not apply for loan");
//   } else {
//     alert("Invalid Input");
//   }
// } else if (typesJob === "business") {
//   let yearlyTurn = prompt("Plese enter your yearly turnover");
//   if (yearlyTurn >= 2000000) {
//     alert("You can apply for loan");
//   } else if (yearlyTurn < 2000000) {
//     alert("You can not apply for loan");
//   } else {
//     alert("Invalid Input");
//   }
// } else if (typesJob === "private") {
//   alert("No loan avaialbe for you");
// } else {
//   alert("Invalid Input");
// }

// // bill print tast

// let item = prompt("Enter your item :- ");
// let price = prompt("Enter price :- ");
// let quantity = prompt("Enter item quantity :- ");

// let discount = 10;
// let gst = 20;

// bill = price * quantity;
// bill_discount = bill * discount / 100;
// totel_bill = bill - bill_discount;
// bill_gst = totel_bill*gst/100;
// final_bill = bill_gst+totel_bill;

// console.log("item name :- " +item);
// console.log("item price :- " +price);
// console.log("item quantity :- " + quantity);
// console.log("item bill :- " +bill);
// console.log("discount :- " +bill_discount);
// console.log("totel bill :- " + totel_bill);
// console.log("gst :- " +bill_gst);
// console.log("final bill :- " +final_bill);

// let final = `You have to pay ${final_bill} for ${quantity} - ${item}`
// console.log(final);

// 2. time prectice

let promptSec = require("prompt-sync")();

let item = promptSec("Enter your item name :- ");
let price = promptSec("Enter item price :- ");
let quantity = promptSec("Enter item quantity :- ");

let discount = 10;
let gst = 20;

bill = quantity * price;
bill_discount = (bill * discount) / 100;
totel_bill = bill - bill_discount;
bill_gst = (totel_bill * gst) / 100;
final_bill = bill_gst + totel_bill;

console.log("Item name :- " + item);
console.log("Item price :- " + price);
console.log("Item quantity :- " + quantity);
console.log("Item bill :- " + bill);
console.log("Item discount :- " + bill_discount);
console.log("Total bill :- " + totel_bill);
console.log("Bill GST :- " + bill_gst);
console.log("Final bill :- " + final_bill);

let finalOutput = `You have to pay \u20B9 ${final_bill} for ${quantity} - ${item}`;
console.log(finalOutput);
