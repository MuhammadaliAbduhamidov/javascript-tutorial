const p = document.querySelectorAll("p");

console.log(p);

function js(scr) {
  const script = document.createElement("script");
  script.src = scr;
  document.body.append(script);
}

js("js/second.js");
js("js/three.js");
