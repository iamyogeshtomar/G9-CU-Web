// const heading = document.getElementById("title-name");

// // console.log(heading)

// // heading.onclick = function(){
// //     heading.textContent = "Goodbye World!!";
// // }

// // heading.onmouseover = function(){
// //     // heading.textContent = "Mouse has reached!!!";
// //     heading.style.backgroundColor = "Red"
// //     heading.style.fontSize = "60px"
// //     heading.style.color = "yellow"
// // }

// // heading.onmouseleave = function(){
// //     // heading.textContent = "Mouse has leaved!!!"
// //     heading.style.backgroundColor = ""
// //     heading.style.fontSize = ""
// //     heading.style.color = ""
// // }

// // heading.onclick = function(){
// //     console.log("Hello World");
// // }

// // function callHello(){
// //     console.log("Hello World");
// // }

// // heading.onclick = function (){
// //     console.log("heading has been clicked")
// // }

// // function callClick(){
// //     console.log("heading has been clicked")
// // }

// // heading.addEventListener("click", function(){
// //     callClick();
// //     callHello();
// // })

// const formContents = document.getElementsByClassName("form-content");

// const input1 = formContents[0];

// // console.log(input1)

// input1.addEventListener("keypress", function(e){
//     console.log(e.target.value);
//     // e.preventDefault();
// })

// const btn = document.getElementById("submitForm")

// btn.addEventListener("click", function(e){
//     e.preventDefault()
// })

const blood = document.querySelector("#blood");
// const nameSpan = document.querySelector("#myName");

// console.log(nameSpan)

const btn = document.querySelector("#submitForm");
const heading = document.querySelector("#title-name");
const subtext = document.querySelector("#subtext");
const wallpaper = document.querySelector("#wallpaper");


// console.log(btn);
// console.log(subtext);

heading.addEventListener("click", function () {
  // console.log(subtext.firstElementChild)
  //   subtext.firstChild.style.display = "block";
  subtext.textContent = "man";
});

subtext.addEventListener("click", function () {
  subtext.classList.toggle("customClass");
  console.log(subtext)
});
