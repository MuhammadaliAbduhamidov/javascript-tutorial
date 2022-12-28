let name = "Muhammadali";

let str = new String(name);
console.log(str);

let num = 1020;
let newNum = new Number(num);

console.log(newNum);

const car = {
  motor: "BMW motor",
  color: "red",
  isAirbag: true,
};

const GM = {
  isAirbag: false,
};

// GM.__proto__ = car;

const mix = Object.setPrototypeOf(GM, car);
const cars = Object.create(car);
console.log(cars);
