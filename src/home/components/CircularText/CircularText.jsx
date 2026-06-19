import { useEffect } from 'react'
import { motion, useAnimation, useMotionValue } from 'motion/react'

import './CircularText.css'

const getRotationTransition = (duration, from, loop = true) => ({
  from,
  to: from + 360,
  ease: 'linear',
  duration,
  type: 'tween',
  repeat: loop ? Infinity : 0,
})

const getTransition = (duration, from) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: 'spring',
    damping: 20,
    stiffness: 300,
  },
})

function CircularText({
  text,
  spinDuration = 20,
  onHover = 'speedUp',
  className = '',
}) {
  const letters = Array.from(text)
  const controls = useAnimation()
  const rotation = useMotionValue(0)

  useEffect(() => {
    const start = rotation.get()

    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    })
  }, [controls, onHover, rotation, spinDuration, text])

  const handleHoverStart = () => {
    const start = rotation.get()

    if (!onHover) {
      return
    }

    let transitionConfig
    let scaleValue = 1

    switch (onHover) {
      case 'slowDown':
        transitionConfig = getTransition(spinDuration * 2, start)
        break
      case 'speedUp':
        transitionConfig = getTransition(spinDuration / 4, start)
        break
      case 'pause':
        transitionConfig = {
          rotate: { type: 'spring', damping: 20, stiffness: 300 },
          scale: { type: 'spring', damping: 20, stiffness: 300 },
        }
        break
      case 'goBonkers':
        transitionConfig = getTransition(spinDuration / 20, start)
        scaleValue = 0.8
        break
      default:
        transitionConfig = getTransition(spinDuration, start)
    }

    controls.start({
      rotate: start + 360,
      scale: scaleValue,
      transition: transitionConfig,
    })
  }

  const handleHoverEnd = () => {
    const start = rotation.get()

    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    })
  }

  return (
    <motion.div
      className={`circular-text ${className}`.trim()}
      style={{ rotate: rotation }}
      initial={{ rotate: 0 }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, index) => {
        const rotationDeg = (360 / letters.length) * index
        const factor = Math.PI / letters.length
        const x = factor * index
        const y = factor * index
        const transform = `rotateZ(${rotationDeg}deg) translate3d(${x}px, ${y}px, 0)`

        return (
          <span key={`${letter}-${index}`} style={{ transform, WebkitTransform: transform }}>
            {letter}
          </span>
        )
      })}
    </motion.div>
  )
}

export default CircularText
