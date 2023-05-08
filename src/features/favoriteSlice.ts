import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../interfaces/product.interface";

interface FavoriteState {
  products: IProduct[];
}

const initialState: FavoriteState = {
  products: [],
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    removeFavorite: (state, action) => {
      state.products = state.products.filter(
        product => product.id !== action.payload
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
