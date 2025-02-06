import { useTranslation } from 'react-i18next'
import './About.css'

const About = () => {

  const { t } = useTranslation();

  return (
    <section className='about-container' id='about'>
      <div className="vertical-line"></div>
      <div className="a-content">
        <h2>{t('about.title')}</h2>
        <p>{t('about.description')}</p>
      </div>
      <img src="./mark2.png" alt="imagem das aspas" />
    </section>
  )
}

export default About
