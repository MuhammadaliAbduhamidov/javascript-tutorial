"use strict";
const uzs = document.querySelector("#uzs"),
  usd = document.querySelector("#usd");

uzs.addEventListener("input", (e) => {
  const request = new XMLHttpRequest();

  request.open("GET", "json/current.json");
  request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  request.send();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.response);
      usd.value = +uzs.value / data.current.usd;
    } else {
      usd.value = "Something went wrong";
    }
  });

  // status 200 - ok, 404 - not-found, 500 - server-error, 400 - client-error;
  // statusText
  // response requestdan kelgan javob
  // readystate
});
