window.addEventListener("DOMContentLoaded", () => {
  const now = new Date();
  console.log(now.getDay());
  console.log(now.setMonth(6, 9));
  console.log(now);

  // let start = new Date();

  // for (let i = 0; i < 5000; ) {
  //   let some = i ** 2;
  //   console.log(some);
  // }

  // let end = new Date();

  // alert(`Loop complited ${end - start}`);

  const x = document.createElement("button");
  const y = document.createElement("div");
  const t = document.createTextNode("Now time");
  y.style.cssText = `
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%, -50%);
    background-color: black;
    color: #fff;
    font-size:40px;
    display: inline-block;
    border-radius:5px;
    padding:5px 10px;
`;
  x.appendChild(t);
  document.body.append(x);

  x.addEventListener("click", () => {
    setTimeout(() => {
      document.body.append(y);
      y.innerHTML = `${now.getHours()}: ${now.getMinutes()} : ${now.getSeconds()}`;
    }, 1000);
  });
});
