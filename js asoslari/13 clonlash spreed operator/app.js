// let x = 10;
// let y = x;

// y = y + 6;
// console.log(x);
// console.log(y);

// let name = "Muhammadali";
// let newName = name;

// newName = "Abdujalil";

// console.log(name);
// console.log(newName);

// function nusxaObj(obj) {   bu qiyin usul
//   let objNusxa = {};
//   for (let key in obj) {
//     objNusxa[key] = obj[key];
//   }

//   return objNusxa;
// }

// let cars = {
//   brand: "damas",
//   year: 2007,
//   motor: {
//     brand: "Honda motor",
//     year: 2007,
//   },
// };

// let newCars = nusxaObj(cars);

// newCars.brand = "malibu";
// newCars.year = 2020;
// newCars.motor.brand = "BMW motor";

// console.log(cars);
// console.log(newCars);

let cars = {
  brand: "Damas",
  year: 2007,
};

let addCars = {
  //   brand: "Gentra",
  //   year: 2020,
  motor: {
    brand: "Honda motor",
    year: 2007,
  },
};

// const newCars = Object.assign({}, cars);

// newCars.brand = "malibu";
// newCars.year = 2020;

// console.log(cars);
// console.log(newCars);

// const fullCars = Object.assign(cars, addCars);
const fullCars = { ...cars, ...addCars };

console.log(fullCars);
function nusxaObj(obj) {
  let newObj = {};
  for (let key in obj) {
    newObj[key] = obj[key];
  }
  return newObj;
}

let num = {
  x: 10,
  y: 25,
};

const newObj = num;

newObj.z = 15;
console.log(newObj);

const MYU = ["Fernandes", "Sancho", "Ronaldo"];

const Liverpool = ["Saloh", "Nunes"];
// spread operator

const mix = [...MYU, ...Liverpool];

console.log(mix);

const fruit = {
  nomi: "olma",
  color: "red",
};

const newFruit = { ...fruit };
newFruit.color = "green";
console.log(fruit);
console.log(newFruit);

const numb = [2, 5, 9];

function func(x, y, z) {
  console.log(x + y + z);
}

func(...numb);

const arr = ["Muhammadali", "Abduhamidov"];

function fullName(x, y) {
  console.log(`My name is ${x} ${y}`);
}

fullName(...arr);
