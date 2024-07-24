let num1 = parseInt(prompt("Enter 1st Number"));
let num2 = parseInt(prompt("Enter 2nd Number"));
let operator = prompt("Enter Operator (+,-,*,/)");
let output;

if (operator == "+") {
    output = num1 + num2;
} else if (operator == "-") {
    output = num1 - num2;
} else if (operator == "*") {
    output = num1 * num2;
} else if (operator == "/") {
    output = num1 / num2;
} else {
    console.log("Invalid Input");
}

console.log( num1 + operator + num2 + "=" +  output);