// Methods

const user = "Muhammadali";

// console.log(user.length);  property

// console.log(user.toUpperCase());  methods
// console.log(user.toLocaleLowerCase());

const greeting = "Hello world";

// console.log(greeting.indexOf("d"));
// console.log(greeting.slice(6, 11));
// console.log(greeting.substring(0, 5));
// console.log(greeting.substr(1, 10));

const num = 3.6;
// console.log(Math.round(num));  Math.round sonni yahlitlab beradi.

const borderWidth = "13.6px";
// console.log(parseInt(borderWidth));
// sonni butun qismini ajratib beradi.
// console.log(parseFloat(borderWidth));
// sonni o`zini ajratib beradi.

const demo = document.getElementById("demo");

const script = greeting.replace("world", "javascript");
demo.innerHTML = `
${script}
`;
// console.log(greeting.split());  stringni massivga aylanirib beradi.
