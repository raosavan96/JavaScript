// function in javaScript

// 1. normal function

function myFun() {
  console.log("Hi i am a function");
}

myFun();

// 2. declaration function

function myDfun(a, b) {
  c = a + b;
  console.log(c);
}

myDfun(10, 15);

// 3. experience function

let varFun = function (c, d) {
  x = c * d;
  console.log(x);
};

varFun(5, 5);

// 4. return function

// exp_1

let returnF = function () {
  return h = 10 + 10;
};

returnF();
console.log(h);

// exp_2

function myfn (a,b) {
   return a*b;
}
console.log(myfn(10,100));

// 5. arrow function

let arrowF = () => {
    let myName = "Sawan Kumar Yadav";
    console.log(myName);
}

arrowF();