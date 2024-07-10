// object is an instance of class

class animals {
  constructor(legs, hasTail, isMammal) {
    this.legs = legs;
    this.hasTail = hasTail;
    this.isMammal = isMammal;
  }

  get getLegs() {
    console.log(` I have ${this.legs} legs`);
  }

  set setLegs(legs) {
    if (legs < this.legs) {
      this.legs = legs;
    } else {
      console.log("Dont put false information");
    }
  }
  static animalsMessage() {
    console.log("All animals are good except humans");
  }
}

console.log(animals.animalsMessage());

const tommy = new animals(4, false, true);

console.log(tommy);

class dogs extends animals {
  constructor(legs, hasTail, isMammal, family, breed, name) {
    super(legs, hasTail, isMammal);
    this.family = family;
    this.breed = breed;
    this.name = name;
  }
  provideInformation() {
    console.log(`the name is${this.name}, and has ${this.legs} legs`);
  }
}

const raja = new dogs(4, true, true, "dogs", "indie", "raja");

console.log(raja.provideInformation());