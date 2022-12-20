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

console.log(menu.item);

function cardCreator(menuFilters) {
  /*   const card = {
    name: menu.item,
    price: menu.price,
    link: menu.image,
  }; */

  DOMSelectors.child.innerHTML = DOMSelectors.html;

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
