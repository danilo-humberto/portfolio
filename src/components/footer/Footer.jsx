import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();
  return <footer className="footer-container">
    &copy; {t('footer.text', {
        year: new Date().getFullYear()
    })}
  </footer>;
};

export default Footer;
