import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Button from './ui/Button'
import { blurFadeIn, staggerContainer } from '../lib/motion'
import { useCounter } from '../hooks/useCounter'

const stats = [
  { value: 10, suffix: 'M+', prefix: '₪', label: 'Revenue Built' },
  { value: 10, suffix: '+', prefix: '', label: 'Systems' },
  { value: 4, suffix: '', prefix: '', label: 'Countries' },
  { value: 50, suffix: '+', prefix: '', label: 'Companies' },
]

function StatCounter({ value, suffix, prefix, label }: typeof stats[0]) {
  const { count, ref } = useCounter(value, 2000)
  return (
    <div ref={ref}>
      <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
        {prefix}{count}{suffix}
      </div>
      <div className="text-[11px] text-white/25 mt-1.5 tracking-[0.15em] uppercase font-medium">
        {label}
      </div>
    </div>
  )
}

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 0.95])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 30])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface pointer-events-none" />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/[0.07] rounded-full blur-[150px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-1/3 -right-32 w-[500px] h-[500px] bg-secondary/[0.05] rounded-full blur-[150px] pointer-events-none"
      />

      <motion.div
        style={{ y: textY }}
        className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 sm:py-32"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Text */}
          <div>
            <motion.div variants={blurFadeIn} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-medium tracking-wide rounded-full bg-white/[0.03] border border-white/[0.06] text-white/35 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/60 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Building from Koh Phangan, Thailand
              </span>
            </motion.div>

            {/* Headline — line-by-line reveal */}
            <div className="mb-6">
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: '100%', opacity: 0, filter: 'blur(8px)' }}
                  animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
                >
                  <span className="text-white">I build systems</span>
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: '100%', opacity: 0, filter: 'blur(8px)' }}
                  animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
                >
                  <span className="text-white">that </span>
                  <span className="text-gradient">replace me</span>
                  <span className="text-white">.</span>
                </motion.h1>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, filter: 'blur(20px)', y: 20 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              className="text-base sm:text-lg text-white/35 leading-relaxed mb-10 max-w-lg"
            >
              After scaling a solar company to ₪10M, I started building
              AI&#8209;powered software that runs businesses — so founders
              can actually live.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10"
            >
              {stats.map((stat) => (
                <StatCounter key={stat.label} {...stat} />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button href="#systems" variant="primary" size="lg">
                See What I Built
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                Work With Me
              </Button>
            </motion.div>
          </div>

          {/* Photo with parallax + reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 1.08, filter: 'blur(20px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            style={{ y: photoY, scale: photoScale }}
            className="hidden lg:flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20 rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-1000" />
              <img
                src="/kaniel-hero.jpg"
                alt="Kaniel Tord"
                className="relative w-80 h-auto rounded-2xl border border-white/[0.08]"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/[0.08] flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1 h-1.5 rounded-full bg-white/20" />
        </motion.div>
      </motion.div>
    </section>
  )
}
