// Function

function calc(a, b) {
  console.log(a + b);
}

calc(+prompt("raqam kiriting #1"), +prompt("raqam kiriting #2"));

let age = 30;

function fullName(name, surname) {
  age = 20;
  console.log(`My name is ${name} ${surname}`);
  console.log(age);
}

fullName("Muhammadali", "Abduhamidov");
console.log(age);

const demo = document.getElementById("demo");

const cars = function (car, color) {
  demo.innerHTML = ` 
    <div>
        <h1>My favourite car is ${car}</h1>
        <p>car's color is ${color}</p>
    </div>`;
};

cars("malibu", "black");

const fruit = (a, b) => {
  return a * b;
};
console.log(fruit(10, 5));
