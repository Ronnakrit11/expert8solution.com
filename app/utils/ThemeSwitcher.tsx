import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa6";


export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setTheme("light"); // Set default theme
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save theme to local storage
  };

  if (!mounted) {
    return null;
  }

  return (
    <div  >
      {theme === "light" ? (
        <BiSun
          className="cursor-pointer dark:text-gray-400 dark:border-gray-400 text-gray-600 border-2 p-2 rounded-xl"
          size={35}
          onClick={toggleTheme}
        />
      ) : (
        <FaMoon
          size={35}
          className="cursor-pointer dark:text-gray-400 dark:border-gray-400 text-gray-600 border-2 p-2 rounded-xl"
          onClick={toggleTheme}
        />
      )}
    </div>
  );
};
