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
    const isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const glow = document.querySelector('.cursor-glow')
    const onMove = (e) => {
      if (!glow) return
      glow.style.left = `${e.clientX}px`
      glow.style.top = `${e.clientY}px`
    }

    if (!isTouchDevice && !prefersReducedMotion) {
      window.addEventListener('mousemove', onMove)
    }

    let observer
    const revealItems = document.querySelectorAll('.reveal')

    if (isTouchDevice || prefersReducedMotion) {
      revealItems.forEach((el) => el.classList.add('visible'))
    } else {
      observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add('visible')
          }),
        { threshold: 0.12 }
      )
      revealItems.forEach((el) => observer.observe(el))
    }

    const canvas = document.getElementById('particles')
    let raf
    let onResize

    if (canvas) {
      const ctx = canvas.getContext('2d')
      const particleCount = isTouchDevice ? 18 : 55

      const setCanvasSize = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }

      setCanvasSize()

      const dots = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * (isTouchDevice ? 1.6 : 2) + 0.8,
        dx: (Math.random() - 0.5) * (isTouchDevice ? 0.18 : 0.4),
        dy: (Math.random() - 0.5) * (isTouchDevice ? 0.18 : 0.4),
      }))

      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        dots.forEach((dot) => {
          ctx.beginPath()
          ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(202, 89, 149, 0.18)'
          ctx.fill()
          dot.x += dot.dx
          dot.y += dot.dy
          if (dot.x < 0 || dot.x > canvas.width) dot.dx *= -1
          if (dot.y < 0 || dot.y > canvas.height) dot.dy *= -1
        })
        raf = requestAnimationFrame(draw)
      }

      if (!prefersReducedMotion) {
        draw()
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }

      onResize = () => {
        setCanvasSize()
      }
      window.addEventListener('resize', onResize)
    }

    return () => {
      window.removeEventListener('mousemove', onMove)
      if (onResize) {
        window.removeEventListener('resize', onResize)
      }
      cancelAnimationFrame(raf)
      observer?.disconnect()
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
      <canvas
        id="particles"
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
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
