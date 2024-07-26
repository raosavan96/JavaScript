// // Strings Strings Methods in JavaScripts

// // 1. length() methods

// let str = "Sawan";

// console.log(str.length);

// // 2. slice() methods

// let text = "Sawan Kumar Yadav";

// let myCute = text.slice(6, 11);
// console.log(myCute);

// // 3. trim() methods

// let text_2 = "    Hi aap kese ho   ";
// let blanckSpece = text_2.trim();
// console.log(blanckSpece);

// // 4. toUpperCase() methods

// let myName = "sawan kumar yadav";

// let uppercase = myName.toUpperCase();
// console.log(uppercase);

// // 5. toLowerCase() methods

// let small = "SAWAN KUMAR YADAV";

// let lowercase = small.toLowerCase();

// console.log(lowercase);

// // 6. concat methods

// // exp_1

// let srt_1 = "Sawan";
// let srt_2 = " Yadav";

// console.log(srt_1.concat(srt_2));

// // exp_2

// let res = "Hello" + " World";
// console.log(res);

// // 7. replace() methods

// let srt = "Hello";
// let rep = srt.replace("H", "Y");
// console.log(rep);

// // 8. charAt() methods

// let fullName = "Sawan";
// let fullNamePrint = fullName.charAt(2);
// console.log(fullNamePrint);

// // key value find

// console.log(str[4]);

// // Teplate leterals in js

// // exp_1

// let obj = {
//     item: "Pen",
//     price: "10"
// }

// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// // prectice

// let a = "sawan";
// let b = "   YADAV   ";
// let c = " kumar";

// console.log(a.length);
// console.log(a.slice(2, 4));
// console.log(b.trim());
// console.log(a.toUpperCase());
// console.log(b.toLowerCase());
// console.log(a.concat(c));
// console.log(a.replace("s", "r"));
// console.log(a.charAt(3));
// console.log(a[2]);

// temlate leterals

let myName = "Sawan Kamar Yadav";
let myNum = 9636447793;
let myPro = "Wev Developer";

let output = `I am ${myName} my phone number ${myNum} and my profession ${myPro}`;
console.log(output);
