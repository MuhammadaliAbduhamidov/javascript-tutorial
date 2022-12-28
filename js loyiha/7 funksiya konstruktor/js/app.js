// const number = new Number(2);
// console.log(number);

// const number = new Function("men");
// console.log(number);

function Car(name, color, nph) {
  this.name = name;
  this.color = color;
  this.nph = nph;
  this.isAirbag = true;
  this.speed = function () {
    console.log(`Car speed is ${nph}`);
  };
}

const bmw = new Car("bmw", "red", 32);
const mers = new Car("mers", "black", 10);

bmw.speed();
mers.speed();

Car.prototype.sayHello = function () {
  console.log(`Car name of ${this.name} say hello`);
};

bmw.sayHello();
console.log(bmw);
console.log(mers);
