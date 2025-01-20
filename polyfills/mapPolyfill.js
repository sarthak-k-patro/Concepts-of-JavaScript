const arr = [1, 2, 3, 4, 5];

//  Inbuilt map function
// const result = arr.map((item, index) => {
//   return item * 2;
// });
// console.log(result);

Array.prototype.customMap = function (callbackFunc) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callbackFunc(this[i], i));
  }
  //   console.log("new array hu main: ", newArr);
  return newArr;
};

let res = arr.customMap((item, index) => {
  return index * 2;
});
console.log(res);
