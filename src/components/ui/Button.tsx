import type { ReactNode, MouseEvent } from 'react'
import { useRef } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  icon?: ReactNode
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon,
}: ButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null)

  const variants = {
    primary: 'bg-primary text-surface font-semibold hover:brightness-110 shadow-[0_0_20px_rgba(0,255,204,0.15)] hover:shadow-[0_0_30px_rgba(0,255,204,0.25)]',
    secondary: 'bg-white/[0.03] text-white/70 border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.15] hover:text-white',
    ghost: 'text-white/40 hover:text-white hover:bg-white/[0.03]',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3 text-base',
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    ref.current.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`
  }

  const handleMouseLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = 'translate(0, 0)'
  }

  const classes = `
    inline-flex items-center justify-center gap-2 rounded-full
    cursor-pointer active:scale-[0.97]
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `.trim()

  const style = {
    transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.3s, color 0.3s, border-color 0.3s, filter 0.3s, box-shadow 0.3s',
  }

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={classes}
        style={style}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {icon}
        {children}
      </a>
    )
  }

  return (
    <button
      ref={ref}
      onClick={onClick}
      className={classes}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {icon}
      {children}
    </button>
  )
}
