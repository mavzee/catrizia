import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import Process from './components/Process/Process.jsx'
import Services from './components/Services/Services.jsx'
import Skills from './components/Skills/Skills.jsx'
import WhyHire from './components/WhyHire/WhyHire.jsx'
import './home.css'

function Home() {
  return (
    <main className="home-page">
      <Header />
      <Hero />
      <About />
      <Services />
      <Process />
      <Skills />
      <WhyHire />
      <Contact />
    </main>
  )
}

export default Home