// Promise in JavaScript

// let myPromise = new Promise();
// fetch("http://dummydate.js").then().catch().finally();

// console.log(myPromise);

// (1)

// Resolve Promise - (i)

// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async tast complete");
//     resolve({
//       id: 1,
//       myname: "Sawan Kumar Yadav",
//       age: 23,
//     });
//   }, 2000);
// });

// myPromise.then((data) => {
//   console.log(data);
// });

// (2)

// //  Resolve Promise - (ii)

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Db connetced");
//     resolve({
//       id: 1,
//       myname: "Sawan Kumar Yadav",
//       age: 20,
//     });
//   }, 2000);
// })
//   .then((data) => {
//     return data.myname;
//   })
//   .then((out) => {
//     console.log(out);
//   });

// Rejected Promise - (i)

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Db connected");
//     let tast = false;
//     if (tast) {
//       resolve({
//         id: 1,
//         myname: "Sawan Kumar Yadav",
//         age: 23,
//       });
//     } else {
//       reject("Error tast not completed");
//     }
//   }, 2000);
// })
//   .then((data) => {
//     return data.myname;
//   })
//   .then((myname) => {
//     console.log(myname);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Finally always run");
//   });

// Async Function

// let myPro = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Db Connected");
//     let tast = false;
//     if (tast) {
//       resolve({
//         id: 1,
//         user: "Sawan",
//         age: 23,
//       });
//     } else reject("Error...");
//   }, 2000);
// });

// async function myFun() {
//   try {
//     let result = await myPro;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// myFun();

// fetch("https://dummyjson.com/products/")
//   .then((data) => {
//     return data.json();
//   })
//   .then((result) => {
//     console.log(result);

//     let card = document.querySelectorAll(".card");

//     card.forEach((value, index) => {
//       value.getElementsByTagName("h5")[0].innerText =
//         result.products[index].title;
//       value.getElementsByTagName("p")[0].innerText =
//         result.products[index].description;
//       value.getElementsByTagName("img")[0].attributes[0].value =
//         result.products[index].images;
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// let mypro = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Db connected");

//     let task = true;

//     if (task) {
//       resolve({
//         id: 1,
//         user: "Sawan",
//         age: 23,
//         pro: "Wev Developer",
//       });
//     } else {
//       reject("Error...");
//     }
//   }, 2000);
// })
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Finally");
//   });


