import './root.css'
import './App.css'

import HeaderComponent from './components/header/Header'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Project from './components/projects/Project'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <div className={`container`}>
        <HeaderComponent />
        <Hero />
        <About />
        <Skills />
        <Project />
        <Footer />
      </div>
    </>
  )
}

export default App
