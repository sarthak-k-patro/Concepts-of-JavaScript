const p1 = Promise.resolve("Data 1");
const p2 = Promise.reject("Error 2");
const p3 = Promise.reject("Error 2");
const p4 = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("Data 2");
    res("Data 2");
  }, 2000);
});
Promise.allSettled([p1, p2, p3, p4]).then((val) => {
  console.log("settled promises : ", val);
  val.map((eachVal) => {
    eachVal.status === "fulfilled"
      ? console.log(eachVal.value)
      : console.log(eachVal.reason);
  });
});
