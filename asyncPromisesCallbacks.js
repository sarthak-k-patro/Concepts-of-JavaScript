// // //  setTimeout function ke baare mai padhenge
// // function x() {
// //   console.log("setTimeout se pehle ");
// //   setTimeout(() => {
// //     console.log("SetTimeout ke andar likha hai  ");
// //     // console.log("andar ikh");
// //   }, 3000);
// //   console.log("setTimeout ke baad likha hai");
// // }
// // x();
// // ===================================================================================
// // //  Simplest example of callback: a function passed as an argument to a function

// // function multiply(num1, num2) {
// //   return num1 * num2;
// // }

// // function joCallBackKarega(num1, num2, callbackWalaFunction) {
// //   console.log("finally jo out put hai ", callbackWalaFunction(num1, num2));
// // }

// // joCallBackKarega(10, 30, multiply);
// console.log("before timeout");

// function x(a, b) {
//   console.log("inside timeout");
//   return a + b;
// }
// setTimeout(() => x(1, 2), 4000);
// console.log("after timeout called");

// // ==================================================================================
//  CallBack hell example : becomes difficult to understand and manage
// function dataMilega(data, callbackWalaFunction) {
//   setTimeout(() => {
//     console.log("data mil gaya hai ", data);
//     if (callbackWalaFunction) callbackWalaFunction();
//   }, 2000);
// }

// dataMilega(1, () => dataMilega(2, () => dataMilega(3, () => dataMilega(4))));

//=================================================================================== =    =====   =   =   =   =   =   =   =   =   =   =   ==      ==  =   =   =   ===================
//  Promises are solution to callback hell
// A simple Promise
// let promiseX = new Promise((resolve, reject) => {
//   //   console.log(`State of Promise is ${Promise}`);
//   console.log("Namaste");
//   resolve("Resolve is success: ");
// });

// console.log("promis ka value outside: ", promiseX);

// =========================================================================================
// // Now we will learn how to use promises:
// let myPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log("promise ke andar hai");
//     console.log("For example data fetch ho rha hai");
//     console.log("data hai: 123");
//     res("resolve 007");
//     rej("rejected 217038");
//   }, 1900);
// })
//   .then((data) => {
//     console.log("jo data mila promise se:", data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// // output: promise ke andar hai
// // For example data fetch ho rha hai
// // data hai: 123
// // rejected 217038
//===========================================================================================================
// // Promise Chain like we had callback hell
// function getData(curr) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data fetch ho rha hai: ", curr);
//       resolve("data mil gaya: ");
//     }, 2000);
//   });
// }

// getData(1).then((res) => {
//   return getData(2).then((res) => {
//     return getData(3).then((res) => console.log(res));
//   });
// });
// or the below syntax
// getData(1)
//   .then((res) => {
//     return getData(2);
//   })
//   .then((res) => {
//     return getData(3);
//   });
// ===============================================================================================
// ASYNC AND AWAIT USE KRKE PEHLE WALA FUNCTION KE LIYE
// function getData(curr) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data fetch ho rha hai: ", curr);
//       resolve("data mil gaya: ");
//     }, 2000);
//   });
// }
// async function sarthak() {
//   await getData(1);
//   await getData(2);
//   await getData(3);
// }
// sarthak();
// SO WE CAN SEE ABOVE THAT WE CAN GET FREED FROM CALLBACK HELL AND PROMISES BY SIMPLY USING ASYNC AND AWAIT
// ===============================================================================================
// // fetch ka example, how fetch works
// // pleas provide a public api to fetch
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
