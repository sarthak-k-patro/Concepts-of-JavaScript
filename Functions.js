var x = "007";

console.log("x outside of all: ", x);
a();
b();

function a(b) {
  x = "sarthak ";
  console.log("func a ka x:", x);
}

function b() {
  x = "Shriya ";
  console.log("func b ka x:", x);
}
