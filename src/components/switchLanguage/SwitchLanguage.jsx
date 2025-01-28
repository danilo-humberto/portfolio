import Flag from "react-world-flags";
import "./SwitchLanguage.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa"; // Ícones de seta

const SwitchLanguage = () => {
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = () => {
    const newLanguage = currentLanguage === "en" ? "pt-BR" : "en";
    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
    setIsOpen(false); // Fechar dropdown após selecionar o idioma
  };

  const renderFlag = (lang) => {
    if (lang === "pt-BR") {
      return <Flag code="BR" style={{ width: 30, height: 20 }} />;
    }
    if (lang === "en") {
      return <Flag code="US" style={{ width: 30, height: 20 }} />;
    }
    return null;
  };

  return (
    <div className="language-switcher">
      <div className="language-selector" onClick={toggleDropdown}>
        {renderFlag(currentLanguage)}
        <span>{currentLanguage === "pt-BR" ? "pt-BR" : "en-US"}</span>
        <FaChevronDown
          style={{
            marginLeft: "8px",
            fontSize: "14px",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", // Condicional para rotação
            transition: "transform 0.3s ease", // Transição suave
          }}
        />
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item" onClick={handleLanguageChange}>
            <Flag code="BR" style={{ width: 30, height: 20 }} />
            <span>pt-BR</span>
          </div>
          <div className="dropdown-item" onClick={handleLanguageChange}>
            <Flag code="US" style={{ width: 30, height: 20 }} />
            <span>en-US</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SwitchLanguage;
