// loop in javaScript

// 1. for loop

//  for (let i = 0; i <= 5; i++) {
//    console.log(i);
//  }

// 2. for in loop

// let myArray = ["Sawan", "Lokesh", "Nisha", 44, 98, "Yadav"];

// for(let x in myArray){
//   let y = myArray[x]
//   console.log(y);

// }

// 3. for of loop

// let myArray = [1, 2, 3, 4, 5, 6, 7, 8];

// for (let j of myArray) {
//     console.log(j);

// }

// 4. while loop

// let i = 0;

// while (i <= 10) {
//     console.log(i);
//     i++;

// }

// * loop stop krna

// let myArray = [1, 2, 3, 4, 5, 6, 7, 8];

// for (let i = 0; i < myArray.length; i++) {
//     if (i === 3) {
//         break;
//     }
//     console.log(myArray[i]);

// }

// // loop continue krna

// let myArray = [1, 2, 3, 4, 5, 6, 7, 8];

// for (let i = 0; i < myArray.length; i++) {
//     if (i === 3) {
//         continue;
//     }
//     console.log(myArray[i]);

// }

let userInput = parseInt(prompt("Enter tabel number :- "));
let i = 0;
while (i < 10) {
  i++;
  console.log(i * userInput);
}
