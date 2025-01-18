// Currying => f(a,b) will be into f(a)(b)

// function normal(a, b) {
//   return a + b;
// }
// // console.log(normal(5, 6));
// // now converting it into currying

// function curryExp(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// console.log(curryExp(5));

// ===================================================================================================
// // pure vs impure function:
// // pure function => always return the same output for the same input
// // impure function => return different output for the same input
// function pure(a, b) {
//   return a + b;
// }
// console.log(impure());

// function impure() {
//   return Math.random();
// }
// ====================================================================================================
//  sum(2)(3)(5)
//  currying output
// function a1(a) {
//   return function a2(b) {
//     return function a3(c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(a1(3)(3)(5));

// ======================================================================================================
// n inputs parameter function currying call
