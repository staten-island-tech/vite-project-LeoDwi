import "../styles/style.css";
import "./array.js";
import { menu } from "./array.js";
import { buttons, DOMSelectors, menuFilters, card } from "./Dom.js";

function startUp(item) {
  DOMSelectors.parent.insertAdjacentHTML(
    "afterend",
    `
  <div class="menu-card">
  <h2 class="food-name">${item.item}</h2>
  <h2 class="price">${item.price} usd</h2>
  <img class="food-visual" src="${item.image}/>
  </div>);
  `
  );
}

function cardCreator(menuFilters) {
  const card = {
    name: menu.item,
    price: menu.price,
    link: menu.image,
  };

  DOMSelectors.parent.insertAdjacentHTML(
    `
  <div class="menu-card">
  <h2 class="food-name">${card.name}</h2>
  <h2 class="price">${card.price} usd</h2>
  <img class="food-visual" src="${card.link}/>
  </div>);
  `
  );
}

function removeCards() {
  DOMSelectors.parent.innerHTML = DOMSelectors.clear;
}

console.log(menuFilters);

menu.forEach((item) => {
  DOMSelectors.child.insertAdjacentHTML(
    "afterend",
    `
  <div class="menu-card">
  <h2 class="food-name">${item.item}</h2>
  <h2 class="price">${item.price} usd</h2>
  <img class="food-visual" src="${item.image}"/>
  </div>`
  );
});

buttons.theme.addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    document.querySelectorAll(".menu-card").classList.add("dark");
    document.querySelectorAll(".menu-card").classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    document.querySelectorAll(".menu-card").classList.add("light");
    document.querySelectorAll(".menu-card").classList.remove("dark");
  }
});

buttons.all.addEventListener("click", function (event) {
  removeCards();
  menu.forEach((item) => {
    // cardCreator();
    document.querySelector(".child").insertAdjacentHTML(
      "afterend",
      `
    <div class="menu-card">
    <h2 class="food-name">${item.item}</h2>
    <h2 class="price">${item.price} usd</h2>
    <img class="food-visual" src="${item.image}"/>
    </div>`
    );
  });
  event.preventDefault();
});

buttons.meat.addEventListener("click", function (event) {
  removeCards();
  menuFilters.meats.forEach((item) => {
    document.querySelector(".child").insertAdjacentHTML(
      "afterend",
      `
    <div class="menu-card">
    <h2 class="food-name">${item.item}</h2>
    <h2 class="price">${item.price} usd</h2>
    <img class="food-visual" src="${item.image}"/>
    </div>`
    );
  });
  event.preventDefault();
});

buttons.vegetarian.addEventListener("click", function (event) {
  removeCards();
  menuFilters.vegetarian.forEach((item) => {
    document.querySelector(".child").insertAdjacentHTML(
      "afterend",
      `
    <div class="menu-card">
    <h2 class="food-name">${item.item}</h2>
    <h2 class="price">${item.price} usd</h2>
    <img class="food-visual" src="${item.image}"/>
    </div>`
    );
  });
  event.preventDefault();
});

buttons.budget.addEventListener("click", function (event) {
  removeCards();
  menuFilters.budget.forEach((item) => {
    document.querySelector(".child").insertAdjacentHTML(
      "afterend",
      `
    <div class="menu-card">
    <h2 class="food-name">${item.item}</h2>
    <h2 class="price">${item.price} usd</h2>
    <img class="food-visual" src="${item.image}"/>
    </div>`
    );
  });
  event.preventDefault();
});
