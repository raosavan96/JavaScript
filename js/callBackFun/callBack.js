// // Call Back Function in JavaScript

// function myCall() {
//   console.log("Hi call back function");
// }

// function secCall() {
//   console.log("Hi secCall call back function");
// }

// function myFun(a, b, callback) {
//   let c = a * b;
//   console.log(c);
//   callback();
// }

// myFun(9, 7, myCall);

// myFun(4, 3, secCall);

function myFn() {
  console.log("I am callback function");
}

function byFn(a, b, callback) {
  let c = a * b;
  console.log(c);
  callback();
}

function syFn() {
  console.log("third fun");
}

byFn(7, 7, myFn);
byFn(8, 8, syFn);
