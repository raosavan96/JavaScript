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

// let myObj = {
//   user: "Sawan",
//   age: 23,
//   id: 1,
// };

// let allDetails = function (city, pincode) {
//   console.log(
//     "user id :- " + this.id + " city :- " + city + "pincode :- " + pincode
//   );
// };

// let secObb = {
//   user: "Lokesh",
//   age: 20,
//   id: 2,
// };

// allDetails.apply(myObj, [" jaipur :- ", " 303902 :- "]);

// allDetails.apply(secObb, [" Udaipur :- ", " 303542 :- "]);

//  (3) - Bind

let myObj = {
  user: "Sawan",
  age: 23,
};

let myFun = function () {
  console.log("user:- " + this.user + " id:- " + this.age);
};

let byObj = {
  user: "Lokesh",
  age: 20,
};

let a = myFun.bind(myObj);
a();

// Prectice

// (1)

// let myObj = {
//   user: "Sawan",
//   age: 23,
//   allDetail: function () {
//     console.log("user :- " + this.user + " age :- " + this.age);
//   },
// };

// let byObj = {
//   user: "Lokesh",
//   age: 20,
// };

// myObj.allDetail();

// myObj.allDetail.call(byObj);

// (2)

// let myObj = {
//   user: "Sawan",
//   age: 23,
// };

// let allDetail = function (city, pincode) {
//   console.log(
//     "user :- " +
//       this.user +
//       " age :- " +
//       this.age +
//       " city :- " +
//       city +
//       " pincode :- " +
//       pincode
//   );
// };

// let byObj = {
//   user: "Lokesh",
//   age: 20,
// };

// allDetail.call(myObj, "Jaipur", "303902");

// apply

// let myObj = {
//   user: "Sawan",
//   age: 23,
// };

// let allDetail = function (city, pincode) {
//   console.log(
//     "user :- " +
//       this.user +
//       " age :- " +
//       this.age +
//       " city :- " +
//       city +
//       " pincode :- " +
//       pincode
//   );
// };

// let byObj = {
//   user: "Lokesh",
//   age: 20,
// };

// allDetail.apply(myObj, ["Jaipur", "303903a"]);
