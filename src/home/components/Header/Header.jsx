import './Header.css'

function Header({ theme, onToggleTheme }) {
  return (
    <header className="site-header" aria-label="Primary navigation">
      
      <div className="brand-wrap">
        <a className="brand" href="#top" aria-label="Catrizia Jane T. Patrimonio home">
          
          <span className="brand-mark">C</span>

          <span className="brand-text">
            <strong>Catrizia Patrimonio</strong>
            <small>Legal Virtual Assistant</small>
          </span>
        </a>

        
      </div>


      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#process">Process</a>
        <a href="#skills">Skills</a>
        <a href="#why-hire">Why Hire Me</a>
        <a href="#contact">Contact </a>
        <a className="nav-cta" href="/cat-resume.pdf" download="Catrizia_Patrimonio_Resume.pdf">
          Resume
        </a> 
        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          title={theme === 'light' ? 'Dark mode' : 'Light mode'}
        >
          <i
            className={`ti ${theme === 'light' ? 'ti-moon-stars' : 'ti-sun-high'}`}
            aria-hidden="true"
          />
        </button>
    </nav>
    
    </header>
  )
}

export default Header
