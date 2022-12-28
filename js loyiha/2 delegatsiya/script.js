const wrapper = document.querySelector(".btn-block");
const btns = document.querySelectorAll("button");

wrapper.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    console.log("click");
  }
});

// btns.forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log("clicked");
//   });
// });

const btn = document.createElement("button");
btn.classList.add("red");
wrapper.append(btn);

const btn1 = document.createElement("button");
btn1.classList.add("blue");
wrapper.append(btn1);
