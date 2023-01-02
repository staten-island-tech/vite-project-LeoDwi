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

export const DOMSelectors = {
  parent: document.getElementById("parent-menu"),
  clear: ``,
  buttons: [...document.getElementsByClassName("button")],
};
