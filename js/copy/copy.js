// copy in javaScript

// (1) - * shallow copy *

// let myObj = {
//   id: "32jn3jh",
//   productName: "TV",
//   price: "$332",
//   rating: "4.9",
//   add: {
//     city: "Jaipur",
//     pincode: 887989,
//   },
// };

// (1)

// let secObj = Object.assign({}, myObj);

// myObj.price = "$88";
// secObj.price = "$108";

// console.log(myObj);
// console.log(secObj);

// (2) - spread Opretor

// let secObj = { ...myObj };
// myObj.price = "$88";
// secObj.price = "$108";
// myObj.add.city = "kota";
// console.log(myObj);
// console.log(secObj);

// - shallow copy nested object me kam ni krta h normal me kam krta h only

// (2) * Deep copy *

// let myObj = {
//   id: "32jn3jh",
//   productName: "TV",
//   price: "$332",
//   rating: "4.9",
//   add: {
//     city: "Jaipur",
//     pincode: 887989,
//   },
// };

// let secObj = JSON.parse(JSON.stringify(myObj));

// myObj.add.city = "kota";

// console.log(myObj);
// console.log(secObj);

// (3) - ladash for deep copy

// const _ = require("lodash");
// const myObj = {
//   id: "32jn3jh",
//   productName: "TV",
//   price: "$332",
//   rating: "4.9",
//   add: {
//     city: "Jaipur",
//     pincode: 887989,
//   },
//   allProducts: function () {
//     console.log("Hello Check all Products");
//   },
// };

// const clonedObject = _.cloneDeep(myObj);
// console.log(myObj);
// console.log(clonedObject);

// prectice

// let myObj = {
//   id: "32jn3jh",
//   productName: "TV",
//   price: "$332",
//   rating: "4.9",
//   add: {
//     city: "Jaipur",
//     pincode: 887989,
//   },
// };

// let secObj = Object.assign({}, myObj);

// let secObj = { ...myObj };

// myObj.productName = "FM";

// console.log(myObj);
// console.log(secObj);

// let myObj = {
//   id: "32jn3jh",
//   productName: "TV",
//   price: "$332",
//   rating: "4.9",
//   add: {
//     city: "Jaipur",
//     pincode: 887989,
//   },
// };

// let secObj = JSON.parse(JSON.stringify(myObj));

// console.log(myObj);
// console.log(secObj);

// let myObj = {
//   id: 1,
//   user: "Sawan",
//   age: 23,
//   add: {
//     city: "Jaipur",
//     pincode: 303903,
//   },
// };

// // let secObj = { ...myObj };
// let secObj = Object.assign({}, myObj);
// // myObj.add.city = "kota";

// console.log(myObj);
// console.log(secObj);

let _ = require("lodash");

let myObj = {
  id: 1,
  user: "Sawan",
  age: 23,
  add: {
    city: "Jaipur",
    pincode: 303903,
  },
  fun: function () {
    console.log("id:- " + this.id);
  },
};

let secObj = _.cloneDeep(myObj);
// secObj.add.city = "kota";
console.log(myObj);
console.log(secObj);
