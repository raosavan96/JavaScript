// let prompt = require("prompt-sync")();
let smallText = prompt("Enter your job Type :- ");
let userName = prompt("Enter your Name :- ");

let jobType = smallText.toLowerCase();

switch (jobType) {
  case "teacher":
    console.log(`${userName} How to teach`);
    break;
  case "developer":
    console.log(`${userName} teach how to create a website`);
    break;
  case "driver":
    console.log(`${userName} drive a car like ola`);
  default:
    console.log("Invalid Input");
}
