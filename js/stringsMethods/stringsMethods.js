// // Strings Strings Methods in JavaScripts

// // 1. length() methods

// let str = "Sawan";

// console.log(str.length);

// // 2. slice() methods

// let text = "Sawan Kumar Yadav";

// let myCute = text.slice(6, 11);
// console.log(myCute);

// // 3. trim() methods

// let text = "    Hi aap kese ho   ";
// // let blanckSpece = text_2.trim();
// // console.log(text.trim());

// // trimStart trim

// let textt = "    Hi aap kese ho   ";
// let startText = textt.trimStart();

// console.log(startText.length);
// console.log(startText);

// // trimEnd trim

// console.log(text.length);
// let enttrim = text.trimEnd();
// console.log(enttrim.length);
// console.log(enttrim);

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

// // all text replece methods

let myText = "Kal ho na ho phir milenge chalte Chalte";
let upText = myText.replaceAll(/chalte/gi, "haste");
console.log(upText);

// // 8. charAt() methods

// let fullName = "Sawan";
// let fullNamePrint = fullName.charAt(2);
// console.log(fullNamePrint);

// // key value find

// console.log(str[4]);

// 9. split methods

// y method string datatype ko array object me change kr deta h

// let myText = "Kal ho na ho phir milenge chalte chalte";
// let splitt = myText.split( );
// console.log(splitt);

// // 9. includes methods

// // y method strings me check krta h ky y word y later h ya ni or boolean value print krta h

// let myText = "Kal ho na ho phir milenge chalte chalte";
// let srt = myText.includes("ho");

// console.log(srt);

// 10. indexOf methods

// let myText = "Kal ho na ho phir milenge chalte hfi chalte";

// let srt = myText.indexOf("fi");
// console.log(srt);

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
//  console.log(a[2]);

// // temlate leterals

// let myName = "Sawan Kamar Yadav";
// let myNum = 9636447793;
// let myPro = "Wev Developer";

// let output = `I am ${myName} my phone number ${myNum} and my profession ${myPro}`;
// console.log(output);

// let myName = "Sawan";
// let midName = " Kumar";
// let lastName = " Yadav";
// let age = 23;
// let text = "kal or milenge chalte chalte";
// let textTwo = "     Rao shab";
// let textTr = "SAWAN KAMER YADAV";

<<<<<<< HEAD
// console.log(midName);
// console.log(myName.length);
// console.log(midName[2]);
// console.log(text.slice(4, 6));
// console.log(textTwo.trim());
// console.log(textTwo.trimEnd());
// console.log(textTwo.trimStart());
// console.log(myName.toUpperCase());
// console.log(textTr.toLowerCase());
// console.log(myName.concat(midName, lastName));
// console.log(myName.replace("Sawan", "Rao Sawan"));
// console.log(lastName.charAt(3));
// console.log(text.includes("milenge"));
// console.log(text.split());
// console.log(text.indexOf("chalte"));
// console.log(text.replaceAll("chalte", "haste"));


// length .lenght()
// trim .trim()
// trimStart .trimStart()
// trimEnd .trimEnd()
// slice .slice(4,9)
// concat .concat(num2)
// replace .replace("s", "h")
// replaceAll .replaceAll("h", "s")
// toUpperCase .toUpperCase()
// toLowerCase .toLowerCase()
// inclued .inclued("y")
// indexOf .indexOf("h")
// split .split( )
// charAt .charAt(5)
=======
console.log(midName);
console.log(myName.length);
console.log(midName[2]);
console.log(text.slice(4, 6));
console.log(textTwo.trim());
console.log(textTwo.trimEnd());
console.log(textTwo.trimStart());
console.log(myName.toUpperCase());
console.log(textTr.toLowerCase());
console.log(myName.concat(midName, lastName));
console.log(myName.replace("Sawan", "Rao Sawan"));
console.log(lastName.charAt(3));
console.log(text.includes("milenge"));
console.log(text.split());
console.log(text.indexOf("chalte"));
console.log(text.replaceAll("chalte", "haste"));








// length
// slice
// split
// concat
// charAt
// trim
// trimStart
// trimEnd
// replace
// replaceAll
// indexOf
// toLowerCase
// toUpperCase
// includes
>>>>>>> a6a7ee3ebcff00f8bb47b3ab9bae955e47812cbc
