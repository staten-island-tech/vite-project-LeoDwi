import "../styles/style.css";
import "./array.js";
import { menu } from "./array.js";
import { buttons, DOMSelectors, menuFilters } from "./Dom.js";

function cardCreator(x) {
  x.forEach((item) => {
    DOMSelectors.parent.insertAdjacentHTML(
      "beforeend",
      `
      <div class="menu-card">
      <h2 class="food-name">${item.item}</h2>
      <h2 class="price">${item.price} usd</h2>
      <img class="food-visual" src="${item.image}" alt="food visual."/>
      </div>
    `
    );
  });
}

function removeCards() {
  DOMSelectors.parent.innerHTML = DOMSelectors.clear;
}

console.log(menuFilters);

cardCreator(menu);

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
  cardCreator(menuFilters.allProducts);
  event.preventDefault();
});

buttons.meat.addEventListener("click", function (event) {
  removeCards();
  cardCreator(menuFilters.meats);
  event.preventDefault();
});

buttons.vegetarian.addEventListener("click", function (event) {
  removeCards();
  cardCreator(menuFilters.vegetarian);
  event.preventDefault();
});

buttons.budget.addEventListener("click", function (event) {
  removeCards();
  cardCreator(menuFilters.budget);
  event.preventDefault();
});
