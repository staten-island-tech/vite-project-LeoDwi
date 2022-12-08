import { menu } from "./array";

export const menuFilters = {
  allProducts: menu,
  Vegetarian: menu.filter((item) => item.vegetarian === "true"),
};
