import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Button from './ui/Button'
import AnimatedBackground from './ui/AnimatedBackground'
import { fadeInUp, staggerContainer } from '../lib/motion'

const stats = [
  { value: '10+', label: 'Projects' },
  { value: '4', label: 'Countries' },
  { value: '50+', label: 'Users' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-surface pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/8 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/8 rounded-full blur-[128px] pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full bg-primary/10 border border-primary/20 text-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Available for new projects
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6"
        >
          <span className="text-white">I'm </span>
          <span className="text-gradient">Kaniel</span>
          <span className="text-white">.</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-xl sm:text-2xl lg:text-3xl font-light text-white/50 mb-6"
        >
          I build software for{' '}
          <span className="text-white font-normal">solar</span> &{' '}
          <span className="text-white font-normal">AI</span> companies.
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="text-base sm:text-lg text-white/35 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          From SaaS platforms to AI pipelines — I design, build, and ship
          production systems that power real businesses across 4 countries.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center gap-8 sm:gap-12 mb-12"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-xs sm:text-sm text-white/30 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="#projects" variant="primary" size="lg">
            See My Work
          </Button>
          <Button href="#contact" variant="secondary" size="lg">
            Get in Touch
          </Button>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-20"
        >
          <a
            href="#about"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white/20 hover:text-white/50 hover:border-white/20 transition-all duration-300"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown size={16} />
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
