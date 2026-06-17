import { useEffect, useState } from 'react'
import './Header.css'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#skills', label: 'Skills' },
  { href: '#why-hire', label: 'Why Hire Me' },
  { href: '#contact', label: 'Contact' },
]

function Header({ theme, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header" aria-label="Primary navigation">
      <div className="header-top">
        <div className="brand-wrap">
          <a className="brand" href="#top" aria-label="Catrizia Jane T. Patrimonio home" onClick={closeMenu}>
            <span className="brand-mark">C</span>

            <span className="brand-text">
              <strong>Catrizia Patrimonio</strong>
              <small>Legal Virtual Assistant</small>
            </span>
          </a>
        </div>

        <div className="header-controls">
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

          <button
            className={`menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="site-nav"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav
        id="site-nav"
        className={`nav-links ${isMenuOpen ? 'is-open' : ''}`}
      >
        {navItems.map(({ href, label }) => (
          <a key={href} href={href} onClick={closeMenu}>
            {label}
          </a>
        ))}

        <a
          className="nav-cta"
          href="/cat-resume.pdf"
          download="Catrizia_Patrimonio_Resume.pdf"
          onClick={closeMenu}
        >
          Resume
        </a>
      </nav>
    </header>
  )
}

export default Header
