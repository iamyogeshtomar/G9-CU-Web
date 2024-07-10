const akash = {
    name: 'Akash',
    age : 29,
    height:167,
    weight:67,
    isStudent:true,
    greet:function(){
        console.log("Hello everyone")
    }
}


function studentConstructor(name, age, height, weight, isStudent){
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.isStudent = isStudent;
}

// studentConstructor.__proto__.welcome = welcomeSomeone;

function welcomeSomeone (){
    console.log("Welcome here!!!")
}

// console.log(akash) //dunder proto - keyword
// console.log(akash.__proto__) //dunder proto - keyword
// console.log(akash.__proto__.__proto__) //dunder proto - keyword
// console.log (Object.prototype)

const samarth = new studentConstructor("samarth", 21, 160, 80, true);

// console.log(samarth)

// console.log(Object.prototype.__proto__)

// samarth.welcomeSomeone = welcomeSomeone;

// console.log(this);

// console.log(studentConstructor.welcome)

const abhishek = Object.create(samarth);

// console.log(abhishek);

// console.log(abhishek.name);

const rupesh = Object.create(abhishek)

// console.log(rupesh)

abhishek.name = "Malik";

console.log(rupesh.name);



