const obj1 = {
  key1: 10,
  key2: function x() {
    return console.log(this.key1);
  },
};

const ans = obj1.key2;

// using Bind
// const newMethod = ans.bind(obj1);
// newMethod();

// using call
ans.call(obj1);
