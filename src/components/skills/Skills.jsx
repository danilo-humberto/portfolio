import { useTranslation } from "react-i18next";
import "./Skills.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay, FreeMode } from "swiper/modules";

const Skills = () => {
  const { t } = useTranslation();
  return (
    <section className="skills-container" id="skills">
      <h2>{t("skills.title")}</h2>
      <div className="skills-div">
        <Swiper
            modules={[Autoplay, FreeMode]}
            loop={true}
            speed={1000}
            freeMode={true}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
            }}
            breakpoints={{
              300: {slidesPerView: 3},
              800: {slidesPerView: 5},
              1440: {slidesPerView: 7}
            }}
            allowTouchMove={false}
            style={{width: '100%'}}
        >
          <SwiperSlide>
            <div className="skills-icon">
              <img src="/html.png" alt="logo do html" />
              <span>HTML5</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skills-icon">
              <img src="/css-3.png" alt="logo do css" />
              <span>CSS3</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skills-icon">
              <img src="/js.png" alt="logo do js" />
              <span>JavaScript</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skills-icon">
              <img src="/sass.png" alt="logo do sass" />
              <span>Sass</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skills-icon">
              <img src="/react.png" alt="logo do react" />
              <span>React JS</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skills-icon">
              <img src="/git.png" alt="logo do git" />
              <span>Git</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skills-icon">
              <img src="/github.png" alt="logo do github" />
              <span>Github</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skills-icon">
              <img src="/node-js.png" alt="logo do node" />
              <span>Node JS</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;
