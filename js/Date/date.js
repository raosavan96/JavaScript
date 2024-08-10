// // Date in JavaScript

// // date all nikalna

// let currentDate = new Date();


// //  * Date Get() Methods

// // 1. getFullYear()

// let year = currentDate.getFullYear();
// console.log(year);

// // 2. getMonth()

// (1)

// let month = currentDate.getMonth() + 1;
// console.log(month);

// (2)

// let allMonth = ["Jan", "Fab", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// let month = currentDate.getMonth();
// let curMonth = allMonth[month];
// console.log(curMonth);



// // 3. getDate()

// let date = currentDate.getDate();
// console.log(date);

// // 4. getDay()

// (1)

// let toDay = currentDate.getDay();
// console.log(toDay);

// (2)

// let allDay = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
// let toDayy = currentDate.getDay();
// let OriDay = allDay[toDayy];
// console.log(OriDay);



// // 5. getHours()

// let hours = currentDate.getHours();
// console.log(hours);

// // 6. getMinutes()

// let minuets = currentDate.getMinutes();
// console.log(minuets);

// // 7. getSeconds()

// let cucSec = currentDate.getSeconds();
// console.log(cucSec);

// // 8. getMilliSeconds()

// let miliSec = currentDate.getMilliseconds();
// console.log(miliSec);

// // 9. getTimezoneOffset()

// let zone = currentDate.getTimezoneOffset();
// console.log(zone);

// // 10.

// let time = currentDate.getUTCMonth();
// console.log(time);

// // sabi UTC date, month, day, hours, sec, milisec, aadi

// // 11. toLocaleDateString()

// let stringTime = currentDate.toLocaleTimeString();
// console.log(stringTime);

// // 12. toLocaleDateString()

// let stringDate = currentDate.toLocaleDateString();
// console.log(stringDate);


// let localeDate = currentDate.toLocaleString();
// console.log(localeDate);


// * setInterval()

// function timeT() {
//     let currentDate = new Date();
//     let year = currentDate.getFullYear();
//     let month = currentDate.getMonth();
//     let date = currentDate.getDate();
//     // let toDay = currentDate.getDay();
//     let allDay = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
//     let toDayy = currentDate.getDay();
//     let OriDay = allDay[toDayy];
//     let hours = currentDate.getHours();
//     let minutes = currentDate.getMinutes();
//     let seconds = currentDate.getSeconds();

//     let allDates = `${date}/${month}/${year} day :- ${OriDay}  ${hours}:${minutes}:${seconds}`


//     let out = document.getElementById("my_date").innerHTML = allDates;
//     console.log(out);
// }

// setInterval(timeT, 1000);