import { useTranslation } from "react-i18next";
import './Header.css'
import SwitchTheme from "../switchTheme/SwitchTheme";
import SwitchLanguage from "../switchLanguage/SwitchLanguage";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <div className="container-header">
        <span>D</span>
        <nav>
          <ul>
            <li><a href="">{t("nav.home")}</a></li>
            <li><a href="">{t("nav.about")}</a></li>
            <li><a href="">{t("nav.skills")}</a></li>
            <li><a href="">{t("nav.projects")}</a></li>
          </ul>
        </nav>
        <div className="switches">
          <SwitchLanguage />
          <SwitchTheme />
        </div>
      </div>
    </header>
  );
};

export default Header;
