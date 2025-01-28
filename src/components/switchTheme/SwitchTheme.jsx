import "./SwitchTheme.css";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

const SwitchTheme = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
      // Verifica o tema atual no carregamento da página
      const currentTheme = document.body.getAttribute("data-theme");
      setIsDarkMode(currentTheme === "dark");
    }, []);
  
    const toggleTheme = () => {
      const newTheme = isDarkMode ? "light" : "dark";
      setIsDarkMode(!isDarkMode);
      document.body.setAttribute("data-theme", newTheme); // Alterando o data-theme no body
    };
  
    return (
      <div className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? <IoSunny size={24} /> : <FaMoon size={24} />}
      </div>
    );
};

export default SwitchTheme;
