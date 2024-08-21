// Call Apply Bind in JavaScript

// (1) - call

// let myObj = {
//   user: "Sawan",
//   age: 23,
//   id: 1,
// };

// let allDetails = function (city, pincode) {
//   console.log("user id :- " + this.id + " city :- "+ city +"pincode :- "+pincode);
// };

// let secObb = {
//   user: "Lokesh",
//   age: 20,
//   id: 2,
// };

// allDetails.call(myObj, "Jaipur", "303903");
// allDetails.call(secObb);

// (2) - apply

let myObj = {
  user: "Sawan",
  age: 23,
  id: 1,
};

let allDetails = function (city, pincode) {
  console.log(
    "user id :- " + this.id + " city :- " + city + "pincode :- " + pincode
  );
};

let secObb = {
  user: "Lokesh",
  age: 20,
  id: 2,
};

allDetails.apply(myObj,[" jaipur :- ", " 303902 :- "]);

allDetails.apply(secObb,[" Udaipur :- ", " 303542 :- "]);
