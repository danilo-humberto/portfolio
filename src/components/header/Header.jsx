import { useTranslation } from "react-i18next";
import './Header.css'
import SwitchTheme from "../switchTheme/SwitchTheme";
import SwitchLanguage from "../switchLanguage/SwitchLanguage";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleOpenMenu = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen)
  }

  const handleNavClick = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    // Limpeza do evento ao desmontar ou fechar o menu
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);
  return (
    <header>
      <div className="container-header">
        <span>D</span>
        <nav ref={menuRef} className={isOpen ? 'open' : ''} onClick={handleNavClick}>
          <ul className={isOpen ? 'open' : ''}>
            <li><a href="#home" onClick={handleNavClick}>{t("nav.home")}</a></li>
            <li><a href="#about" onClick={handleNavClick}>{t("nav.about")}</a></li>
            <li><a href="#skills" onClick={handleNavClick}>{t("nav.skills")}</a></li>
            <li><a href="#projects" onClick={handleNavClick}>{t("nav.projects")}</a></li>
          </ul>
        </nav>
        <div className="switches">
          <SwitchLanguage />
          <SwitchTheme />
        </div>
        <div className="menu">
          <HamburgerMenu handleOpenMenu={handleOpenMenu} isOpen={isOpen}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
