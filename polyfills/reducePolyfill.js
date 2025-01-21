const arr = [1, 2, 34, 5, 6846, 99, 10000000000, -5578, -9894151, -884, 0];
// let initialValue = 0;
// let res = arr.reduce((acc, curr) => {
//   return acc + curr;
// }, initialValue);

// console.log("res: ", res);

// const findMax = (acc, curr) => {
//   if (acc < curr) acc = curr;
//   return acc;
// };

// const result = arr.reduce((acc, curr) => {
//   if (acc < curr) acc = curr;
//   return acc;
// }, 0);
// console.log(result);
// Array.prototype.customReduce = function (acc, curr) {

//     for(let i=0;i<this.length;i++){

//     }
// };

const newArr = arr.reduce((value) => {
  return value * 0;
}, 0);

console.log(newArr);
