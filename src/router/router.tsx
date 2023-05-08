import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../views/HomePage";
import { FavoritesPage } from "../views/FavoritesPage";
import { NotFoundPage } from "../views/NotFoundPage";
import { ProductInfoPage } from "../views/ProductInfoPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "favorites",
    element: <FavoritesPage />,
  },
  {
    path: "productinfo/:id",
    element: <ProductInfoPage />,
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  },
]);
