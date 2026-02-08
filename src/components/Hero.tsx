import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Button from './ui/Button'
import AnimatedBackground from './ui/AnimatedBackground'
import { fadeInUp, staggerContainer } from '../lib/motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-surface pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-white/60">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-glow" />
            Available for new projects
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6"
        >
          <span className="text-white">Kaniel </span>
          <span className="text-gradient">Tord</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-xl sm:text-2xl font-light text-white/40 mb-4"
        >
          AI & Solar Technology
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="text-base sm:text-lg text-white/50 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Building AI-powered systems that transform solar energy businesses
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="#services" variant="primary" size="lg">
            View Services
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
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white/30 hover:text-white/60 hover:border-white/20 transition-all duration-300"
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
