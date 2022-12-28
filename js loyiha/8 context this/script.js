// "use strict";

//  context this har doim nimgadur qaram bo`ladi yani (osiladi)

// 1-) oddiy function ni contextsi xar doim window global objectga qaram bo`ladi
//  yani osiladi. Agarda qat'iy rejim yoqu bo'lsa (use strict) - context undifined ga teng

// function logger(a, b) {
//   console.log(this);
//   function log(a, b) {
//     return a + b;
//   }
//   console.log(log(2, 3));
// }
// logger(1, 2);

// 2-)  context this object ni ichidagi metodda - objectni o`ziga teng

// const obj = {
//   x: 10,
//   y: 15,
//   sum: function () {
//     console.log(this);
//   },
// };

// console.log(obj);
// obj.sum();

//  3-) Context this funksiya konstruktorida yangi objectni egzempliga teng

function Car(name, color) {
  this.name = name;
  this.color = color;
  this.isAirbag = true;
}
const bmw = new Car("BMW", "black");
console.log(bmw);

// cleasure

// const a = 4;

// function sum() {
//   const a = 5;
//   console.log(a);
// }
// sum();
