import React, { useState } from "react";
import "./index.css";
import { NavBar } from "./components/NavBar.tsx";

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
    </div>
  );
};

export default App;
