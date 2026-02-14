import { createContext, useEffect, useState } from "react";

const themeContext = createContext();
const getDefaultTheme = () => localStorage.getItem("theme") || "light";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getDefaultTheme());
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default themeContext;
