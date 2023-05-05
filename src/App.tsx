import React, { useState } from "react";
import "./index.css";
import { NavBar } from "./components/NavBar.tsx";
import { RouterProvider } from "react-router-dom";
import { routes } from "./router/router.tsx";

const App = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    const currentTheme = theme === "dark" ? "light" : "dark";
    setTheme(currentTheme);
    localStorage.setItem("theme", currentTheme);
  };

  return (
    <div className={theme}>
      <NavBar />
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
