import './root.css'
import './App.css'

import HeaderComponent from './components/header/Header'

function App() {

  return (
    <>
      <div className={`container dark-mode`}>
        <HeaderComponent />
      </div>
    </>
  )
}

export default App
