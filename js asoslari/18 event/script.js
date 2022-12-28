const btn = document.querySelector("#btn");
const Link = document.querySelector("a");

// Bu usul eski usul

// btn.onclick = () => {
//   alert("Click");
// };

// btn.onclick = () => {
//   alert("Click2");
// };

// bundan foydalangan yahshi

// btn.addEventListener("click", () => {
//   alert("Hello");
// });

// btn.addEventListener("click", () => {
//   alert("Hello2");
// });

// btn.addEventListener("mouseenter", (e) => {
//   e.target.remove();
// });
// let i = 0;

// const addElement = () => {
//   i++;
//   if (i === 3) {
//     btn.removeEventListener("click", addElement);
//   }
//   console.log(i);
// };

// btn.addEventListener("click", addElement);

// Link.addEventListener("click", (e) => {
//   alert("Hello");
//   e.target.style.color = "yellow";
//   e.preventDefault();
// });

// btn.addEventListener("mouseover", (e) => {
//   e.target.style.background = "red";
// });

const btns = document.querySelectorAll("button");
const logger = () => {
  console.log(1);
};

btns.forEach((item, i) => {
  item.addEventListener("click", logger, { once: true });
});
