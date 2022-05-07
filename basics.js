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

// // js objects are reference type
// const a = {
//   name: "Sourav",
// };

// const b = {
//   name: "Sourav",
// };

// console.log(a === b); // false, because of two distinct / independent objects are never true in js

// let c = a; //copy the reference of a in c

// console.log(a === c); //true, beause two variables are pointing same object

// c.name = "Kousik";

// console.log(a); // because of the refernce type if we change in one variable then it effects another variable

// b.name = "Robin";
// console.log(b);

// let cloneB = Object.assign({}, b); // now clonB is the independent object

// console.log(b, cloneB);

// console.log(b === cloneB); // false

// cloneB.name = "Sourav Routh"; // now b and cloneB are distinct object so if we change in cloneB it will not effect b

// console.log(b, cloneB); //

// ---------Syntax---------------
// var a;
// let a = 10;
// console.log(a); // Syntax a has already been declared

// var b;
// var b = 20;
// console.log(b); // 20

// let c;
// let c = 20; //Sytax error

// call apply bind //
// console.log(
//   "--------------------------------Call-----------------------------------------"
// );
// let student_obj = {
//   fname: "Sourav",
//   lname: "Routh",
//   displayName: function () {
//     console.log(`${this.fname}  ${this.lname}`); // if we use an arrow function over here, "this" -> will give undefined
//     //because Arrow functions treat this keyword differently. They don’t define their own context since it doesn’t have its own this context.
//     //They inherit that from the parent scope whenever you call this.
//   },
// };

// let student_obj2 = {
//   fname: "Kousik",
//   lname: "Routh",
//   displayName: function () {
//     console.log(`${this.fname}  ${this.lname}`);
//   },
// };
// student_obj.displayName(); // Sourav Routh
// student_obj2.displayName(); // Kousik Routh

// // ------to get rid of writing same function in an different objects we will write only one function and use that for multiple obj-------
// // ------we do that use call, call is basically a function borrowing--------

// function displayNameForCall() {
//   console.log(`${this.fname} ${this.lname}`);
// }

// let newStudentObj = {
//   fname: "Sanjib",
//   lname: "Chabri",
// };
// let newStudentObj2 = {
//   fname: "Anup",
//   lname: "Praharaj",
// };

// //displayNameForCall.call(newStudentObj); //using displayNameForCall function for both objects and
// //displayNameForCall.call(newStudentObj2); //using call set the displayNameForCall()'s this to the objects

// console.log(
//   "--------------------------------Apply------------------------------------------"
// );

// function displayNameForApply(city, state) {
//   console.log(`${this.fname} ${this.lname} from ${city}, ${state} district`);
// }

// let hostelStudentstObj = {
//   fname: "Nilanjan",
//   lname: "Dey",
// };
// let hostelStudentstObj2 = {
//   fname: "Dipanjan",
//   lname: "Kamilya",
// };

// displayNameForApply.apply(hostelStudentstObj, ["Bishnupur", "Bankura"]); //using displayNameForApply function for both objects and
// displayNameForApply.apply(hostelStudentstObj2, ["Bakhrabad", "Belda"]); //using Apply set the displayNameForApply()'s this to the objects and pass other arguments as an aray
// //Apply is same as call but here we have to pass other arguments as an array

// console.log(
//   "--------------------------------Bind------------------------------------------"
// );

// function displayNameForBind(city, state) {
//   console.log(`${this.fname} ${this.lname} from ${city}, ${state} district`);
// }

// let hostelStudentstObj3 = {
//   fname: "Souvik ",
//   lname: "Biswas",
// };
// let hostelStudentstObj4 = {
//   fname: "Anirban",
//   lname: "Halder",
// };

// let callHostelStudents1 = displayNameForBind.bind(
//   hostelStudentstObj3,
//   "Nadia",
//   "Nadia"
// );
// let callHostelStudents2 = displayNameForBind.bind(
//   hostelStudentstObj4,
//   "Bankura",
//   "Bankura"
// );

// //here in Bind same as call we need to pass the "this" of calling using  as an object.
// //and using bind , it returns another function that we can call any where

// callHostelStudents1(); // calling those functions which are return by bind
// callHostelStudents2();
