window.addEventListener("DOMContentLoaded", () => {
  const tabsParent = document.querySelector(".tabheader__items"),
    tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    loader = document.querySelector(".loader");

  // tabs
  function hideTabContent() {
    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
    tabsContent.forEach((item) => {
      item.classList.add("hide");
    });
  }
  function showTabContent(i) {
    tabs[i].classList.add("tabheader__item_active");
    tabsContent[i].classList.add("show");
    tabsContent[i].classList.remove("hide");
  }

  hideTabContent();
  showTabContent(0);

  tabsParent.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target === item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  // loader
  function load() {
    setTimeout(() => {
      loader.style.opacity = "0.5";
      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }, 2000);
  }
  load();

  // timer

  const deadline = "2022-12-24";

  function getRemaining(endtime) {
    let days, hours, minutes, seconds;

    const timer = Date.parse(endtime) - Date.parse(new Date());
    if (timer <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      days = Math.floor(timer / (1000 * 60 * 60 * 24));
      hours = Math.floor((timer / (1000 * 60 * 60)) % 60);
      minutes = Math.floor((timer / (1000 * 60)) % 60);
      seconds = Math.floor((timer / 1000) % 60);
    }
    return { days, hours, minutes, seconds };
  }

  function setClock(endtime, selector) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds");

    setInterval(updateClock, 1000);

    function getzero(num) {
      if (num >= 0 && num < 10) return `0${num}`;
      else return num;
    }

    function updateClock() {
      const t = getRemaining(endtime);
      days.innerHTML = getzero(t.days);
      hours.innerHTML = getzero(t.hours);
      minutes.innerHTML = getzero(t.minutes);
      seconds.innerHTML = getzero(t.seconds);
    }
  }
  setClock(deadline, ".timer");

  // modal

  const modalTrigger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal"),
    modalCloseBtn = document.querySelector("[data-close]");

  function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
    clearInterval(timed);
  }

  modalTrigger.forEach((item) => {
    item.addEventListener("click", openModal);
  });

  const timed = setTimeout(openModal, 4000);

  modalCloseBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target == modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  console.log(document.documentElement.clientHeight);
  console.log(window.pageYOffset);
  console.log(document.documentElement.scrollHeight);

  function showModalScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal();
      window.removeEventListener("scroll", showModalScroll);
    }
  }

  window.addEventListener("scroll", showModalScroll);
});

//  class

class MenuItem {
  constructor(scr, alt, title, descr, price, selector, ...classes) {
    this.scr = scr;
    this.alt = alt;
    this.title = title;
    this.selector = document.querySelector(selector);
    this.descr = descr;
    this.classes = classes;
    this.price = price;
    this.transfer = 11000;
  }
  changeTooUZS() {
    return this.price * this.transfer;
  }
  render() {
    const element = document.createElement("div");
    const menu = this.selector;
    if (this.classes.length === 0) {
      element.classList.add("menu__item");
    } else {
      this.classes.forEach((clasName) => element.classList.add(clasName));
    }

    element.innerHTML = `
    <img src=${this.scr} alt=${this.alt} />
    <h3 class="menu__item-subtitle">${this.title}</h3>
    <div class="menu__item-descr">
     ${this.descr}
    </div>
    <div class="menu__item-divider"></div>
    <div class="menu__item-price">
      <div class="menu__item-cost">Price:</div>
      <div class="menu__item-total"><span>${this.changeTooUZS()} uzs</span> month</div>
    </div>
    `;
    menu.append(element);
  }
}
new MenuItem(
  "img/tabs/1.png",
  "vegy",
  'Plan "Usual"',
  `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
  nesciunt facere, sequi exercitationem praesentium ab cupiditate
  beatae debitis perspiciatis itaque quaerat id modi corporis
  delectus ratione nobis harum voluptatum in.`,
  10,
  ".menu .container"
).render();
new MenuItem(
  "img/tabs/2.jpg",
  "elite",
  'Plan "Premium"',
  `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
  nesciunt facere, sequi exercitationem praesentium ab cupiditate
  beatae debitis perspiciatis itaque quaerat id modi corporis
  delectus ratione nobis harum voluptatum in.`,
  15,
  ".menu .container",
  "menu__item"
).render();
new MenuItem(
  "img/tabs/3.jpg",
  "VIP",
  'Plan "VIP"',
  `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
  nesciunt facere, sequi exercitationem praesentium ab cupiditate
  beatae debitis perspiciatis itaque quaerat id modi corporis
  delectus ratione nobis harum voluptatum in.`,
  30,
  ".menu .container",
  "menu__item"
).render();
