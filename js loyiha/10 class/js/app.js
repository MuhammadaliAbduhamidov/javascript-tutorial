"use strict";

class Car {
  constructor(name, color, speed) {
    this.name = name;
    this.color = color;
    this.speed = speed;
  }
  calcSpeed() {
    return this.speed * 100;
  }
}

class Spark extends Car {
  constructor(name, color, speed, isAirbag, extraballon) {
    super(name, color, speed);
    this.isAirbag = isAirbag;
    this.extraballon = extraballon;
  }
  logger() {
    console.log(
      `name of Car ${this.name} color is ${this.color}. are there is airbag ${this.isAirbag}. extraballon is ${this.extraballon}`
    );
  }
}

const bmw = new Car("BMW", "Black", 200);
const spark = new Spark("Spark", "white", 100, true, 5);

console.log(bmw.calcSpeed());
spark.logger();
console.log(spark.calcSpeed());
