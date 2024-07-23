// console.log("Start");

// setTimeout(() => {
//   console.log("timer started!!!");
// }, 5000);

// console.log("Reached first step!!!");

// setTimeout(() => {
//   console.log("timer step 1!!!");
// }, 3000);

// console.log("Step two!!!");

// setTimeout(() => {
//   console.log("timer ends here!!!");
// }, 2000);

// console.log("programme ends here!!!");

// const a = fetch("https://api.github.com/users")
// console.log(a);

var watchingMovies = true;
var isMovieGood = true;

const p1 = new Promise((resolve, reject) => {
  if (watchingMovies) {
    resolve("You get popcorns");
  } else reject("You get nothing!!!");
});

const p2 = new Promise((resolve, reject) => {
  resolve("You get cold drinks");
  reject("you do not get cold drinks");
});

const p3 = new Promise((resolve, reject) => {
  if (isMovieGood) {
    resolve("We watched full movie");
  }
  reject("I`m leaving in the middle of movie");
});

p1.then((resolve) => {
  console.log(resolve);
  console.log("We got popcorns!!!");
  return p2;
})
  .then((resolve) => {
    console.log(resolve);
    return p3;
  })
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((reject) => {
    console.log(reject);
  });
