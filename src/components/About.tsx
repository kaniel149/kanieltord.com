import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { fadeInUp, blurFadeIn, staggerContainer, photoReveal } from '../lib/motion'

export default function About() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const photoY = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section id="story" ref={sectionRef} className="py-32 px-6 relative">
      {/* Section divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl section-line"
        style={{ transformOrigin: '50%' }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-5xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,280px] gap-12 lg:gap-16 items-start">
          {/* Photo with parallax */}
          <motion.div
            style={{ y: photoY }}
            className="order-first lg:order-last flex justify-center lg:justify-end"
          >
            <motion.div variants={photoReveal} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-1000" />
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full overflow-hidden border border-white/[0.08]">
                <img
                  src="/kaniel.jpg"
                  alt="Kaniel Tord"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Story */}
          <div className="order-last lg:order-first">
            <motion.div variants={blurFadeIn} className="mb-4">
              <span className="text-primary/70 text-[11px] font-medium tracking-[0.2em] uppercase">
                My Story
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-[1.15]"
            >
              AI is not a toy.
              <br />
              <span className="text-gradient">It's how I run my businesses.</span>
            </motion.h2>

            <motion.p
              variants={blurFadeIn}
              className="text-base sm:text-lg text-white/35 leading-relaxed mb-6 max-w-2xl"
            >
              I built a solar company to ₪10M in revenue. Hired teams,
              managed projects across countries, closed deals manually.
              Then I realized — I was scaling the work, not the business.
            </motion.p>

            <motion.p
              variants={blurFadeIn}
              className="text-base sm:text-lg text-white/35 leading-relaxed mb-6 max-w-2xl"
            >
              So I started replacing myself. Not with employees — with AI-powered
              systems. A CRM that runs 7 companies from one codebase. A GIS platform
              that maps 27,800 buildings and generates proposals automatically.
              Marketing systems that capture and convert leads while I sleep.
            </motion.p>

            <motion.p
              variants={blurFadeIn}
              className="text-base sm:text-lg text-white/35 leading-relaxed mb-10 max-w-2xl"
            >
              Today I operate across 5 countries from Koh Phangan, Thailand.
              No office. No large team. Just systems that create real value
              for real customers — and AI that makes it all possible.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="relative pl-6"
            >
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/15 to-transparent" />
              <p className="text-white/50 text-lg italic leading-relaxed">
                "Most people use AI to generate content. I use it to generate companies.
                <br />
                <span className="text-white/70">That's the difference.</span>"
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
