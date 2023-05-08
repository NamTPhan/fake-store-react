import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../interfaces/product.interface";

interface ProductState {
  cart: IProduct[];
}

const initialState: ProductState = {
  cart: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeProductFromCart: (state, action) => {
      state.cart = state.cart.filter(product => product.id !== action.payload);
    },
  },
});

export const { addProductToCart, removeProductFromCart } = productSlice.actions;
export default productSlice.reducer;
