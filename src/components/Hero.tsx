import { motion } from 'framer-motion'
import Button from './ui/Button'
import AnimatedBackground from './ui/AnimatedBackground'
import { fadeInUp, staggerContainer } from '../lib/motion'

const stats = [
  { value: '₪10M+', label: 'Revenue Built' },
  { value: '10+', label: 'Systems' },
  { value: '4', label: 'Countries' },
  { value: '50+', label: 'Companies' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <AnimatedBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-surface pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/8 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-secondary/8 rounded-full blur-[128px] pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 sm:py-32"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-white/50">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Koh Phangan, Thailand
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6"
            >
              <span className="text-white">I build systems</span>
              <br />
              <span className="text-white">that </span>
              <span className="text-gradient">replace me</span>
              <span className="text-white">.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-white/45 leading-relaxed mb-10 max-w-lg"
            >
              After scaling a solar company to ₪10M, I started building
              AI&#8209;powered software that runs businesses — so founders
              can actually live.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/30 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
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

          {/* Photo */}
          <motion.div
            variants={fadeInUp}
            className="hidden lg:flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-8 bg-primary/10 rounded-3xl blur-[60px] pointer-events-none" />
              <div className="absolute -inset-8 bg-secondary/5 rounded-3xl blur-[80px] pointer-events-none" />
              <img
                src="/kaniel-hero.jpg"
                alt="Kaniel Tord"
                className="relative w-80 h-auto rounded-2xl border border-white/10 shadow-2xl shadow-primary/10"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
