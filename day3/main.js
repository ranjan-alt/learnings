// method chaning
// is bar hm ek string lenge or string to alag alag tarike se

class Calculator {
  constructor(value) {
    this.value = value;
  }
  add(num) {
    this.value += num;
    return this;
  }

  subtract(num) {
    this.value -= num;
    this.value = this.value - num;
    return this;
  }
  getValue() {
    return this.value;
  }
}

// const data = new Calculator.add(5);
// console.log(add);
const data = new Calculator(2);
const getValue = data.add(5).subtract(10).getValue();
// const subtractedValue = getValue - data.subtract(10);
console.log(getValue);
