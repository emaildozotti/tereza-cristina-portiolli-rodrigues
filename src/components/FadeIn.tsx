// DECISÃO CRIATIVA: FadeIn multi-direcional com easing expressivo [0.16,1,0.3,1]
// para entrada cinematográfica — hero usa left/right, seções usam up
import { motion } from 'motion/react'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

export const FadeIn = ({ children, delay = 0, className = '', direction = 'up' }: FadeInProps) => {
  const directions = {
    up:    { y: 40 },
    down:  { y: -40 },
    left:  { x: 40 },
    right: { x: -40 },
    none:  {}
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-80px 0px' }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
