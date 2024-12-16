import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.getAttribute("data-theme") === "dark"
  );

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setIsDarkMode(newTheme === "dark");
  };

  return (
    <button
      className="btn btn-outline btn-secondary flex items-center space-x-2"
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <FaSun className="text-yellow-400" size={18} />
      ) : (
        <FaMoon className="text-gray-600" size={18} />
      )}
      <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
    </button>
  );
};

export default ThemeToggle;
