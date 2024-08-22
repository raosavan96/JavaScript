// Call Back Function in JavaScript

function myCall() {
  console.log("Hi call back function");
}

function secCall() {
  console.log("Hi secCall call back function");
}

function myFun(a, b, callback) {
  let c = a * b;
  console.log(c);
  callback();
}

myFun(9, 7, myCall);

myFun(4, 3, secCall);
