import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";
import favoriteReducer from "./features/favoriteSlice";
import { apiSlice } from "./features/apiSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    favorites: favoriteReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
