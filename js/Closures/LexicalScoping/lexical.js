// Lexical Scoping (Closures) in JavaScript

function myFun() {
  let a = "Sawan";

  function byFun() {
    console.log(a);
    let b = "Yadav";
    function hyFun() {
      console.log(b);
    }
    hyFun();
  }
  byFun();
}

myFun();
