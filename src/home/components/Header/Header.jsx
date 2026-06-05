import './Header.css'

function Header() {
  return (
    <header className="site-header" aria-label="Primary navigation">
      <a className="brand" href="#top" aria-label="Catrizia Jane T. Patrimonio home">
        <span className="brand-mark">C</span>
        <span>Catrizia Patrimonio</span>
      </a>

      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#skills">Skills</a>
        <a href="#why-hire">Why Hire Me</a>
        <a className="nav-cta" href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Header