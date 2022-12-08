const localStorageKey = "products";

export const saveProductsInLocaleStorage = (products) =>
  localStorage.setItem(localStorageKey, JSON.stringify(products));

export const getProductsFromLocaleStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey)) || [];
