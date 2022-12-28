let num = 1;

const demo = document.getElementById("demo");

// while (num <= 100) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num++);
// } while (num <= 20);

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

const cars = ["damas", "malibu", "cobalt", "matiz", " spark"];

// for (let i = 1; i <= car.length; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }
let text = "";

for (let i = 0; i <= cars.length; i++) {
  demo.innerHTML = `<div>
    ${(text += cars[i])}  
    </div>`;
}
