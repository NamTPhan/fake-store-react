import React, { useState } from "react";
import "./index.css";
import { NavBar } from "./components/NavBar.tsx";
import { RouterProvider } from "react-router-dom";
import { routes } from "./router/router.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [theme] = useState("light");
  // const [theme, setTheme] = useState("light");

  // const themeToggler = () => {
  //   const currentTheme = theme === "dark" ? "light" : "dark";
  //   setTheme(currentTheme);
  //   localStorage.setItem("theme", currentTheme);
  // };

  return (
    <div className={theme}>
      <NavBar />
      <RouterProvider router={routes} />
      <ToastContainer />
    </div>
  );
};

export default App;
