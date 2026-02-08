import { motion, useReducedMotion } from 'motion/react'
import { fadeUp, fadeDown, fadeLeft, fadeRight, scaleIn } from '../../utils/animations'

const variantMap = {
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,
  scaleIn,
}

export default function AnimatedElement({
  children,
  variant = 'fadeUp',
  delay = 0,
  className = '',
  as = 'div',
}) {
  const shouldReduceMotion = useReducedMotion()

  const selectedVariant = variantMap[variant] || fadeUp

  const animationVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
      }
    : {
        hidden: selectedVariant.hidden,
        visible: {
          ...selectedVariant.visible,
          transition: {
            ...selectedVariant.visible.transition,
            delay,
          },
        },
      }

  const Component = motion[as] || motion.div

  return (
    <Component
      variants={animationVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={className}
    >
      {children}
    </Component>
  )
}
