// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // arr.pop();
// // arr.push(10);

// // arr.shift();     bu metodlarni ishlatmaymiz.
// // arr.unshift(0);

// console.log(arr);

// for (let i = 0; i < car.length; i++) {
//   if (car[i] === "malibu") {
//     console.log(`My favourite car is ${car[i]}`);
//   }
// }

// for (let value of car) {
//   if (value === "spark") {
//     console.log(`My favourite car's is ${value}`);
//   }
// }

// const question = car.push(prompt());

// for (let i of newCar.sort()) {
//   console.log(`My favourite cars is ${i}`);
// }

const num = [1, 12, 8, 56, 2, 6, 19];

num.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});

// console.log(num.sort(compareFunc));

// function compareFunc(a, b) {
//   return a - b;
// }

// const car = prompt("What is your favourite cars");

// const newCar = car.split(", ");
// ("stringni massivga aylantirib beradi");

// console.log(newCar.join());
// ("massivni strinngga aylantirib beradi");

const person = {
  name: "Ahmad",
  age: 15,
  color: {
    hair: "black",
    style: "curly",
  },
  func: () => {
    console.log("He runs every morning");
  },
};

// person.func();

// for (let keys in person) {
//   if (typeof person[keys] === "string") {
//     console.log(`his name is ${person[keys]}`);
//   } else if (typeof person[keys] === "number") {
//     console.log(`he is ${person[keys]} years old`);
//   } else if (typeof person[keys] === "object") {
//     for (let i in person[keys]) {
//       console.log(`his hair  ${person[keys][i]}`);
//     }
//   } else {
//     person.func();
//   }
// }
