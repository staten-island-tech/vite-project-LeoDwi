import "../styles/style.css";
import "./array.js";
import { menu } from "./array.js";
import { buttons, DOMSelectors, menuFilters, card } from "./Dom.js";

function startUp() {
  DOMSelectors.parent.insertAdjacentHTML(
    "afterend",
    `
  <div class="menu-card">
  <h2 class="food-name">${menu.item}</h2>
  <h2 class="price">${menu.price} usd</h2>
  <img class="food-visual" src="${menu.image}/>
  </div>);
  `
  );
}

function cardCreator(menuFilters) {
  /*   const card = {
    name: menu.item,
    price: menu.price,
    link: menu.image,
  }; */

  DOMSelectors.parent.innerHTML = DOMSelectors.html;

  /*   DOMSelectors.parent.innerHTML(
    `
  <div class="menu-card">
  <h2 class="food-name">${card.name}</h2>
  <h2 class="price">${card.price} usd</h2>
  <img class="food-visual" src="${card.link}/>
  </div>);
  `
  ); */
}

console.log(menuFilters);

function remove() {
  document.querySelector("#parent menu").remove();
}

menu.forEach((item) => {
  startUp();
});

const yeee = ["hello", "yes"];

yeee.forEach((element) => {
  DOMSelectors.parent.insertAdjacentHTML(
    "afterend",

    `<h1 class="hello">${element}</h1>;`
  );
});

buttons.all.addEventListener("click", function (event) {
  menu.forEach((item) => {
    cardCreator();
  });
  event.preventDefault();
});

buttons.meat.addEventListener("click", function (event) {
  menuFilters.meat.forEach((item) => {
    cardCreator();
  });
  event.preventDefault();
});

buttons.vegetarian.addEventListener("click", function (event) {
  menuFilters.vegetarian.forEach((item) => {
    cardCreator();
  });
  event.preventDefault();
});

buttons.budget.addEventListener("click", function (event) {
  menuFilters.budget.forEach((item) => {
    cardCreator();
  });
  event.preventDefault();
});
