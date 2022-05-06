// JavaScript interview coding questions

// for (var i = 0; i < 8; i++) {
//   setTimeout(() => {
//     console.log("printing i ", i); // i is reference of same memory , untill setTimeOut over already i changed to 8
//   });
// }

// setTimeout(() => {
//   console.log("----------difference----------");
// });

// //console.log("----------difference----------"); if this line actived then this line will be printed first.
// // Because of other console are in setTimeout i.e an async function

//also we can fix this using iffes

// for (let i = 0; i < 8; i++) {
//   setTimeout(() => {
//     console.log("printing i ", i); // because let is a block scope, so every time i gets a new memory and save it
//   });
// }

// js objects are reference type
const a = {
  name: "Sourav",
};

const b = {
  name: "Sourav",
};

console.log(a === b); // false, because of two distinct / independent objects are never true in js

let c = a; //copy the reference of a in c

console.log(a === c); //true, beause two variables are pointing same object

c.name = "Kousik";

console.log(a); // because of the refernce type if we change in one variable then it effects another variable

b.name = "Robin";
console.log(b);

let cloneB = Object.assign({}, b); // now clonB is the independent object

console.log(b, cloneB);

console.log(b === cloneB); // false

cloneB.name = "Sourav Routh"; // now b and cloneB are distinct object so if we change in cloneB it will not effect b

console.log(b, cloneB); //
