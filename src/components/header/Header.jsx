import { useTranslation } from "react-i18next";
import { IoSunny } from "react-icons/io5";
import './Header.css'

const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <div className="header-logo">
        <span>D</span>
      </div>

      <nav>
        <ul>
          <li><a href="">{t("nav.home")}</a></li>
          <li><a href="">{t("nav.about")}</a></li>
          <li><a href="">{t("nav.projects")}</a></li>
        </ul>
      </nav>

      <div className="switches">
        <IoSunny size={'1.8em'}/>
      </div>
    </header>
  );
};

export default Header;
