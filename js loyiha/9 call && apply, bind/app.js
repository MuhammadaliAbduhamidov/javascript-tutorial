"use strict";

// call && apply

// function logger(speed) {
//   console.log(
//     `My Car is ${this.name} color is ${this.color}  speed is ${speed}`
//   );
// }

// const car = {
//   name: "BMW",
//   color: "black",
// };

// logger.call(car, 320);
// logger.apply(car, [200]);

// const btn = document.querySelector("button");
// btn.addEventListener("click", (e) => {
//   e.target.style.background = "red";
// });

// bind thisga teng va yangi funksiya qaytaradi

function sum(num) {
  return this + num;
}
const multiple = sum.bind(3);
console.log(multiple(10));

// const obj = {
//   x: 10,
//   y: 15,
//   sum: () => {
//     console.log(this);
//   },
// };
// obj.sum();

// strelkali funksiya hech qanday context thisga ega emas u xar doim o`zini tepasidagi
// contextga qaram bo`ladi
