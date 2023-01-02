import "../styles/style.css";
import "./array.js";
import { menu } from "./array.js";
import { buttons, DOMSelectors, menuFilters } from "./Dom.js";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function cardCreator(x) {
  x.forEach((item) => {
    DOMSelectors.parent.insertAdjacentHTML(
      "beforeend",
      `
      <div class="menu-card" data-aos="flip-up">
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

cardCreator(menu);

buttons.theme.addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    DOMSelectors.parent.classList.remove("light");
    DOMSelectors.parent.classList.add("dark");
    DOMSelectors.buttons.forEach((element) => {
      element.classList.remove("light");
      element.classList.add("dark");
    });
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    DOMSelectors.parent.classList.remove("dark");
    DOMSelectors.parent.classList.add("light");
    DOMSelectors.buttons.forEach((element) => {
      element.classList.remove("dark");
      element.classList.add("light");
    });
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
