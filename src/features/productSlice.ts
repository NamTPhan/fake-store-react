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
      state.cart = [
        ...state.cart.slice(0, action.payload),
        ...state.cart.slice(action.payload + 1),
      ];
    },
  },
});

export const { addProductToCart, removeProductFromCart } = productSlice.actions;
export default productSlice.reducer;
