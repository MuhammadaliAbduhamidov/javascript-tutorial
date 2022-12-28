// function first() {
//   // code
//   setTimeout(() => {
//     console.log(1);
//     second();
//   }, 1000);
// }

// function second() {
//   // code
//   console.log(2);
// }

// first(second);

function edu(name, callback, education) {
  setTimeout(() => {
    console.log(`My name is ${name}`);
    callback();
    education("University");
  }, 2000);
}

function callback() {
  console.log(`I am a student`);
}

function education(edu) {
  console.log(`I study ${edu}`);
}

edu("Muhammadali", callback, education);
