const btn = document.querySelector("#btn");
const car = document.querySelector(".car");

let timed;
let i = 0;

// function frame() {
//   if (i === 3) {
//     clearInterval(timed);
//     alert("Set time out");
//   } else {
//     i++;
//     console.log(i);
//   }
// }

// function logger() {
//   console.log("Set time out");
// }
// function logger2() {
//   console.log("Set time in");
// }
let pass = 0;
function frame() {
  if (pass === 700) {
    clearInterval(timed);
  } else {
    pass++;
    car.style.left = pass + "px";
  }
}

btn.addEventListener("click", () => {
  timed = setInterval(frame, 10);
});
