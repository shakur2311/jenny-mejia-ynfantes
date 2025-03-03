import Nav from './assets/components/nav/Nav.tsx'
import About from './assets/components/container/About.tsx'
import Skills from './assets/components/container/Skills.tsx'
import Portfolio from './assets/components/container/Portfolio.tsx'
import Contact from './assets/components/container/Contact.tsx'
import Footer from './assets/components/container/Footer.tsx'
import './App.css'
import {useState, useEffect} from 'react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isResponsiveNavOpen, setIsResponsiveNavOpen ] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
        setScrolled(true);
    } else {
        setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <div className="page">
        <button className="menu-btn" onClick={() => setIsResponsiveNavOpen(true)}>
         <i><i className="fa-solid fa-bars"></i></i>
        </button>

        <div className={`burguer-nav ${isResponsiveNavOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={() => setIsResponsiveNavOpen(false)}>
            <i className="fa-solid fa-xmark"></i>
          </button>

          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className={`${scrolled ? "scrolled" : "nav-container"}`}>
            <Nav texto = "About" href="#about"/>
            <Nav texto = "Skills" href="#skills"/>
            <Nav texto = "Portfolio" href="#portfolio"/>
            <Nav texto = "Contact" href="#contact"/>
        </div>
        <About></About>
        <Skills></Skills>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Footer></Footer>
        <a className={`${scrolled ? "scrollUpDisplay" : ""}`} href='#about'><i className="fa-solid fa-arrow-up"></i></a>
      </div>
  )
}

export default App
