import { useTranslation } from "react-i18next";
import "./Project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Project = () => {
  const { t } = useTranslation();

  return (
    <section className="project-container" id="projects">
      <h2>{t("project.title")}</h2>
      <Swiper
        modules={[EffectCoverflow, Pagination]}
        slidesPerView={1.5}
        spaceBetween={150}
        effect="coverflow"
        grabCursor={true}
        pagination={{clickable: true}}
        centeredSlides={true}
        coverflowEffect={{
            rotate: 0,
            stretch: 50,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
      >
        <SwiperSlide className="swiper-box">
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
        </SwiperSlide>
        <SwiperSlide className="swiper-box">
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
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Project;
