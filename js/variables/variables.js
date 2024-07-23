// types of variables 

// 1. var
// 2. let
// 3. const

// 1. var variables

// => Redeclear
//  => value changeable


var a = "Sawan Kumar Yadav";
var a = "Rao";
a = "Sonu"
console.log(a);


// 2. let variables

// => not Redecleared
// => value changeabl
// => keyword not second time use

let c = "Lokesh Yadav";
c = "Rao Lokesh";

console.log(c);


// 3. const variables

// => not Redecleared
// => value not changeabl
// => keyword not second time use


const d = "Ratan Lal Yadav";

console.log(d);




// scop

// var scop

// var ka scop block ni hota h use block ke bahr se bi read kiya ja skta h 

{
    var scop_var = "hi i am let scop";
}

console.log(scop_var);

// let & const scop

// esko block ke bahr se read ni kiya ja skta h block inside read kiya ja skta h

{
    let scop_let = "hi i am const scop";
    console.log(scop_let);

    const scop_const = "hi i am const scop";
    console.log(scop_const);

}



// exp

var firstName = "Sawan Kumar";
let lastName = "Yadav";
const age = 23;

console.log("First Name :-" + firstName + "Last Name :-" + lastName + "Age :-" + age);
