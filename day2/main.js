const charc = {
  b: 2,
  a: 1,
  d: 44,
  c: 3,
  e: 5,
};

// charc.d = 4;
console.log(charc);

const newKey = "z";
const oldKey = "d";
charc[newKey] = charc[oldKey];
delete charc[oldKey];
console.log(charc);

const convertToString = JSON.stringify(charc);
console.log(convertToString);

// const convertToOject = Object.assign(convertToString);
const convertToOject = JSON.parse(convertToString);
console.log(convertToOject);

// --------------------------------------------------------

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  displayinfo() {
    console.log(`this is a ${this.brand} ${this.model} ${this.year}`);
  }
}

// creating instance of car class
let car1 = new Car("maruti", "zeta", 2024);
let car2 = new Car("toyota", "civic", 2021);

//method invocation
car1.displayinfo();
car2.displayinfo();

// -------------------------------------------------------

// class based approach
