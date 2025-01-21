arr = [1, 2, 4, 5, 6, 7, 8];
// const output = arr.filter((value) => (value % 2 === 0 ? value : null));
// const output2 = arr.filter((value) => (value % 2 !== 0 ? value : null));

// console.log(output);
// console.log(output2);

Array.prototype.customFileter = function (callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i)) newArr.push(this[i]);
  }
  return newArr;
};

const even = arr.customFileter((num) => (num % 2 === 0 ? num : null));
const odd = arr.customFileter((num) => (num % 2 !== 0 ? num : null));
console.log("even : ", even);
console.log("odd : ", odd);
