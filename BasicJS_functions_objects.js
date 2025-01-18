// function sarthak(nums) {
//   let s = 2 + "232";
//   return s;
// }
// ----------------------------------------------------------------------------------------------------------
// const x = sarthak();
// console.log("type: ", typeof x, "\nvalue of x:", x);

// q1. what are first class functions: where function can be treated as a variable
// solution:

// function square(x) {
//   return x * x;
// }

// function display(x) {
//   console.log("Namaste :", x(23));
// }

// display(square);
// _____________________________________________________________________________________________
// Q: what iffe ? => immdeiately invoked functions.

// (function sarthak(x) {
//   cube = x * x * x;
//   console.log(`Namaste Sarthak how are u, cube of ${x} is: ${cube}`);
//   return;
// })(23);
//  -----------------------------------------------------------------------------------------------
// Q: closure alongwith IFFE example:
// Q: what are Closure usecases ?

// (function parent(x) {
//   return (function child(y) {
//     console.log(`Value of x is : ${x}`); // chiuld has access to variable of parent this is closure.
//   })(99);
// })("007");
// -------------------------------------------------------------------------------------------------
// Q: useEffect mistakes to be avoided:
// 1. multiple conditional re renders, which are unnecessary
// 2. incorrect clean up of the code for ex:
// useEffect(() => {
//   const interVal = setInterval(() => {
//     // this wrong because we did not cleanup the setinterval
//     setCount(count + 2);
//   }, 1000);
// }, [count]);

// // setInterval cleanup correct way
// useEffect(() => {
//   const interVal = setInterval(() => {
//     setCount(count + 2);
//   }, 1000);
//   return () => clearInterval(interVal);
// }, [count]);
// -------------------------------------------------------------------------------------------------------

//Q: What are closure in Javascript ?- Ability of a function to access variable out of its scope whenits enclosed
// by another function is called closure. (ability to access variables out of its lexical scope)
// Q: What are use cases of closure?
// ------------------------------------------------------------------------------------------------------------------
// Q: hoisting in javascript ?
// console.log(
//   "yeh rha var ka value outside before function definition  :",
//   sarthak
// );

// function parent() {
//   console.log(
//     "var ka value in function before declaration in its own function scope:",
//     sarthak
//   );
//   var sarthak = "SKP Is best/";
//   console.log(
//     "var ka value in function after var declaration & assignment :",
//     sarthak
//   );
// }
// parent();
// console.log(
//   "var ka value after function scope outside function declarataion :",
//   sarthak
// );
// --------------------------------------------------------------------------------------------------------
// var x = 90;
// (function sarthak() {
//   console.log(x); // x is undefined here because you know since for local scope the variable is hoisted first and later its initialized
//   var x = 20; // so in local scope when x=20 is hoisted first before getting initiialized
// })();
// -=========================================================================================================
//Q: Define a function that takes a callback function as an argument ?
// function greet(name, callback) {
//   // Simulate a delay (e.g. making an API request)
//   setTimeout(() => {
//     // Call the callback function with a greeting message
//     callback(`Hello, ${name}!`);
//   }, 2000);
// }

// // Define a callback function that logs the greeting message to the console
// function logGreeting(message) {
//   console.log(message);
// }

// Call the greet function with a name and the logGreeting callback function
// greet("John", logGreeting);
// ===========================================================================================================
//  async callback
// Define a function that takes a callback function as an argument
// function greet(name, callback) {
//   // Simulate a delay (e.g. making an API request)
//   setTimeout(() => {
//     // Call the callback function with a greeting message
//     callback(`Hello, ${name}!`);
//   }, 2000);
//   console.log(
//     " mai just settimeout ke baad hu lekin setTimeout se pehle aaunga"
//   );
// }

// // Define a callback function that logs the greeting message to the console
// function logGreeting(message) {
//   console.log(message);
// }

// // Call the greet function with a name and the logGreeting callback function
// greet("John", logGreeting);
// ===========================================================================================================
//  Q: Types of functions in JS

// function namedNormal() {
//   console.log("named normal function");
// }
// namedNormal();
// const funcAsaVar = (function firstClass() {
//   return 7;
// })();
// console.log("var ko assign kiya tha func: " + funcAsaVar);

// // anonymous function
// (function () {
//   console.log("mai anonymous function hu bhai ");
// })();
// Arrow functions
// const add = (p1, p2, ...x) => {
//   console.log("x hai :", x);

//   return p1 + p2 + x;
// };
// const arr = [1, 2, "x", 4, 5, 6];
// console.log(add(...arr));

// // 2nd arrow function:
// arrFunc = () => "sarthak is Smart";
// console.log(arrFunc());

// const foo = () => {
//   console.log(this); // window (or global)
// };

// foo(); // called as a function, this refers to the global object

// let useObj = {
//   a: function () {
//     console.log("normal regular function ka this :", this);
//     return 4;
//   },
//   b: (skp = () => {
//     console.log("arrow ka this : ", this);

//     return 5;
//   }),
// };
// useObj.a();
// useObj.b();

// const objectx = {
//   user: "Sarthak K. Patro",
//   1: function x() {
//     console.log("arguments :", arguments["2"]);

//     console.log("This normal function ka : ", this.user);
//   },

//   b1: (arr = () => {
//     console.log("This arrow function ka : ", this.user);
//   }),
// };
// objectx[1]("skp", "kps", 99);
// objectx.b1();

// // x();
// // arr();

// ==============================================================================================================
//  Basics of object calling it and all
// parentObj = {
//   2: function x() {
//     console.log("Namaste here is output:", this[0]);
//     return 0;
//   },
//   3: "sarthak",
//   4: "patro",
//   keyx: "Infosys",
//   obj: {
//     a: "Nested Sarthak",
//     3: " Nested Patro",
//   },
// };
// const s = Object.values(parentObj);
// console.log(s[0]());
// console.log(`${parentObj.obj[3]}  ${parentObj.obj.a}`);
// console.log(Object.entries(parentObj));
