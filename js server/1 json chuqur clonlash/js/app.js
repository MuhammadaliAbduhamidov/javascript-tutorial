"use strict";

const car = {
  name: "bmw",
  color: "black",
  extra: {
    isAirbag: true,
    ballon: 5,
  },
};

// const cloneToJSON = JSON.stringify(car);
// const cloneToobj = JSON.parse(cloneToJSON);
// console.log(cloneToJSON);
// console.log(cloneToobj);

// json.stringify = objectdan formatdan json formatga o`girib beradi.
// json.parse = json formatdan object formatga o`girib beradi.

const newCar = JSON.parse(JSON.stringify(car));
newCar.extra.ballon = 10;
newCar.name = "Malubi";

console.log(newCar);
