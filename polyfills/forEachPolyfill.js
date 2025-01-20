const arr = [1, 2, 3, 4, 5];

// arr.forEach((item, index) => {
//   process.stdout.write(` ${index}=> item: ${item},\n`);
// });

Array.prototype.customForEach = function (callbackFunc) {
  for (let i = 0; i < this.length; i++) {
    callbackFunc(this[i], i, this);
  }
  return this;
};
arr.customForEach((item, index) => {
  process.stdout.write(` ${index}=> item: ${item},\n`);
});
