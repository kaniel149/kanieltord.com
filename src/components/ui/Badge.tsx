interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'status'
  className?: string
}

export default function Badge({ children, variant = 'outline', className = '' }: BadgeProps) {
  const variants = {
    primary: 'bg-primary/10 text-primary border-primary/20',
    secondary: 'bg-secondary/10 text-secondary border-secondary/20',
    outline: 'bg-white/5 text-white/70 border-white/10',
    status: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  }

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
