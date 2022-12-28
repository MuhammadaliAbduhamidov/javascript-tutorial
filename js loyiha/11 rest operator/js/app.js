// function num(a, b, ...rest) {
//   console.log(a);
//   console.log(b);
//   console.log(rest);
// }
// num(1, 2, 3, 4, 5, 6, 7, 8, 9);

// function logger(name, num, ...classes) {
//   this.name = name;
//   this.num = num;
//   this.classes = classes;
//   console.log(
//     `My name is ${this.name} ${classes[1]} number is ${num + classes[0]}`
//   );
// }

// logger("Muhammadali", 10, 50, "Abduxamidov");

function logger(num, def = 10) {
  // def = def || 10;
  console.log(num + def);
}
logger(1, 2);
