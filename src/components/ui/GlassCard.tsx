import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: 'primary' | 'secondary' | 'none'
}

export default function GlassCard({ children, className = '', hover = true, glow = 'none' }: GlassCardProps) {
  const glowClass = glow === 'primary'
    ? 'hover:shadow-[0_0_40px_rgba(0,255,204,0.1)]'
    : glow === 'secondary'
    ? 'hover:shadow-[0_0_40px_rgba(139,92,246,0.1)]'
    : ''

  return (
    <motion.div
      className={`
        bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl
        ${hover ? 'hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300' : ''}
        ${glowClass}
        ${className}
      `}
    >
      {children}
    </motion.div>
  )
}
