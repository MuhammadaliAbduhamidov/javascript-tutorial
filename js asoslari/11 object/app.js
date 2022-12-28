const thief = {
  jacket: "black",
  height: 1.7,
  colors: {
    hair: "gray",
    style: "courly",
  },
  escape: () => {
    console.log(`quickly ran through the door`);
  },
};

thief.escape();

// console.log(Object.keys(thief).length);  massivga aylantiradi.

// for (let key in thief) {
//   if (typeof thief[key] === "object") {
//     for (let i in thief[key]) {
//       console.log(`property ${i} has value ${thief[key][i]}`);
//     }
//   } else {
//     console.log(`property ${key} ha value ${thief[key]}`);
//   }
// }

// const littleSister = {
//   name: "Ruhshona",
//   age: 17,
//   study: "University",
//   colors: {
//     hair: "black",
//     style: "straight",
//   },
// };

// const { name, age, study } = littleSister;
// const { hair, style } = littleSister.colors;

// console.log(name);
// console.log(age);
// console.log(study);
// console.log(hair);
// console.log(style);
