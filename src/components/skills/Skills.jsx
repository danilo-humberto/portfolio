import { useTranslation } from 'react-i18next'
import './Skills.css'

const Skills = () => {

    const { t } = useTranslation();
  return (
    <section className='skills-container' id='skills'>
        <h2>{t('skills.title')}</h2>
        <div className="skills-div">
            <div className="skills-icon">
                <img src='/html.png' alt='logo do html'/>
                <span>HTML5</span>
            </div>
            <div className="skills-icon">
                <img src='/css-3.png' alt='logo do css'/>
                <span>CSS3</span>
            </div>
            <div className="skills-icon">
                <img src='/js.png' alt='logo do js'/>
                <span>JavaScript</span>
            </div>
            <div className="skills-icon">
                <img src='/sass.png' alt='logo do sass'/>
                <span>Sass</span>
            </div>
            <div className="skills-icon">
                <img src='/react.png' alt='logo do react'/>
                <span>React JS</span>
            </div>
            <div className="skills-icon">
                <img src='/git.png' alt='logo do git'/>
                <span>Git</span>
            </div>
            <div className="skills-icon">
                <img src='/github.png' alt='logo do github'/>
                <span>Github</span>
            </div>
            <div className="skills-icon">
                <img src='/node-js.png' alt='logo do node'/>
                <span>Node JS</span>
            </div>
        </div>
    </section>
  )
}

export default Skills
