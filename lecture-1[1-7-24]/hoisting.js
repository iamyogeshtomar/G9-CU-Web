Hoisting();


function Hoisting (){
    console.log("Hello Class")
}

console.log(x);
var x = 55;

console.log(x);

x = 78;

console.log(x)

x = 99;
console.log(x);


HoistingTest();

function HoistingTest(){
    console.log("If it runs, hence proved")
}

