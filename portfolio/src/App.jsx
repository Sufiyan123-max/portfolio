
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skill from './components/Skill'
import Certification from './components/Certfication'
function App() {

  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Skill />
        <Projects />
        <Certification/>
        <Contact />
        <Footer />
    </div>
  )
}

export default App