function a() {
  c();
  var a1 = 99;
  function c() {
    d();
    function d() {
      console.log("B value inside function :", b);
    }
  }
}
console.log("a ki value :", a);
var b = 10; // b defined outside function
a();
