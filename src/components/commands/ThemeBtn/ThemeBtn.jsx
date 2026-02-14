import { useContext } from "react";
import themeContext from "../../../contexts/Theme";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeBtn = () => {
  const { theme, toggleTheme } = useContext(themeContext);
  return (
    <button
      className="cursor-pointer w-10 h-10 rounded-full text-xl bg-gray-800 dark:bg-gray-100 text-amber-400  flex items-center justify-center "
      onClick={toggleTheme}
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeBtn;
