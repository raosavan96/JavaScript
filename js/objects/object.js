// // Object In JavaScript

// // 1. nested Object

// const myObj = {
//   id: "raosawan",
//   name: "Sawan Kumar Yadav",
//   email: "savanyadav377@gmail.com",

//   add: {
//     vill: "Bhojyara",
//     th: "Chaksu",
//     pin: 303903,
//     dis: "Jaipur",
//   },
//   phone: 9636447793,
// };

// // value nikalna

// // (1)

// console.log(myObj.id);
// console.log(myObj.add.pin);

// // (2)

// const {phone} = myObj;
// console.log(phone);

// const {th} = myObj.add;
// console.log(th);

// 2. function Objects

// (this) key word current contex ko target krta h

// const myObj = {
//   id: "raosawan",
//   name: "Sawan Kumar Yadav",
//   email: "savanyadav377@gmail.com",

//   add: {
//     vill: "Bhojyara",
//     th: "Chaksu",
//     pin: 303903,
//     dis: "Jaipur",
//   },
//   phone: 9636447793,
//   objFun: function () {
//     console.log(
//       "id :- " +
//         this.id +
//         ", name :- " +
//         this.name +
//         ", address :- " +
//         this.add.dis
//     );
//   },
// };

// myObj.objFun();

myObj = {
  id: 1,
  myName: "Sawan Kumar Yadav",
  mob: 9636447793,
  add: {
    vill: "Bhojyara",
    th: "Chaksu",
    pin: 303903,
  },
  funObj: function () {
    console.log(
      `my id :- ${this.id}, name :- ${this.myName}, pincode. :- ${this.add.pin}`
    );
  },
};

myObj.funObj();
