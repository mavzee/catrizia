import { useEffect, useState } from 'react'
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
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'light'
    }

    return window.localStorage.getItem('home-theme') || 'light'
  })

  useEffect(() => {
    // ── Cursor glow ──
    const glow = document.querySelector('.cursor-glow')
    const onMove = (e) => {
      glow.style.left = e.clientX + 'px'
      glow.style.top  = e.clientY + 'px'
    }
    window.addEventListener('mousemove', onMove)

    // ── Scroll reveal ──
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    // ── Particles ──
    const canvas = document.getElementById('particles')
    const ctx = canvas.getContext('2d')
    canvas.width  = window.innerWidth
    canvas.height = window.innerHeight

    const dots = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
    }))

    let raf
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      dots.forEach(d => {
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(202, 89, 149, 0.18)'
        ctx.fill()
        d.x += d.dx
        d.y += d.dy
        if (d.x < 0 || d.x > canvas.width)  d.dx *= -1
        if (d.y < 0 || d.y > canvas.height) d.dy *= -1
      })
      raf = requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('home-theme', theme)
  }, [theme])

  const handleToggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <main className="home-page" data-theme={theme}>
      {/* Particles canvas */}
      <canvas
        id="particles"
        style={{
          position: 'fixed', inset: 0,
          pointerEvents: 'none', zIndex: 0
        }}
      />
      {/* Cursor glow */}
      <div className="cursor-glow" />

      <Header theme={theme} onToggleTheme={handleToggleTheme} />
      <div className="reveal"><Hero /></div>
      <div className="reveal"><About /></div>
      <div className="reveal"><Services /></div>
      <div className="reveal"><Process /></div>
      <div className="reveal"><Skills /></div>
      <div className="reveal"><WhyHire /></div>
      <div className="reveal"><Contact /></div>
    </main>
  )
}

export default Home
