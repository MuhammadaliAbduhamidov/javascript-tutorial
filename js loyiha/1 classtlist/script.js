const btns = document.querySelectorAll("button");

// console.log(btns[0].classList.contains("some"));
// contains elementni ichida berilgan class bormi yo`qmi tekshirib beradi

// btns[0].classList.remove("blue");
// btns[1].classList.add("red");
// btns[0].classList.toggle("red");
// console.log(btns[0].classList.item(2));
// classtlist.item() elementni ichidagi clasni olib beradi

btns[0].addEventListener("click", () => {
  //   if (!btns[1].classList.contains("red")) btns[1].classList.add("red");
  //   else btns[1].classList.remove("red");
  btns[1].classList.toggle("red");
});
