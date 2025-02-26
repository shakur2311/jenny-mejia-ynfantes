import Nav from './assets/components/nav/Nav.tsx'
import About from './assets/components/container/About.tsx'
import './App.css'

function App() {

  return (
      <div className="page">
        <div className="nav-container">
            <Nav texto = "About" />
            <Nav texto = "Skills" />
            <Nav texto = "Portfolio" />
            <Nav texto = "Contact" />
        </div>
        <About></About>
        
        
      </div>
  )
}

export default App
