import { createSlice } from "@reduxjs/toolkit";
import { getProductsFromLocaleStorage } from "./productsFromLocaleStorage";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: getProductsFromLocaleStorage(),
  },

  reducers: {
    addProduct: ({ products }, { payload: newProduct }) => {
      products.unshift(newProduct);
    },
    removeProduct: ({ products }, { payload: productId }) => {
      const index = products.findIndex(({ id }) => id === productId);
      products.splice(index, 1);
    },
    toggleProductDone: ({ products }, { payload: productId }) => {
      const index = products.findIndex(({ id }) => id === productId);
      products[index].done = !products[index].done;
    },
  },
});

export const { addProduct, removeProduct, toggleProductDone } =
  productsSlice.actions;

const selectProductsState = (state) => state.products;

export const selectProducts = (state) => selectProductsState(state).products;

export const getProductById = (state, productId) =>
  selectProducts(state).find(({ id }) => id === productId);

export default productsSlice.reducer;
