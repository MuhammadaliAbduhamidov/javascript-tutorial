// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);

// console.log(document.querySelector("#btn").parentElement);

// console.log(document.querySelectorAll("button")[1].nextElementSibling);
// console.log(document.querySelectorAll("button")[1].previousElementSibling);

for (let node of document.body.childNodes) {
  if (node.nodeName === "#text") {
    continue;
  }
  console.log(node);
}
