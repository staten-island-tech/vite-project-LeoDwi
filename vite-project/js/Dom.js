import { menu } from "./array";

export const menuFilters = {
  allProducts: menu,
  vegetarian: menu.filter((item) => item.vegetarian === "True"),
  meats: menu.filter((item) => item.vegetarian === "False"),
  budget: menu.filter((item) => item.price < $8),
};
