import './root.css'
import './App.css'

import HeaderComponent from './components/header/Header'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Skills from './components/skills/Skills'

function App() {

  return (
    <>
      <div className={`container`}>
        <HeaderComponent />
        <Hero />
        <About />
        <Skills />
      </div>
    </>
  )
}

export default App
