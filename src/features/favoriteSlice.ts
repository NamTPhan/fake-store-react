import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../interfaces/product.interface";

interface FavoriteState {
  favorites: IProduct[];
}

const initialState: FavoriteState = {
  favorites: [],
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites = [...state.favorites, action.payload];
    },
  },
});

export const { addFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
