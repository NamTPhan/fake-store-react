import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    const currentTheme = theme === "dark" ? "light" : "dark";
    setTheme(currentTheme);
    localStorage.setItem("theme", currentTheme);
  };

  return (
    <div className={theme}>
      <h1>test</h1>
    </div>
  );
};

export default App;
