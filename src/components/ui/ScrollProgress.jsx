import { motion, useScroll } from 'motion/react'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 right-0 left-0 z-50 h-0.5 origin-left bg-accent"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
