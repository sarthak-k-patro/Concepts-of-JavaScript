const parentObj = {
  1: "I am from parent obj",
  callFunc: function (p1, p2) {
    console.log("this is pointing to: ", this);
    return ` ${this[1]} and ${this.to} p1 is ${p1} and p2 is ${p2} `;
  },
};

// console.log(parentObj.callFunc("'p1'", "'p2'"));
const anotherObj = {
  1: "I am from another obj",
  to: "I am anotherObj second key- value pair",
};
//  basically call keyword helps in calling a function of one object for another object.
// here function of parentObj is called for anotherObj where this points to anotherObj
// console.log(parentObj.callFunc.call(anotherObj, "mai hu p1", "mai hu p2"));

// APPLY
// console.log(parentObj.callFunc.apply(anotherObj, ["city", "country"]));

// Bind
const newBindFunc = parentObj.callFunc.bind(anotherObj);
console.log(newBindFunc("city: Delhi", "country: India"));
