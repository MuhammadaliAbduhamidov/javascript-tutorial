// DOM
//  old way
// const box = document.getElementById("box");
// console.log(box);

// const buttons = document.getElementsByTagName("button");
// console.log(buttons[1]);

// const circles = document.getElementsByClassName("circle");
// console.log(circles[1]);

// new way

// const box = document.querySelector("#box");
// console.log(box);

// const hearts = document.querySelectorAll(".heart");

// hearts.forEach((item) => {
//   console.log(item);
// });

// DOM methods

const box = document.querySelector("#box");
const btn = document.querySelectorAll("button");
const circle = document.querySelectorAll(".circle");
const circleWrapper = document.querySelector(".circle__wrapper");

box.style.cssText = "border: 10px solid red; border-radius:50%";

// const newBtn = document.createElement("button");
// newBtn.style.cssText =
//   "position:absolute; top:50%;left:50%; background-color:red";

// document.body.append(newBtn);

const myCircle = document.createElement("div");

myCircle.classList.add("circle");
myCircle.style.background = "yellow";
myCircle.style.color = "black";
myCircle.innerHTML = "<pre>E</pre>";
myCircle.textContent = "E";

// circleWrapper.append(myCircle);
// circleWrapper.before(myCircle);
// circleWrapper.after(myCircle);
// circle[0].before(myCircle);
// circle[0].after(myCircle);
// circle[1].replaceWith(myCircle);
// circleWrapper.insertAdjacentHTML("beforeend", "<b>E</b>");
