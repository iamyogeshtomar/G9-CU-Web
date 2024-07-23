// var watchingMovies = true;

// const p1 = new Promise(function (resolve, reject) {
//   if (watchingMovies) {
//     resolve("You get popcorns!!!!");
//   } else {
//     reject("You get nothing!!!!");
//   }
// });

// const p2 = new Promise((resolve, reject) => {
//   // if (watchingMovies) {
//   //   resolve("We get cold drinks");
//   // } else {
//   //   reject("No cold drinks for you!!!!");
//   // }
//   resolve("You have popcorns so you get cold drink"),
//   reject("you get neither popcorns nor cold drinks");
// });

// // p.then(
// //   // resolve function
// //   (resolve) => console.log(resolve),

// //   // reject function
// //   (reject) => console.log(reject)
// // );

// p1.then((resolve) => console.log(resolve)) //you get a from here
// .p2.then((resolve)=>{console.log(resolve)})// you get b from here
// .catch((err) => console.log(err));

// console.log(p1);

const ghfetch = fetch("https://api.github.com/users");

console.log(ghfetch);
