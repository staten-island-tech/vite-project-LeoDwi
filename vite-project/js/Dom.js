import { menu } from "./array";

export const menuFilters = {
  allProducts: menu,
  vegetarian: menu.filter((item) => item.includes("vegetarian")),
  meats: menu.filter((item) => item.includes("meat")),
  budget: menu.filter((item) => item.price < 8),
};

export const buttons = {
  all: document.getElementById("whole"),
  meat: document.getElementById("meat"),
  vegetarian: document.getElementById("vegetarian"),
  budget: document.getElementById("budget"),
};
