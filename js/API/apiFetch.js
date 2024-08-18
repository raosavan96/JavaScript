// api fetch in javaScript

// async function myData() {
//   let result = await fetch("https://dummyjson.com/products/");
//   let data = await result.json();
//   console.log(data);
// }

// myData();

// (1)

// bina loop ke api value nikalna

//   async function myFun() {
//     let result = await fetch("https://dummyjson.com/products/");
//     let data = await result.json();
//     console.log(data);

//     document.getElementById("titel").innerText = data.products[0].title;

//     let a = (document.getElementById("img_id").attributes[0].value =
//       data.products[0].images);
//     console.log(a);
//   }

//   myFun();

// (2)

// loop se api value nikalna

// async function myFun() {
//   try {
//     let result = await fetch("https://dummyjson.com/products/");
//     let data = await result.json();
//     console.log(data);

//     let card = document.querySelectorAll(".card");

//     card.forEach((value, index) => {
//       value.getElementsByTagName("h5")[0].innerText =
//         data.products[index].title;
//       value.getElementsByTagName("p")[0].innerText =
//         data.products[index].description;
//       value.getElementsByTagName("img")[0].attributes[0].value =
//         data.products[index].images;
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// myFun();

// (3)

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
