// Array in javaScript

// // 1. create array

// let myArray = ["Sawan", "Yadav", "Web Developer", 23];
// console.log(myArray);

// // 2. array index value checking

// let marks = [97,26,88,66,57,82,51,84];
// console.log(marks[7]);

// // 3. array value change

// let myArray = ["Sawan", "Yadav", "Web Developer", 23];

// let output = myArray[1] = "Kumar";

// console.log(output);
// console.log(myArray);

// // Array Methods in JavaScript

// // 1. array length method

// let myArray = ["Sawan", "Yadav", "Web Developer", 23];

// console.log(myArray.length);

// 2. array toString() method

// let myArray = ["Sawan", "Yadav", "Web Developer", 23];

// let convertString = myArray.toString();

// console.log(convertString);

// // 3. array pop() method

// // y method array ki last value ko remove kr deta h

// let myArray = ["Sawan", "Yadav", "Web Developer", 23];

// myArray.pop();

// console.log(myArray);

// // 4. array push() method

// // y method array ke last me new value add kr deta h

// let myArray = ["Sawan", "Yadav", "Web Developer", 23];

// myArray.push("22");

// console.log(myArray);

// // 5. arry join() method

// // y method array ki kays ko jo apne add krte h usse jod deta h
// y method array ko strings me bi change kr deta h

// let myArray = ["Sawan", "Yadav", "Web Developer", 23];

// let output = myArray.join(",");

// console.log(output + "dataTyeps :- " + typeof(output));
// console.log(myArray);

// // 6. array shift() method

// let myArray = ["Sawan", "Yadav", "Web Developer", 23];
// let removeFirst = myArray.shift();
// console.log(myArray);
// console.log("remove first array key :- " + removeFirst);

// // 7. array unshift() methods

// // y method array me start me new kay add kr deta h

// let myArray = ["Sawan", "Yadav", "Web Developer", 23];
// myArray.unshift("Rohit");
// console.log(myArray);

// 8. delete method in Array

// let myArray = ["Sawan", "Yadav", "Web Developer", 23];

// let deletA = delete myArray[2];

// console.log(myArray);

// // 9. concat() method in array

// // 2 array ko ek sat jodne ka kam krta h

// let myArray = ["Sawan", "Yadav", "Web Developer", 23];
// let myNew = ["Rao", "Rohit", 12, "Nisha"];

// let concatA = myArray.concat(myNew);
// console.log(concatA);
// let keyCheck = concatA[5];
// console.log(keyCheck);

// // 10. splice() method in array

// let myArray = ["Sawan", "Yadav", "Web Developer", 23, 41, "Rao"];

// let spliceA = myArray.splice(3, 1, 50);

// console.log(myArray);

// // 11. sort() methods in array

// // array keys ko alpalater and num ko plhe print krta h

// let myArray = ["sawan", "yadav", "web developer", 23, 41, "rao", "aman"];

// myArray.sort();
// console.log(myArray);

// // 12. slice() method in array

// // esme jha se print krana h us kay ka index pta do to us index se aage pura new array ban jayga or baki delete ho jayga 

// let myArray = ["sawan", "yadav", "web developer", 23, 41, "rao", "aman"];

// let newArray = myArray.slice(2);

// console.log(newArray);


// prectice array


// let myArray = ["sawan", "yadav", "web developer", 23, 41, "rao", 25, "akash", "aman"];
// let myArrayTow = ["kamlesh", "deshraj","kishan"];
// 0
// console.log(myArray);
// console.log(myArray[1]);
// console.log(myArray.pop());
// console.log(myArray.push("ratan lal yadav"));
// console.log(myArray.shift());
// console.log(myArray.unshift("Nisha"));
// console.log(myArray.concat(myArrayTow));
// console.log(myArray.toString())
// console.log(myArray.join("="));
// console.log(myArrayTow.slice(1));
// console.log(myArray.splice(3,2,"new add"));
// console.log(myArray[1]="rekha");
// console.log(myArray.sort());
// console.log(myArray);
<<<<<<< HEAD
// // console.log(myArrayTow);



let myArray = ["sawan", "yadav", "web developer", 23, 41, "rao", 25, "akash", "aman"];

// console.log(myArray.length);
// console.log(myArray.slice(1,3))

// let shift = myArray.unshift("unshift")
// console.log(myArray)
// let out = myArray[1] = "Rao"
 
// let out = myArray.slice(3)

// myArray.sort()
// let out = myArray.splice(2, 1, "frontend dev")
let out = myArray.toString()
console.log(out)
console.log(myArray.toString())
=======
// console.log(myArrayTow);




>>>>>>> a6a7ee3ebcff00f8bb47b3ab9bae955e47812cbc


