// console.log(this)

function fun(name, age) {
  console.log(name);
  console.log(age);
  console.log(this);
}

let obj = {
  name: "Sanyam",
  age: 16,
  isStudent: true,
};

const b = {
  name: "Samarth",
  age: 22,
};

// fun.call(obj, "Naman", 30);

obj = fun.bind(b);

console.log(obj)