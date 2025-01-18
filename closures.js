// What is Closure ??
console.log(
  "Closure give you acces to a outer function scope from an inner function"
);

// closure using arrow function ??
// let sarthak = () => {
//   let name = "Sarthak";
//   return (interview = () => ` ${name} is a good Javascript Programmer `);
// };

// console.log(sarthak()());
// =======================================================================================================
// 2. arrow anonymous function
// (() => {
//   return console.log("sarthak");
// })();
// =======================================================================================================
// 3. Closure for time optimization

// let arrIndexSquare = () => {
//   let arr = [];
//   for (let i = 0; i < 1000000; i++) {
//     arr[i] = i * i;
//   }
//   return (index) => {
//     console.log(arr[index]);
//   };
// };
// let innerFunc = arrIndexSquare();
// console.time();
// innerFunc(50000);
// console.timeEnd();

// =======================================================================================================
// Q: What is module pattern in JS ? => keeping a function inside a function as private so that
// it can't be accessed from outside. It has a parent function outside

// let Module = (() => {
//   pvtFunction = () => {
//     console.log("This is a private function");
//   };

//   return {
//     publicM: () => {
//       console.log("This is public ");
//     },
//   };
// })();

// Module.publicM();

// =======================================================================================================
