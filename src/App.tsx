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
        <div className={`${scrolled ? "scrolled" : "nav-container"}`}>
            <Nav texto = "About" />
            <Nav texto = "Skills" />
            <Nav texto = "Portfolio" />
            <Nav texto = "Contact" />
        </div>
        <About></About>
        <Skills></Skills>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Footer></Footer>
      </div>
  )
}

export default App
