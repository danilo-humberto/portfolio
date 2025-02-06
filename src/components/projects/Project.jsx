import { useTranslation } from "react-i18next";
import "./Project.css";

const Project = () => {
  const { t } = useTranslation();

  return (
    <section className="project-container" id="projects">
      <h2>{t("project.title")}</h2>
      <div className="p-box">
        <img src="./pokedex.png" alt="" />
        <div className="p-box-content">
          <div className="p-box-header">
            <h3>{t("project.box.header.title")}</h3>
            <div className="p-box-header-imgs">
              <img src="./html.png" alt="logo do html" />
              <img src="./css-3.png" alt="logo do css" />
              <img src="./js.png" alt="logo do javascript" />
            </div>
          </div>
          <p>{t("project.box.box-content.paragraph")}</p>
          <div className="p-box-content-btns">
            <a
              href="https://danilo-humberto.github.io/ProjectPokedex/"
              rel="noopener noreferrer"
              target="_blank"
            >
              {t("project.box.box-content.first-a")}
            </a>
            <a
              href="https://github.com/danilo-humberto/ProjectPokedex?tab=readme-ov-file"
              rel="noopener noreferrer"
              target="_blank"
            >
              &lt;{t("project.box.box-content.second-a")} /&gt;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
