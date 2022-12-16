import "../styles/style.css";
import "./array.js";
import { menu } from "./array.js";
import { buttons, menuFilters } from "./Dom.js";

function cardCreator(menuFilters) {
  const card = {
    name: menu.item,
    price: menu.price,
    link: menu.image,
  };
  document.getElementById("parent-menu").insertAdjacentHTML(
    "afterend",
    `
  <div class="menu card">
  <h2 class="food-name">${card.name}</h2>
  <h2 class="price">${card.price} usd</h2>
  <img class="food-visual" src="${card.link}/>
  </div>);
  `
  );
}

console.log(menuFilters);

function remove() {
  document.querySelector("#parent menu").remove();
}

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
