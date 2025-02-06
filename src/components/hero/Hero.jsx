import { useTranslation } from "react-i18next";
import "./Hero.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <main className="hero-container" id="home">
      <div className="h-left">
        <span>{t("hero.leftSide.span1")}</span>
        <h1>{t("hero.leftSide.h1")}</h1>
        <p>{t("hero.leftSide.p")}</p>

        <div className="h-buttons">
          <a
            href="https://github.com/danilo-humberto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={"1.3rem"} />
            <span>{t("hero.leftSide.github-btn")}</span>
          </a>
          <a
            href="https://www.linkedin.com/in/danilo-humberto-28a771215/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={"1.3rem"} />
            <span>{t("hero.leftSide.linkedin-btn")}</span>
          </a>
        </div>
      </div>
      <div className="h-right">
        <div>
          <img src="./perfil-img.jpg" alt="foto de perfil" />
          <div></div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
