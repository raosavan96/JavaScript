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


//  exp_5 


let marks = "95";

if (marks >= 90 && marks <= 100) {
    console.log("A+ Grade");
}
else if (marks >= 80 && marks <= 89) {
    console.log("A Grade");
}
else if (marks >= 70 && marks <= 79) {
    console.log("B+ Grade");
}
else if (marks >= 60 && marks <= 69) {
    console.log("B Grade");
}
else if (marks >= 45 && marks <= 59) {
    console.log("C Grade");
}
else if (marks >= 35 && marks <= 44) {
    console.log("d Grade");
} else if (marks <= 35) {
    console.log("Fail");
} else {
    console.log("Invalid Input");
}