import "../styles/style.css";
import "./array.js";
import { menu } from "./array.js";
import { buttons, DOMSelectors, menuFilters, card } from "./Dom.js";

function startUp(item) {
  DOMSelectors.parent.insertAdjacentHTML(
    "afterend",
    `
  <div class="light" id="menu-card">
  <h2 class="food-name">${item.item}</h2>
  <h2 class="price">${item.price} usd</h2>
  <img class="food-visual" src="${item.image}/>
  </div>);
  `
  );
}

function cardCreator(menuFilters) {
  document.querySelector(".child").insertAdjacentHTML(
    `
  <div class="light" id="menu-card">
  <h2 class="food-name">${item.item}</h2>
  <h2 class="price">${item.price} usd</h2>
  <img class="food-visual" src="${item.image}/>
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
  <div class="light menu-card">
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
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});

buttons.all.addEventListener("click", function (event) {
  removeCards();
  menu.forEach((item) => {
    // cardCreator();
    document.querySelector(".child").insertAdjacentHTML(
      "afterend",
      `
    <div class="light menu-card">
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
    <div class="light menu-card">
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
    <div class="light menu-card">
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
    <div class="light menu-card">
    <h2 class="food-name">${item.item}</h2>
    <h2 class="price">${item.price} usd</h2>
    <img class="food-visual" src="${item.image}"/>
    </div>`
    );
  });
  event.preventDefault();
});
