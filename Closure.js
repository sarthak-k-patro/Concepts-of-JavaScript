function a() {
  let a = 10;
  console.log(a);
  return function b(y) {
    let a = 20;
    console.log(y);
  };
}
let x = a()("sarthak");
// console.log(x);
