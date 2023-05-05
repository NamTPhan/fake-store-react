import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../views/HomePage";
import { FavoritesPage } from "../views/FavoritesPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "favorites",
    element: <FavoritesPage />,
  },
]);
