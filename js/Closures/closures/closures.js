// Closures in javaScript

function outer() {
  let user = "Sawan";
  function inner() {
    console.log(user);
  }

  return inner;
}

const output = outer();

output();
