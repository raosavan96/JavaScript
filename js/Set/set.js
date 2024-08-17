// Set in javaScript

// - esme uniq value add krte h ;
// - y kisi key value ko dubara store ni krta h

// let mySets = new Set(["a", "b", "a", "c", "d", "m", "m"]);
// console.log(mySets);

// Set Methods - value add krna

// 1. add()

// let set2 = new Set([]);

// set2.add("Sawan");
// set2.add("Yadav");
// set2.add("Sawan");

// console.log(set2);

// 2. has() - value fine krne ke kam aata h

// let mySets = new Set(["Sawan", "Yadav", "Lokesh", "Nisha", "Manisha"]);

//  let find = mySets.has("Nisha");

// console.log(find)

// 3. delete()

// let mySets = new Set(["Sawan", "Yadav", "Lokesh", "Nisha", "Manisha"]);

// mySets.delete("Sawan");

// console.log(mySets);

// precatice

let mySets = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
let a = mySets.has(4);
mySets.add(11);
mySets.delete(5);
console.log(a);
console.log(mySets);
