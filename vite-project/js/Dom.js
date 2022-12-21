import { menu } from "./array";

export const menuFilters = {
  allProducts: menu,
  vegetarian: menu.filter((item) => item.type.includes("vegetarian")),
  meats: menu.filter((item) => item.type.includes("meat")),
  budget: menu.filter((item) => item.price < 8),
};

export const buttons = {
  theme: document.querySelector(".theme-button"),
  all: document.getElementById("whole"),
  meat: document.getElementById("meat"),
  vegetarian: document.getElementById("vegetarian"),
  budget: document.getElementById("budget"),
};

export const card = {
  name: menu.item,
  price: menu.price,
  link: menu.image,
};

export const DOMSelectors = {
  parent: document.getElementById("parent-menu"),
  child: document.getElementById("child"),
  html: `<div class="menu">
  <h2 class="food-name">${card.name}</h2>
  <h2 class="price">${card.price} usd</h2>
  <img class="food-visual" src="${card.link}"/>
  </div>`,
  clear: `<div class="menu">
  <div class="child" id="child"></div>
  <h2 class="food-name"></h2>
  <h2 class="price"></h2>
  <img class="food-visual" src=""/>
  </div>`,
};
